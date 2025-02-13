var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointSpring' )
  var i271 = data
  i270.spring = i271[0]
  i270.damper = i271[1]
  i270.targetPosition = i271[2]
  return i270
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointMotor' )
  var i273 = data
  i272.m_TargetVelocity = i273[0]
  i272.m_Force = i273[1]
  i272.m_FreeSpin = i273[2]
  return i272
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointLimits' )
  var i275 = data
  i274.m_Min = i275[0]
  i274.m_Max = i275[1]
  i274.m_Bounciness = i275[2]
  i274.m_BounceMinVelocity = i275[3]
  i274.m_ContactDistance = i275[4]
  i274.minBounce = i275[5]
  i274.maxBounce = i275[6]
  return i274
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointDrive' )
  var i277 = data
  i276.m_PositionSpring = i277[0]
  i276.m_PositionDamper = i277[1]
  i276.m_MaximumForce = i277[2]
  i276.m_UseAcceleration = i277[3]
  return i276
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i279 = data
  i278.m_Spring = i279[0]
  i278.m_Damper = i279[1]
  return i278
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i281 = data
  i280.m_Limit = i281[0]
  i280.m_Bounciness = i281[1]
  i280.m_ContactDistance = i281[2]
  return i280
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i283 = data
  i282.m_ExtremumSlip = i283[0]
  i282.m_ExtremumValue = i283[1]
  i282.m_AsymptoteSlip = i283[2]
  i282.m_AsymptoteValue = i283[3]
  i282.m_Stiffness = i283[4]
  return i282
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i285 = data
  i284.m_LowerAngle = i285[0]
  i284.m_UpperAngle = i285[1]
  return i284
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i287 = data
  i286.m_MotorSpeed = i287[0]
  i286.m_MaximumMotorTorque = i287[1]
  return i286
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i289 = data
  i288.m_DampingRatio = i289[0]
  i288.m_Frequency = i289[1]
  i288.m_Angle = i289[2]
  return i288
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i291 = data
  i290.m_LowerTranslation = i291[0]
  i290.m_UpperTranslation = i291[1]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i293 = data
  i292.position = new pc.Vec3( i293[0], i293[1], i293[2] )
  i292.scale = new pc.Vec3( i293[3], i293[4], i293[5] )
  i292.rotation = new pc.Quat(i293[6], i293[7], i293[8], i293[9])
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i295 = data
  request.r(i295[0], i295[1], 0, i294, 'sharedMesh')
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i297 = data
  request.r(i297[0], i297[1], 0, i296, 'additionalVertexStreams')
  i296.enabled = !!i297[2]
  request.r(i297[3], i297[4], 0, i296, 'sharedMaterial')
  var i299 = i297[5]
  var i298 = []
  for(var i = 0; i < i299.length; i += 2) {
  request.r(i299[i + 0], i299[i + 1], 2, i298, '')
  }
  i296.sharedMaterials = i298
  i296.receiveShadows = !!i297[6]
  i296.shadowCastingMode = i297[7]
  i296.sortingLayerID = i297[8]
  i296.sortingOrder = i297[9]
  i296.lightmapIndex = i297[10]
  i296.lightmapSceneIndex = i297[11]
  i296.lightmapScaleOffset = new pc.Vec4( i297[12], i297[13], i297[14], i297[15] )
  i296.lightProbeUsage = i297[16]
  i296.reflectionProbeUsage = i297[17]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i303 = data
  i302.name = i303[0]
  i302.tagId = i303[1]
  i302.enabled = !!i303[2]
  i302.isStatic = !!i303[3]
  i302.layer = i303[4]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i305 = data
  i304.name = i305[0]
  i304.halfPrecision = !!i305[1]
  i304.useUInt32IndexFormat = !!i305[2]
  i304.vertexCount = i305[3]
  i304.aabb = i305[4]
  var i307 = i305[5]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( !!i307[i + 0] );
  }
  i304.streams = i306
  i304.vertices = i305[6]
  var i309 = i305[7]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i309[i + 0]) );
  }
  i304.subMeshes = i308
  var i311 = i305[8]
  var i310 = []
  for(var i = 0; i < i311.length; i += 16) {
    i310.push( new pc.Mat4().setData(i311[i + 0], i311[i + 1], i311[i + 2], i311[i + 3],  i311[i + 4], i311[i + 5], i311[i + 6], i311[i + 7],  i311[i + 8], i311[i + 9], i311[i + 10], i311[i + 11],  i311[i + 12], i311[i + 13], i311[i + 14], i311[i + 15]) );
  }
  i304.bindposes = i310
  var i313 = i305[9]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i313[i + 0]) );
  }
  i304.blendShapes = i312
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i319 = data
  i318.triangles = i319[0]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i325 = data
  i324.name = i325[0]
  var i327 = i325[1]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i327[i + 0]) );
  }
  i324.frames = i326
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i328 = root || new pc.UnityMaterial()
  var i329 = data
  i328.name = i329[0]
  request.r(i329[1], i329[2], 0, i328, 'shader')
  i328.renderQueue = i329[3]
  i328.enableInstancing = !!i329[4]
  var i331 = i329[5]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i331[i + 0]) );
  }
  i328.floatParameters = i330
  var i333 = i329[6]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i333[i + 0]) );
  }
  i328.colorParameters = i332
  var i335 = i329[7]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i335[i + 0]) );
  }
  i328.vectorParameters = i334
  var i337 = i329[8]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i337[i + 0]) );
  }
  i328.textureParameters = i336
  var i339 = i329[9]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i339[i + 0]) );
  }
  i328.materialFlags = i338
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i343 = data
  i342.name = i343[0]
  i342.value = i343[1]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i347 = data
  i346.name = i347[0]
  i346.value = new pc.Color(i347[1], i347[2], i347[3], i347[4])
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i351 = data
  i350.name = i351[0]
  i350.value = new pc.Vec4( i351[1], i351[2], i351[3], i351[4] )
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i355 = data
  i354.name = i355[0]
  request.r(i355[1], i355[2], 0, i354, 'value')
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i359 = data
  i358.name = i359[0]
  i358.enabled = !!i359[1]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i361 = data
  i360.center = new pc.Vec3( i361[0], i361[1], i361[2] )
  i360.size = new pc.Vec3( i361[3], i361[4], i361[5] )
  i360.enabled = !!i361[6]
  i360.isTrigger = !!i361[7]
  request.r(i361[8], i361[9], 0, i360, 'material')
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i363 = data
  i362.enabled = !!i363[0]
  request.r(i363[1], i363[2], 0, i362, 'sharedMaterial')
  var i365 = i363[3]
  var i364 = []
  for(var i = 0; i < i365.length; i += 2) {
  request.r(i365[i + 0], i365[i + 1], 2, i364, '')
  }
  i362.sharedMaterials = i364
  i362.receiveShadows = !!i363[4]
  i362.shadowCastingMode = i363[5]
  i362.sortingLayerID = i363[6]
  i362.sortingOrder = i363[7]
  i362.lightmapIndex = i363[8]
  i362.lightmapSceneIndex = i363[9]
  i362.lightmapScaleOffset = new pc.Vec4( i363[10], i363[11], i363[12], i363[13] )
  i362.lightProbeUsage = i363[14]
  i362.reflectionProbeUsage = i363[15]
  i362.color = new pc.Color(i363[16], i363[17], i363[18], i363[19])
  request.r(i363[20], i363[21], 0, i362, 'sprite')
  i362.flipX = !!i363[22]
  i362.flipY = !!i363[23]
  i362.drawMode = i363[24]
  i362.size = new pc.Vec2( i363[25], i363[26] )
  i362.tileMode = i363[27]
  i362.adaptiveModeThreshold = i363[28]
  i362.maskInteraction = i363[29]
  i362.spriteSortPoint = i363[30]
  return i362
}

