["\n#version 100\n\nuniform \tmediump vec4 unity_LightColor[8];\nuniform \tvec4 unity_LightPosition[8];\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tmediump vec4 glstate_lightmodel_ambient;\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixInvV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nattribute highp vec3 in_POSITION0;\nattribute highp vec3 in_NORMAL0;\nattribute highp vec3 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nmediump vec3 u_xlat16_2;\nmediump vec3 u_xlat16_3;\nmediump vec3 u_xlat16_4;\nfloat u_xlat15;\nmediump float u_xlat16_17;\nvoid main()\n{\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].yyy;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].www + u_xlat0.xyz;\n    u_xlat0.x = dot(u_xlat0.xyz, in_NORMAL0.xyz);\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].yyy;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].xxx + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].zzz + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].www + u_xlat1.xyz;\n    u_xlat0.y = dot(u_xlat1.xyz, in_NORMAL0.xyz);\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].yyy;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].xxx + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].zzz + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].www + u_xlat1.xyz;\n    u_xlat0.z = dot(u_xlat1.xyz, in_NORMAL0.xyz);\n    u_xlat15 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat15 = inversesqrt(u_xlat15);\n    u_xlat0.xyz = vec3(u_xlat15) * u_xlat0.xyz;\n    u_xlat16_2.x = dot(u_xlat0.xyz, unity_LightPosition[0].xyz);\n    u_xlat16_2.x = max(u_xlat16_2.x, 0.0);\n    u_xlat16_2.xyz = u_xlat16_2.xxx * unity_LightColor[0].xyz;\n    u_xlat16_2.xyz = u_xlat16_2.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_2.xyz = min(u_xlat16_2.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + glstate_lightmodel_ambient.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[1].xyz);\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_3.xyz = vec3(u_xlat16_17) * unity_LightColor[1].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[2].xyz);\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_3.xyz = vec3(u_xlat16_17) * unity_LightColor[2].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[3].xyz);\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_3.xyz = vec3(u_xlat16_17) * unity_LightColor[3].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[4].xyz);\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_3.xyz = vec3(u_xlat16_17) * unity_LightColor[4].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[5].xyz);\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_3.xyz = vec3(u_xlat16_17) * unity_LightColor[5].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_17 = dot(u_xlat0.xyz, unity_LightPosition[6].xyz);\n    u_xlat16_3.x = dot(u_xlat0.xyz, unity_LightPosition[7].xyz);\n    u_xlat16_3.x = max(u_xlat16_3.x, 0.0);\n    u_xlat16_3.xyz = u_xlat16_3.xxx * unity_LightColor[7].xyz;\n    u_xlat16_3.xyz = u_xlat16_3.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_3.xyz = min(u_xlat16_3.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_17 = max(u_xlat16_17, 0.0);\n    u_xlat16_4.xyz = vec3(u_xlat16_17) * unity_LightColor[6].xyz;\n    u_xlat16_4.xyz = u_xlat16_4.xyz * vec3(0.5, 0.5, 0.5);\n    u_xlat16_4.xyz = min(u_xlat16_4.xyz, vec3(1.0, 1.0, 1.0));\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_4.xyz;\n    vs_COLOR0.xyz = u_xlat16_3.xyz + u_xlat16_2.xyz;\n    vs_COLOR0.xyz = clamp(vs_COLOR0.xyz, 0.0, 1.0);\n    vs_COLOR0.w = 1.0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nlowp vec3 u_xlat10_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat10_0.xyz = texture2D(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat16_1.xyz = u_xlat10_0.xyz * vs_COLOR0.xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz + u_xlat16_1.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 300 es\n\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tmediump vec4 unity_LightColor[8];\nuniform \tvec4 unity_LightPosition[8];\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tmediump vec4 glstate_lightmodel_ambient;\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixInvV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tivec4 unity_VertexLightParams;\nuniform \tvec4 _MainTex_ST;\nin highp vec3 in_POSITION0;\nin highp vec3 in_NORMAL0;\nin highp vec3 in_TEXCOORD0;\nout mediump vec4 vs_COLOR0;\nout highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nbool u_xlatb1;\nvec3 u_xlat2;\nmediump vec3 u_xlat16_3;\nmediump vec3 u_xlat16_4;\nfloat u_xlat15;\nint u_xlati15;\nmediump float u_xlat16_18;\nvoid main()\n{\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].yyy;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[0].www + u_xlat0.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].yyy;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].xxx + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].zzz + u_xlat1.xyz;\n    u_xlat1.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[1].www + u_xlat1.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_WorldToObject[1].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].yyy;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_WorldToObject[0].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].xxx + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_WorldToObject[2].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].zzz + u_xlat2.xyz;\n    u_xlat2.xyz = hlslcc_mtx4x4unity_WorldToObject[3].xyz * hlslcc_mtx4x4unity_MatrixInvV[2].www + u_xlat2.xyz;\n    u_xlat0.x = dot(u_xlat0.xyz, in_NORMAL0.xyz);\n    u_xlat0.y = dot(u_xlat1.xyz, in_NORMAL0.xyz);\n    u_xlat0.z = dot(u_xlat2.xyz, in_NORMAL0.xyz);\n    u_xlat15 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat15 = inversesqrt(u_xlat15);\n    u_xlat0.xyz = vec3(u_xlat15) * u_xlat0.xyz;\n    u_xlat16_3.xyz = glstate_lightmodel_ambient.xyz;\n    for(int u_xlati_loop_1 = 0 ; u_xlati_loop_1<unity_VertexLightParams.x ; u_xlati_loop_1++)\n    {\n        u_xlat16_18 = dot(u_xlat0.xyz, unity_LightPosition[u_xlati_loop_1].xyz);\n        u_xlat16_18 = max(u_xlat16_18, 0.0);\n        u_xlat16_4.xyz = vec3(u_xlat16_18) * unity_LightColor[u_xlati_loop_1].xyz;\n        u_xlat16_4.xyz = u_xlat16_4.xyz * vec3(0.5, 0.5, 0.5);\n        u_xlat16_4.xyz = min(u_xlat16_4.xyz, vec3(1.0, 1.0, 1.0));\n        u_xlat16_3.xyz = u_xlat16_3.xyz + u_xlat16_4.xyz;\n    }\n    vs_COLOR0.xyz = u_xlat16_3.xyz;\n    vs_COLOR0.xyz = clamp(vs_COLOR0.xyz, 0.0, 1.0);\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_COLOR0.w = 1.0;\n    return;\n}\n\n","\n#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nUNITY_LOCATION(0) uniform mediump sampler2D _MainTex;\nin mediump vec4 vs_COLOR0;\nin highp vec2 vs_TEXCOORD0;\nlayout(location = 0) out mediump vec4 SV_Target0;\nmediump vec3 u_xlat16_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0.xyz = texture(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * vs_COLOR0.xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz + u_xlat16_1.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 unity_LightmapST;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec3 in_POSITION0;\nattribute highp vec3 in_TEXCOORD1;\nattribute highp vec3 in_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    vs_TEXCOORD0.xy = in_TEXCOORD1.xy * unity_LightmapST.xy + unity_LightmapST.zw;\n    vs_TEXCOORD1.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 unity_Lightmap_HDR;\nuniform lowp sampler2D _MainTex;\nuniform mediump sampler2D unity_Lightmap;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec3 u_xlat10_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0 = texture2D(unity_Lightmap, vs_TEXCOORD0.xy);\n    u_xlat16_1.x = u_xlat16_0.w * unity_Lightmap_HDR.x;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * u_xlat16_1.xxx;\n    u_xlat10_0.xyz = texture2D(_MainTex, vs_TEXCOORD1.xy).xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * u_xlat10_0.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","\n#version 300 es\n\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 unity_LightmapST;\nuniform \tvec4 _MainTex_ST;\nin highp vec3 in_POSITION0;\nin highp vec3 in_TEXCOORD1;\nin highp vec3 in_TEXCOORD0;\nout highp vec2 vs_TEXCOORD0;\nout highp vec2 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    vs_TEXCOORD0.xy = in_TEXCOORD1.xy * unity_LightmapST.xy + unity_LightmapST.zw;\n    vs_TEXCOORD1.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    return;\n}\n\n","\n#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tmediump vec4 unity_Lightmap_HDR;\nUNITY_LOCATION(0) uniform mediump sampler2D _MainTex;\nUNITY_LOCATION(1) uniform mediump sampler2D unity_Lightmap;\nin highp vec2 vs_TEXCOORD0;\nin highp vec2 vs_TEXCOORD1;\nlayout(location = 0) out mediump vec4 SV_Target0;\nmediump vec4 u_xlat16_0;\nmediump vec3 u_xlat16_1;\nvoid main()\n{\n    u_xlat16_0 = texture(unity_Lightmap, vs_TEXCOORD0.xy);\n    u_xlat16_1.x = u_xlat16_0.w * unity_Lightmap_HDR.x;\n    u_xlat16_1.xyz = u_xlat16_0.xyz * u_xlat16_1.xxx;\n    u_xlat16_0.xyz = texture(_MainTex, vs_TEXCOORD1.xy).xyz;\n    SV_Target0.xyz = u_xlat16_1.xyz * u_xlat16_0.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n"]