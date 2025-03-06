Shader "Custom/MobileDiffuse"
{
 
    Properties {
        _MainTex ("Base Texture", 2D) = "white" {}
          _Color ("Main Color", Color) = (1,1,1,1)
        _SpecularColor ("Specular Color", Color) = (1,1,1,1)
        _Shininess ("Shininess", Range(1, 100)) = 20
    }

    SubShader {
        Tags { "RenderType"="Opaque" }
        LOD 300

        CGPROGRAM
        #pragma surface surf Lambert noforwardadd

        sampler2D _MainTex;
        fixed4 _SpecularColor;
         fixed4 _Color;
        half _Shininess;

        struct Input {
            float2 uv_MainTex;
            float3 viewDir; // Needed for specular calculation
            float3 worldRefl; // Reflection vector
        };

        void surf (Input IN, inout SurfaceOutput o) {
            // Sample base texture
            fixed4 c = tex2D(_MainTex, IN.uv_MainTex);
            o.Albedo = c.rgb * _Color.rgb; // Base color

            // Get lighting data
            half3 lightDir = normalize(_WorldSpaceLightPos0.xyz); // Main directional light
            half3 normal = normalize(o.Normal); // Normalized surface normal
            half3 viewDir = normalize(IN.viewDir); // View direction

            // Compute reflection vector
            half3 reflectDir = reflect(-lightDir, normal);

            // Compute specular intensity using the Phong reflection model
            half specIntensity = pow(saturate(dot(reflectDir, viewDir)), _Shininess);
            specIntensity = saturate(specIntensity); // Ensure value is within range

            // Apply the calculated specular effect to the color
            fixed3 specularEffect = _SpecularColor.rgb * specIntensity;

            // Final color output = Diffuse + Specular
            o.Albedo += specularEffect;
        }
        ENDCG
    }


Fallback "Unlit/Texture"
}