Deserializers["TrapMovement"] = function (request, data, root) {
  var i366 = root || request.c( 'TrapMovement' )
  var i367 = data
  i366.speedMult = i367[0]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i369 = data
  i368.name = i369[0]
  i368.width = i369[1]
  i368.height = i369[2]
  i368.mipmapCount = i369[3]
  i368.anisoLevel = i369[4]
  i368.filterMode = i369[5]
  i368.hdr = !!i369[6]
  i368.format = i369[7]
  i368.wrapMode = i369[8]
  i368.alphaIsTransparency = !!i369[9]
  i368.alphaSource = i369[10]
  i368.graphicsFormat = i369[11]
  i368.sRGBTexture = !!i369[12]
  i368.desiredColorSpace = i369[13]
  i368.wrapU = i369[14]
  i368.wrapV = i369[15]
  return i368
}

Deserializers["SliceObject"] = function (request, data, root) {
  var i370 = root || request.c( 'SliceObject' )
  var i371 = data
  var i373 = i371[0]
  var i372 = new (System.Collections.Generic.List$1(Bridge.ns('SliceObjectChildren')))
  for(var i = 0; i < i373.length; i += 2) {
  request.r(i373[i + 0], i373[i + 1], 1, i372, '')
  }
  i370.childrens = i372
  i370.moveSpeed = i371[1]
  request.r(i371[2], i371[3], 0, i370, 'rigidBody')
  i370.xForce = i371[4]
  i370.yForce = i371[5]
  i370.zForce = i371[6]
  i370.speedDuration = i371[7]
  i370.speedMult = i371[8]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i377 = data
  i376.mass = i377[0]
  i376.drag = i377[1]
  i376.angularDrag = i377[2]
  i376.useGravity = !!i377[3]
  i376.isKinematic = !!i377[4]
  i376.constraints = i377[5]
  i376.maxAngularVelocity = i377[6]
  i376.collisionDetectionMode = i377[7]
  i376.interpolation = i377[8]
  return i376
}

