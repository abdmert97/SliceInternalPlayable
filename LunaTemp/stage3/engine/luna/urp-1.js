"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[12],{56:(e,t,i)=>{var s=i(33),a=i(11),n=i(2),r=(i(29),i(41)),o=i(0);const d=256,h=new Float32Array(d),l=new Float32Array(d),g=new Float32Array(d),c=new Float32Array(d),u=new Float32Array(d),p=new Float32Array(4),L=new Float32Array([4,0,0,0]),_=new Float32Array([0,0,0,0]),m=new Float32Array([0,0,0,0]),y=new Float32Array([0,0,0,0]),I=new Float32Array(16),E=new Float32Array([0,0,0,0]),T=new pc.Vec4,A=new pc.Vec4(-1,1,-1,-1),D=new o.i,R=[],P=[],C=[],v=[],U=new a.a,f=new a.a;let w=null;class S extends s.a{constructor(e,t,i){super(e,t,i),this.urpAsset=UnityEngine.Rendering.GraphicsSettings.renderPipelineAsset,this.additionalLightsRenderingMode=this.urpAsset.AdditionalLightsRenderingMode;const s=this.device.scope;var a;this.unityUrpIds={mainLightColor:s.resolve("_MainLightColor"),mainLightPosition:s.resolve("_MainLightPosition"),lightDirection:s.resolve("_LightDirection"),unityLightData:s.resolve("unity_LightData"),lightIndices:s.resolve("unity_LightIndices[0]"),additionalLightsCount:s.resolve("_AdditionalLightsCount"),occlusionProbes:s.resolve("unity_ProbesOcclusion"),glossyEnvironmentColor:s.resolve("_GlossyEnvironmentColor"),additionalLightsPosition:s.resolve("_AdditionalLightsPosition[0]"),additionalLightsColor:s.resolve("_AdditionalLightsColor[0]"),additionalLightsAttenuation:s.resolve("_AdditionalLightsAttenuation[0]"),additionalLightsSpotDir:s.resolve("_AdditionalLightsSpotDir[0]"),additionalLightsOcclusionProbe:s.resolve("_AdditionalLightsOcclusionProbes[0]"),cameraOpaqueTexture:s.resolve("_CameraOpaqueTexture"),scaledScreenParamsId:s.resolve("_ScaledScreenParams"),invCameraViewProj:s.resolve((a="_InvCameraViewProj","hlslcc_mtx4x4"+a+"[0]"))}}setCamera(e,t,i=!1){D.copy(e.invViewProjMat),this.unityUrpIds.invCameraViewProj.setValue(D.data),super.setCamera(e,t,i)}processClear(e){if(e.additionalCameraData.renderType===n.d.URP_CAMERA_RENDER_TYPE_BASE)this.device.clear(e.camera._clearOptions);else if(e.additionalCameraData.renderType===n.d.URP_CAMERA_RENDER_TYPE_OVERLAY&&e.additionalCameraData.clearDepth){const e={depth:1,flags:n.d.CLEARFLAG_DEPTH};this.device.clear(e)}}renderCameras(e){for(let t=0;t<e.length;t++){const i=e[t];this.renderCamera(i);const s=i.additionalCameraData;if(s&&s.cameraStack)for(const e of s.cameraStack._items)e&&this.renderCamera(e.handle)}}getCameras(){return this.scene._urpBaseCameras}renderMeshInstance(e,t,i,s,r){const o=this.device,d=s.material,h=(s._shaderDefs&n.d.SHADERDEF_LM)>0;if(!d||0===s.mesh.primitive.length||0===s.mesh.primitive[0].count)return;this.getPassesFromMaterial(d);const l=R.length>0,g=v.length>0,c=C.length>0;if(!l&&!g&&!c)return;h&&s.configureLightmap(),this.updateScissor();const u=s.morphInstance&&s.morphInstance._vertexBuffer||s.mesh.vertexBuffer;if(this.device.setVertexBuffer(u,0),this.device.setIndexBuffer(s.mesh.indexBuffer[0]),this.app.counters.recordDrawCall(),s.mesh.meshInstance){const e=s.mesh.meshInstance.instancingData;this.app.counters.recordVertices(e&&e.count>0?u.numVertices*e.count:u.numVertices)}else this.app.counters.recordVertices(u.numVertices);if(this.setSkinning(this.device,s),this.setMaterial(this.device,s.material),this.pushUniforms(this.device,s.parameters),this.setDrawCall(this.device,s),o.setDepthRange((s._shaderDefs&n.d.SHADERDEF_RENDERTYPE_BACKGROUND)>0?1:0,1),e.merge(d.keywords),e.merge(U),h&&e.enableKeywordId(a.b.LIGHTMAP_ON),(s._shaderDefs&n.d.SHADERDEF_DIRLM)>0&&e.enableKeywordId(a.b.DIRLIGHTMAP_COMBINED),!c||l||g||this.renderMeshInstancePasses(C,e,s),!l&&!g)return this.popUniforms(this.device,s.parameters),void this.setDrawCall(this.device,null);l&&(P[0]=R[0],this.drawUrpForwardLitPass(P,s,r,e,h,t,i)),g&&this.renderMeshInstancePasses(v,e,s),this.restoreScissorTest(),this.popUniforms(o,s.parameters),this.setDrawCall(o,null)}setupGlobalKeywordsForCamera(e,t){let i=!1,s=!1;for(let e=0;e<t.length;e++){if(t[e]._type===n.d.LIGHTTYPE_POINT||t[e]._type===n.d.LIGHTTYPE_DIRECTIONAL&&i){s=!0;break}t[e]._type===n.d.LIGHTTYPE_DIRECTIONAL&&(i=!0)}this.additionalLightsRenderingMode!==UnityEngine.Rendering.Universal.LightRenderingMode.Disabled&&s&&(this.additionalLightsRenderingMode===UnityEngine.Rendering.Universal.LightRenderingMode.PerPixel?U.enableKeywordId(a.b._ADDITIONAL_LIGHTS):this.additionalLightsRenderingMode===UnityEngine.Rendering.Universal.LightRenderingMode.PerVertex&&U.enableKeywordId(a.b._ADDITIONAL_LIGHTS_VERTEX))}drawUrpForwardLitPass(e,t,i,s,o,d,h){r.a.getLightsData(t,i,this.lightData,this.additionalLightsRenderingMode===UnityEngine.Rendering.Universal.LightRenderingMode.PerVertex),f.copy(s);const l=this.setupLightProbe(o,d);this.setupGlossyEnvColor(),this.dispatchLightProbe(l,f,o),this.dispatchMainLightUrp(this.lightData.mainLight),this.dispatchLights(this.lightData,o),t._material._shader.isCreatedByShaderGraph&&!i.find((e=>e._type===n.d.LIGHTTYPE_POINT))&&i.filter((e=>e._type===n.d.LIGHTTYPE_DIRECTIONAL)).length<=1&&f.enableKeywordId(a.b._ADDITIONAL_LIGHTS_VERTEX),this.renderMeshInstancePasses(e,f,t)}dispatchLights(e,t){const i=e.vertexLights.length>0?e.vertexLights.length:e.pixelLights.length;!t||e.mainLight&&!e.mainLight.affectLightmapped?(_[1]=0===i&&e.mainLight?1:i,_[2]=e.mainLight?1:0):(_[1]=0===i&&e.mainLight&&0===UnityEngine.RenderSettings.mixedBakeMode?1:i,_[2]=e.mainLight&&0===UnityEngine.RenderSettings.mixedBakeMode?1:0),this.unityUrpIds.unityLightData.setValue(_),this.unityUrpIds.occlusionProbes.setValue([1,1,1,1]),this.dispatchAdditionalLights(e)}dispatchMainLightUrp(e){null===e?(m[0]=0,m[1]=0,m[2]=0,m[3]=1,y[0]=0,y[1]=0,y[2]=-1,y[3]=0,I.set(pc.Mat4.IDENTITY.data)):(m.set(e._finalColor),y[0]=e._directionToLight.x,y[1]=e._directionToLight.y,y[2]=e._directionToLight.z,y[3]=0,I.set(e._worldToLightMatrix.data)),this.unityUrpIds.mainLightColor.setValue(m),this.unityUrpIds.mainLightPosition.setValue(y),this.unityUrpIds.lightDirection.setValue(y),this.lightIds.matrix.setValue(I)}dispatchAdditionalLights(e){const t=this.additionalLightsRenderingMode===UnityEngine.Rendering.Universal.LightRenderingMode.PerPixel?e.pixelLights:e.vertexLights,i=Math.min(t.length,UnityEngine.RenderSettings._pixelLightCount);for(let e=0;e<i;e++){const i=t[e];this.dispatchAdditionalLight(i,e)}this.unityUrpIds.additionalLightsPosition.setValue(h),this.unityUrpIds.additionalLightsColor.setValue(l),this.unityUrpIds.additionalLightsAttenuation.setValue(g),this.unityUrpIds.additionalLightsSpotDir.setValue(c),this.unityUrpIds.additionalLightsOcclusionProbe.setValue(u),L[0]=i,this.unityUrpIds.additionalLightsCount.setValue(L);for(let e=0;e<4;e++)p[e]=e;this.unityUrpIds.lightIndices.setValue(p)}dispatchAdditionalLight(e,t){const i=4*t,s=e._type===n.d.LIGHTTYPE_DIRECTIONAL?e._directionToLight:e._position;if(h[i+0]=s.x,h[i+1]=s.y,h[i+2]=s.z,h[i+3]=e._type===n.d.LIGHTTYPE_DIRECTIONAL?0:1,l[i+0]=e._finalColor[0],l[i+1]=e._finalColor[1],l[i+2]=e._finalColor[2],l[i+3]=e._finalColor[3],e._type===n.d.LIGHTTYPE_DIRECTIONAL)T.set(0,1,0,1);else{const t=e.range*e._attenuationEnd,i=-t/(.8*.8*t-t);T.set(1/Math.max(1e-4,e._attenuationEnd*e._attenuationEnd),i,0,1)}g[i+0]=T.x,g[i+1]=T.y,g[i+2]=T.z,g[i+3]=T.w,c[i+0]=0,c[i+1]=0,c[i+2]=1,c[i+3]=0;const a=A;a.x=0,a.y=1,u[i+0]=a.x,u[i+1]=a.y,u[i+2]=a.z,u[i+3]=a.w}setupGlossyEnvColor(){const e=UnityEngine.RenderSettings.ambientProbe,t=UnityEngine.RenderSettings._reflectionIntensity;E[0]=UnityEngine.Mathf.LinearToGammaSpace(e.data[0]*t),E[1]=UnityEngine.Mathf.LinearToGammaSpace(e.data[9]*t),E[2]=UnityEngine.Mathf.LinearToGammaSpace(e.data[18]*t),E[3]=t,this.unityUrpIds.glossyEnvironmentColor.setValue(E)}getPassesFromMaterial(e){e.getPass(n.d.SHADER_PASS_UNIVERSAL_FORWARD_LIT,R),e.getPass(n.d.SHADER_PASS_SRP_DEFAULT_UNLIT,v),e.getPass(n.d.SHADER_PASS_ALWAYS,C)}dispatchLightProbe(e,t,i){e.updateUniforms();for(let t=0;t<this.unityIds.lightProbeIds.length;t++)this.unityIds.lightProbeIds[t].setValue(e.uniforms[t]._data)}needToRenderDepth(){return this.urpAsset.RequireDepthTexture&&this.scene.hasVisibleDepthConsumers()}onOpaqueRendered(e){super.onOpaqueRendered(e),this.urpAsset.RequireOpaqueTexture&&this.drawCameraOpaqueTexture(e)}drawCameraOpaqueTexture(e){const t=this.device,i=e?e._screenParams:[this.device.width,this.device.height];null===w&&(w=this.createTexture(i[0],i[1]),w.name="_CameraOpaqueTexture"),t.setTexture(w,0),t.activeTexture(0),t.gl.copyTexSubImage2D(t.gl.TEXTURE_2D,0,0,0,0,0,w._width,w._height),this.unityUrpIds.cameraOpaqueTexture.setValue(w)}needToDrawSkybox(e,t){return e&&t.clearSkybox&&t._component.additionalCameraData.renderType===n.d.URP_CAMERA_RENDER_TYPE_BASE}}pc.ForwardRendererUrp=S}},e=>{e.O(0,[1],(()=>{return t=56,e(e.s=t);var t}));e.O()}]);