Deserializers["SliceObjectChildren"] = function (request, data, root) {
  var i378 = root || request.c( 'SliceObjectChildren' )
  var i379 = data
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i381 = data
  i380.name = i381[0]
  i380.atlasId = i381[1]
  i380.mipmapCount = i381[2]
  i380.hdr = !!i381[3]
  i380.size = i381[4]
  i380.anisoLevel = i381[5]
  i380.filterMode = i381[6]
  var i383 = i381[7]
  var i382 = []
  for(var i = 0; i < i383.length; i += 4) {
    i382.push( UnityEngine.Rect.MinMaxRect(i383[i + 0], i383[i + 1], i383[i + 2], i383[i + 3]) );
  }
  i380.rects = i382
  i380.wrapU = i381[8]
  i380.wrapV = i381[9]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i387 = data
  i386.name = i387[0]
  i386.index = i387[1]
  i386.startup = !!i387[2]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i389 = data
  i388.enabled = !!i389[0]
  i388.aspect = i389[1]
  i388.orthographic = !!i389[2]
  i388.orthographicSize = i389[3]
  i388.backgroundColor = new pc.Color(i389[4], i389[5], i389[6], i389[7])
  i388.nearClipPlane = i389[8]
  i388.farClipPlane = i389[9]
  i388.fieldOfView = i389[10]
  i388.depth = i389[11]
  i388.clearFlags = i389[12]
  i388.cullingMask = i389[13]
  i388.rect = i389[14]
  request.r(i389[15], i389[16], 0, i388, 'targetTexture')
  i388.usePhysicalProperties = !!i389[17]
  i388.focalLength = i389[18]
  i388.sensorSize = new pc.Vec2( i389[19], i389[20] )
  i388.lensShift = new pc.Vec2( i389[21], i389[22] )
  i388.gateFit = i389[23]
  i388.commandBufferCount = i389[24]
  i388.cameraType = i389[25]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i391 = data
  i390.enabled = !!i391[0]
  i390.type = i391[1]
  i390.color = new pc.Color(i391[2], i391[3], i391[4], i391[5])
  i390.cullingMask = i391[6]
  i390.intensity = i391[7]
  i390.range = i391[8]
  i390.spotAngle = i391[9]
  i390.shadows = i391[10]
  i390.shadowNormalBias = i391[11]
  i390.shadowBias = i391[12]
  i390.shadowStrength = i391[13]
  i390.shadowResolution = i391[14]
  i390.lightmapBakeType = i391[15]
  i390.renderMode = i391[16]
  request.r(i391[17], i391[18], 0, i390, 'cookie')
  i390.cookieSize = i391[19]
  return i390
}

Deserializers["ObjectSpawner"] = function (request, data, root) {
  var i392 = root || request.c( 'ObjectSpawner' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'prefab')
  i392.spawnDuration = i393[2]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i395 = data
  i394.ambientIntensity = i395[0]
  i394.reflectionIntensity = i395[1]
  i394.ambientMode = i395[2]
  i394.ambientLight = new pc.Color(i395[3], i395[4], i395[5], i395[6])
  i394.ambientSkyColor = new pc.Color(i395[7], i395[8], i395[9], i395[10])
  i394.ambientGroundColor = new pc.Color(i395[11], i395[12], i395[13], i395[14])
  i394.ambientEquatorColor = new pc.Color(i395[15], i395[16], i395[17], i395[18])
  i394.fogColor = new pc.Color(i395[19], i395[20], i395[21], i395[22])
  i394.fogEndDistance = i395[23]
  i394.fogStartDistance = i395[24]
  i394.fogDensity = i395[25]
  i394.fog = !!i395[26]
  request.r(i395[27], i395[28], 0, i394, 'skybox')
  i394.fogMode = i395[29]
  var i397 = i395[30]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i397[i + 0]) );
  }
  i394.lightmaps = i396
  i394.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i395[31], i394.lightProbes)
  i394.lightmapsMode = i395[32]
  i394.mixedBakeMode = i395[33]
  i394.environmentLightingMode = i395[34]
  i394.ambientProbe = new pc.SphericalHarmonicsL2(i395[35])
  i394.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i395[36])
  i394.useReferenceAmbientProbe = !!i395[37]
  request.r(i395[38], i395[39], 0, i394, 'customReflection')
  request.r(i395[40], i395[41], 0, i394, 'defaultReflection')
  i394.defaultReflectionMode = i395[42]
  i394.defaultReflectionResolution = i395[43]
  i394.sunLightObjectId = i395[44]
  i394.pixelLightCount = i395[45]
  i394.defaultReflectionHDR = !!i395[46]
  i394.hasLightDataAsset = !!i395[47]
  i394.hasManualGenerate = !!i395[48]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'lightmapColor')
  request.r(i401[2], i401[3], 0, i400, 'lightmapDirection')
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i402 = root || new UnityEngine.LightProbes()
  var i403 = data
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i411 = data
  var i413 = i411[0]
  var i412 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i413.length; i += 1) {
    i412.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i413[i + 0]));
  }
  i410.ShaderCompilationErrors = i412
  i410.name = i411[1]
  i410.guid = i411[2]
  var i415 = i411[3]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( i415[i + 0] );
  }
  i410.shaderDefinedKeywords = i414
  var i417 = i411[4]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i417[i + 0]) );
  }
  i410.passes = i416
  var i419 = i411[5]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i419[i + 0]) );
  }
  i410.usePasses = i418
  var i421 = i411[6]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i421[i + 0]) );
  }
  i410.defaultParameterValues = i420
  request.r(i411[7], i411[8], 0, i410, 'unityFallbackShader')
  i410.readDepth = !!i411[9]
  i410.isCreatedByShaderGraph = !!i411[10]
  i410.compiled = !!i411[11]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i425 = data
  i424.shaderName = i425[0]
  i424.errorMessage = i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i430 = root || new pc.UnityShaderPass()
  var i431 = data
  i430.id = i431[0]
  i430.subShaderIndex = i431[1]
  i430.name = i431[2]
  i430.passType = i431[3]
  i430.grabPassTextureName = i431[4]
  i430.usePass = !!i431[5]
  i430.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[6], i430.zTest)
  i430.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[7], i430.zWrite)
  i430.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[8], i430.culling)
  i430.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i431[9], i430.blending)
  i430.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i431[10], i430.alphaBlending)
  i430.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[11], i430.colorWriteMask)
  i430.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[12], i430.offsetUnits)
  i430.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[13], i430.offsetFactor)
  i430.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[14], i430.stencilRef)
  i430.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[15], i430.stencilReadMask)
  i430.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[16], i430.stencilWriteMask)
  i430.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i431[17], i430.stencilOp)
  i430.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i431[18], i430.stencilOpFront)
  i430.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i431[19], i430.stencilOpBack)
  var i433 = i431[20]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i433[i + 0]) );
  }
  i430.tags = i432
  var i435 = i431[21]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( i435[i + 0] );
  }
  i430.passDefinedKeywords = i434
  var i437 = i431[22]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i437[i + 0]) );
  }
  i430.passDefinedKeywordGroups = i436
  var i439 = i431[23]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i439[i + 0]) );
  }
  i430.variants = i438
  var i441 = i431[24]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i441[i + 0]) );
  }
  i430.excludedVariants = i440
  i430.hasDepthReader = !!i431[25]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i443 = data
  i442.val = i443[0]
  i442.name = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i445 = data
  i444.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[0], i444.src)
  i444.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[1], i444.dst)
  i444.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[2], i444.op)
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i447 = data
  i446.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[0], i446.pass)
  i446.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[1], i446.fail)
  i446.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[2], i446.zFail)
  i446.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[3], i446.comp)
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i451 = data
  i450.name = i451[0]
  i450.value = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i455 = data
  var i457 = i455[0]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( i457[i + 0] );
  }
  i454.keywords = i456
  i454.hasDiscard = !!i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i461 = data
  i460.passId = i461[0]
  i460.subShaderIndex = i461[1]
  var i463 = i461[2]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i460.keywords = i462
  i460.vertexProgram = i461[3]
  i460.fragmentProgram = i461[4]
  i460.exportedForWebGl2 = !!i461[5]
  i460.readDepth = !!i461[6]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'shader')
  i466.pass = i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i471 = data
  i470.name = i471[0]
  i470.type = i471[1]
  i470.value = new pc.Vec4( i471[2], i471[3], i471[4], i471[5] )
  i470.textureValue = i471[6]
  i470.shaderPropertyFlag = i471[7]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i473 = data
  i472.name = i473[0]
  request.r(i473[1], i473[2], 0, i472, 'texture')
  i472.aabb = i473[3]
  i472.vertices = i473[4]
  i472.triangles = i473[5]
  i472.textureRect = UnityEngine.Rect.MinMaxRect(i473[6], i473[7], i473[8], i473[9])
  i472.packedRect = UnityEngine.Rect.MinMaxRect(i473[10], i473[11], i473[12], i473[13])
  i472.border = new pc.Vec4( i473[14], i473[15], i473[16], i473[17] )
  i472.transparency = i473[18]
  i472.bounds = i473[19]
  i472.pixelsPerUnit = i473[20]
  i472.textureWidth = i473[21]
  i472.textureHeight = i473[22]
  i472.nativeSize = new pc.Vec2( i473[23], i473[24] )
  i472.pivot = new pc.Vec2( i473[25], i473[26] )
  i472.textureRectOffset = new pc.Vec2( i473[27], i473[28] )
  return i472
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i474 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i475 = data
  i474.useSafeMode = !!i475[0]
  i474.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i475[1], i474.safeModeOptions)
  i474.timeScale = i475[2]
  i474.unscaledTimeScale = i475[3]
  i474.useSmoothDeltaTime = !!i475[4]
  i474.maxSmoothUnscaledTime = i475[5]
  i474.rewindCallbackMode = i475[6]
  i474.showUnityEditorReport = !!i475[7]
  i474.logBehaviour = i475[8]
  i474.drawGizmos = !!i475[9]
  i474.defaultRecyclable = !!i475[10]
  i474.defaultAutoPlay = i475[11]
  i474.defaultUpdateType = i475[12]
  i474.defaultTimeScaleIndependent = !!i475[13]
  i474.defaultEaseType = i475[14]
  i474.defaultEaseOvershootOrAmplitude = i475[15]
  i474.defaultEasePeriod = i475[16]
  i474.defaultAutoKill = !!i475[17]
  i474.defaultLoopType = i475[18]
  i474.debugMode = !!i475[19]
  i474.debugStoreTargetId = !!i475[20]
  i474.showPreviewPanel = !!i475[21]
  i474.storeSettingsLocation = i475[22]
  i474.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i475[23], i474.modules)
  i474.createASMDEF = !!i475[24]
  i474.showPlayingTweens = !!i475[25]
  i474.showPausedTweens = !!i475[26]
  return i474
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i476 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i477 = data
  i476.logBehaviour = i477[0]
  i476.nestedTweenFailureBehaviour = i477[1]
  return i476
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i478 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i479 = data
  i478.showPanel = !!i479[0]
  i478.audioEnabled = !!i479[1]
  i478.physicsEnabled = !!i479[2]
  i478.physics2DEnabled = !!i479[3]
  i478.spriteEnabled = !!i479[4]
  i478.uiEnabled = !!i479[5]
  i478.textMeshProEnabled = !!i479[6]
  i478.tk2DEnabled = !!i479[7]
  i478.deAudioEnabled = !!i479[8]
  i478.deUnityExtendedEnabled = !!i479[9]
  i478.epoOutlineEnabled = !!i479[10]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i481 = data
  var i483 = i481[0]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i483[i + 0]) );
  }
  i480.files = i482
  i480.componentToPrefabIds = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i487 = data
  i486.path = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'unityObject')
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i489 = data
  var i491 = i489[0]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i491[i + 0]) );
  }
  i488.scriptsExecutionOrder = i490
  var i493 = i489[1]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i493[i + 0]) );
  }
  i488.sortingLayers = i492
  var i495 = i489[2]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i495[i + 0]) );
  }
  i488.cullingLayers = i494
  i488.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i489[3], i488.timeSettings)
  i488.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i489[4], i488.physicsSettings)
  i488.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i489[5], i488.physics2DSettings)
  i488.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i489[6], i488.qualitySettings)
  i488.enableRealtimeShadows = !!i489[7]
  i488.enableAutoInstancing = !!i489[8]
  i488.enableDynamicBatching = !!i489[9]
  i488.lightmapEncodingQuality = i489[10]
  i488.desiredColorSpace = i489[11]
  var i497 = i489[12]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( i497[i + 0] );
  }
  i488.allTags = i496
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i505 = data
  i504.id = i505[0]
  i504.name = i505[1]
  i504.value = i505[2]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i509 = data
  i508.id = i509[0]
  i508.name = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i511 = data
  i510.fixedDeltaTime = i511[0]
  i510.maximumDeltaTime = i511[1]
  i510.timeScale = i511[2]
  i510.maximumParticleTimestep = i511[3]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i513 = data
  i512.gravity = new pc.Vec3( i513[0], i513[1], i513[2] )
  i512.defaultSolverIterations = i513[3]
  i512.bounceThreshold = i513[4]
  i512.autoSyncTransforms = !!i513[5]
  i512.autoSimulation = !!i513[6]
  var i515 = i513[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i515[i + 0]) );
  }
  i512.collisionMatrix = i514
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.layerId = i519[1]
  i518.otherLayerId = i519[2]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'material')
  i520.gravity = new pc.Vec2( i521[2], i521[3] )
  i520.positionIterations = i521[4]
  i520.velocityIterations = i521[5]
  i520.velocityThreshold = i521[6]
  i520.maxLinearCorrection = i521[7]
  i520.maxAngularCorrection = i521[8]
  i520.maxTranslationSpeed = i521[9]
  i520.maxRotationSpeed = i521[10]
  i520.baumgarteScale = i521[11]
  i520.baumgarteTOIScale = i521[12]
  i520.timeToSleep = i521[13]
  i520.linearSleepTolerance = i521[14]
  i520.angularSleepTolerance = i521[15]
  i520.defaultContactOffset = i521[16]
  i520.autoSimulation = !!i521[17]
  i520.queriesHitTriggers = !!i521[18]
  i520.queriesStartInColliders = !!i521[19]
  i520.callbacksOnDisable = !!i521[20]
  i520.reuseCollisionCallbacks = !!i521[21]
  i520.autoSyncTransforms = !!i521[22]
  var i523 = i521[23]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i523[i + 0]) );
  }
  i520.collisionMatrix = i522
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i527 = data
  i526.enabled = !!i527[0]
  i526.layerId = i527[1]
  i526.otherLayerId = i527[2]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i531[i + 0]) );
  }
  i528.qualityLevels = i530
  var i533 = i529[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( i533[i + 0] );
  }
  i528.names = i532
  i528.shadows = i529[2]
  i528.anisotropicFiltering = i529[3]
  i528.antiAliasing = i529[4]
  i528.lodBias = i529[5]
  i528.shadowCascades = i529[6]
  i528.shadowDistance = i529[7]
  i528.shadowmaskMode = i529[8]
  i528.shadowProjection = i529[9]
  i528.shadowResolution = i529[10]
  i528.softParticles = !!i529[11]
  i528.softVegetation = !!i529[12]
  i528.activeColorSpace = i529[13]
  i528.desiredColorSpace = i529[14]
  i528.masterTextureLimit = i529[15]
  i528.maxQueuedFrames = i529[16]
  i528.particleRaycastBudget = i529[17]
  i528.pixelLightCount = i529[18]
  i528.realtimeReflectionProbes = !!i529[19]
  i528.shadowCascade2Split = i529[20]
  i528.shadowCascade4Split = new pc.Vec3( i529[21], i529[22], i529[23] )
  i528.streamingMipmapsActive = !!i529[24]
  i528.vSyncCount = i529[25]
  i528.asyncUploadBufferSize = i529[26]
  i528.asyncUploadTimeSlice = i529[27]
  i528.billboardsFaceCameraPosition = !!i529[28]
  i528.shadowNearPlaneOffset = i529[29]
  i528.streamingMipmapsMemoryBudget = i529[30]
  i528.maximumLODLevel = i529[31]
  i528.streamingMipmapsAddAllCameras = !!i529[32]
  i528.streamingMipmapsMaxLevelReduction = i529[33]
  i528.streamingMipmapsRenderersPerFrame = i529[34]
  i528.resolutionScalingFixedDPIFactor = i529[35]
  i528.streamingMipmapsMaxFileIORequests = i529[36]
  i528.currentQualityLevel = i529[37]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i539 = data
  i538.weight = i539[0]
  i538.vertices = i539[1]
  i538.normals = i539[2]
  i538.tangents = i539[3]
  return i538
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[30],"31":[15],"32":[14],"33":[14],"34":[14],"35":[14],"36":[14],"37":[14],"38":[14],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[40],"48":[40],"49":[40],"50":[40],"51":[40],"52":[40],"53":[15],"54":[3],"55":[56],"57":[56],"58":[59],"60":[59],"61":[59],"62":[58],"63":[64,59],"65":[59],"66":[58],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[59],"73":[59],"74":[59],"75":[59],"76":[64,59],"77":[59],"78":[59],"79":[59],"80":[59],"81":[64,59],"82":[59],"83":[84],"85":[84],"86":[84],"87":[84],"88":[15],"89":[15],"90":[91],"92":[91],"93":[91]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","TrapMovement","UnityEngine.Texture2D","SliceObject","SliceObjectChildren","UnityEngine.Rigidbody","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","ObjectSpawner","UnityEngine.GameObject","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "SliceMasterLuna-MultiObject";

Deserializers.lunaInitializationTime = "02/12/2025 14:51:03";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "26898";

Deserializers.projectId = "d061374d2733fcc4aa48092c69e8b074";

Deserializers.packagesInfo = "com.unity.textmeshpro: \ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3183";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.SliceMasterLuna-MultiObject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c3efac51-93f2-4ddb-a8e6-84bd8f8b8983";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

