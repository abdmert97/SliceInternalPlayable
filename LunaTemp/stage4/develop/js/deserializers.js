var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSpring' )
  var i531 = data
  i530.spring = i531[0]
  i530.damper = i531[1]
  i530.targetPosition = i531[2]
  return i530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor' )
  var i533 = data
  i532.m_TargetVelocity = i533[0]
  i532.m_Force = i533[1]
  i532.m_FreeSpin = i533[2]
  return i532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointLimits' )
  var i535 = data
  i534.m_Min = i535[0]
  i534.m_Max = i535[1]
  i534.m_Bounciness = i535[2]
  i534.m_BounceMinVelocity = i535[3]
  i534.m_ContactDistance = i535[4]
  i534.minBounce = i535[5]
  i534.maxBounce = i535[6]
  return i534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointDrive' )
  var i537 = data
  i536.m_PositionSpring = i537[0]
  i536.m_PositionDamper = i537[1]
  i536.m_MaximumForce = i537[2]
  i536.m_UseAcceleration = i537[3]
  return i536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i539 = data
  i538.m_Spring = i539[0]
  i538.m_Damper = i539[1]
  return i538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i541 = data
  i540.m_Limit = i541[0]
  i540.m_Bounciness = i541[1]
  i540.m_ContactDistance = i541[2]
  return i540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i543 = data
  i542.m_ExtremumSlip = i543[0]
  i542.m_ExtremumValue = i543[1]
  i542.m_AsymptoteSlip = i543[2]
  i542.m_AsymptoteValue = i543[3]
  i542.m_Stiffness = i543[4]
  return i542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i545 = data
  i544.m_LowerAngle = i545[0]
  i544.m_UpperAngle = i545[1]
  return i544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i547 = data
  i546.m_MotorSpeed = i547[0]
  i546.m_MaximumMotorTorque = i547[1]
  return i546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i549 = data
  i548.m_DampingRatio = i549[0]
  i548.m_Frequency = i549[1]
  i548.m_Angle = i549[2]
  return i548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i551 = data
  i550.m_LowerTranslation = i551[0]
  i550.m_UpperTranslation = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i553 = data
  i552.position = new pc.Vec3( i553[0], i553[1], i553[2] )
  i552.scale = new pc.Vec3( i553[3], i553[4], i553[5] )
  i552.rotation = new pc.Quat(i553[6], i553[7], i553[8], i553[9])
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'sharedMesh')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'additionalVertexStreams')
  i556.enabled = !!i557[2]
  request.r(i557[3], i557[4], 0, i556, 'sharedMaterial')
  var i559 = i557[5]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sharedMaterials = i558
  i556.receiveShadows = !!i557[6]
  i556.shadowCastingMode = i557[7]
  i556.sortingLayerID = i557[8]
  i556.sortingOrder = i557[9]
  i556.lightmapIndex = i557[10]
  i556.lightmapSceneIndex = i557[11]
  i556.lightmapScaleOffset = new pc.Vec4( i557[12], i557[13], i557[14], i557[15] )
  i556.lightProbeUsage = i557[16]
  i556.reflectionProbeUsage = i557[17]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i563 = data
  i562.name = i563[0]
  i562.tagId = i563[1]
  i562.enabled = !!i563[2]
  i562.isStatic = !!i563[3]
  i562.layer = i563[4]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i565 = data
  i564.name = i565[0]
  i564.halfPrecision = !!i565[1]
  i564.useUInt32IndexFormat = !!i565[2]
  i564.vertexCount = i565[3]
  i564.aabb = i565[4]
  var i567 = i565[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( !!i567[i + 0] );
  }
  i564.streams = i566
  i564.vertices = i565[6]
  var i569 = i565[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i569[i + 0]) );
  }
  i564.subMeshes = i568
  var i571 = i565[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 16) {
    i570.push( new pc.Mat4().setData(i571[i + 0], i571[i + 1], i571[i + 2], i571[i + 3],  i571[i + 4], i571[i + 5], i571[i + 6], i571[i + 7],  i571[i + 8], i571[i + 9], i571[i + 10], i571[i + 11],  i571[i + 12], i571[i + 13], i571[i + 14], i571[i + 15]) );
  }
  i564.bindposes = i570
  var i573 = i565[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i573[i + 0]) );
  }
  i564.blendShapes = i572
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i579 = data
  i578.triangles = i579[0]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i585 = data
  i584.name = i585[0]
  var i587 = i585[1]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i587[i + 0]) );
  }
  i584.frames = i586
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i588 = root || new pc.UnityMaterial()
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'shader')
  i588.renderQueue = i589[3]
  i588.enableInstancing = !!i589[4]
  var i591 = i589[5]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i591[i + 0]) );
  }
  i588.floatParameters = i590
  var i593 = i589[6]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i593[i + 0]) );
  }
  i588.colorParameters = i592
  var i595 = i589[7]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i595[i + 0]) );
  }
  i588.vectorParameters = i594
  var i597 = i589[8]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i597[i + 0]) );
  }
  i588.textureParameters = i596
  var i599 = i589[9]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i599[i + 0]) );
  }
  i588.materialFlags = i598
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = new pc.Color(i607[1], i607[2], i607[3], i607[4])
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = new pc.Vec4( i611[1], i611[2], i611[3], i611[4] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i615 = data
  i614.name = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'value')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i619 = data
  i618.name = i619[0]
  i618.enabled = !!i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i621 = data
  i620.center = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.size = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.enabled = !!i621[6]
  i620.isTrigger = !!i621[7]
  request.r(i621[8], i621[9], 0, i620, 'material')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i623 = data
  i622.enabled = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'sharedMaterial')
  var i625 = i623[3]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.sharedMaterials = i624
  i622.receiveShadows = !!i623[4]
  i622.shadowCastingMode = i623[5]
  i622.sortingLayerID = i623[6]
  i622.sortingOrder = i623[7]
  i622.lightmapIndex = i623[8]
  i622.lightmapSceneIndex = i623[9]
  i622.lightmapScaleOffset = new pc.Vec4( i623[10], i623[11], i623[12], i623[13] )
  i622.lightProbeUsage = i623[14]
  i622.reflectionProbeUsage = i623[15]
  i622.color = new pc.Color(i623[16], i623[17], i623[18], i623[19])
  request.r(i623[20], i623[21], 0, i622, 'sprite')
  i622.flipX = !!i623[22]
  i622.flipY = !!i623[23]
  i622.drawMode = i623[24]
  i622.size = new pc.Vec2( i623[25], i623[26] )
  i622.tileMode = i623[27]
  i622.adaptiveModeThreshold = i623[28]
  i622.maskInteraction = i623[29]
  i622.spriteSortPoint = i623[30]
  return i622
}

Deserializers["TrapMovement"] = function (request, data, root) {
  var i626 = root || request.c( 'TrapMovement' )
  var i627 = data
  i626.speedMult = i627[0]
  request.r(i627[1], i627[2], 0, i626, 'trapParticles')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i629 = data
  i628.mass = i629[0]
  i628.drag = i629[1]
  i628.angularDrag = i629[2]
  i628.useGravity = !!i629[3]
  i628.isKinematic = !!i629[4]
  i628.constraints = i629[5]
  i628.maxAngularVelocity = i629[6]
  i628.collisionDetectionMode = i629[7]
  i628.interpolation = i629[8]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i631 = data
  i630.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i631[0], i630.main)
  i630.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i631[1], i630.colorBySpeed)
  i630.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i631[2], i630.colorOverLifetime)
  i630.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i631[3], i630.emission)
  i630.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i631[4], i630.rotationBySpeed)
  i630.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i631[5], i630.rotationOverLifetime)
  i630.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i631[6], i630.shape)
  i630.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i631[7], i630.sizeBySpeed)
  i630.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i631[8], i630.sizeOverLifetime)
  i630.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i631[9], i630.textureSheetAnimation)
  i630.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i631[10], i630.velocityOverLifetime)
  i630.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i631[11], i630.noise)
  i630.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i631[12], i630.inheritVelocity)
  i630.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i631[13], i630.forceOverLifetime)
  i630.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i631[14], i630.limitVelocityOverLifetime)
  i630.useAutoRandomSeed = !!i631[15]
  i630.randomSeed = i631[16]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemMain()
  var i633 = data
  i632.duration = i633[0]
  i632.loop = !!i633[1]
  i632.prewarm = !!i633[2]
  i632.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.startDelay)
  i632.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[4], i632.startLifetime)
  i632.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[5], i632.startSpeed)
  i632.startSize3D = !!i633[6]
  i632.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[7], i632.startSizeX)
  i632.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[8], i632.startSizeY)
  i632.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[9], i632.startSizeZ)
  i632.startRotation3D = !!i633[10]
  i632.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[11], i632.startRotationX)
  i632.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[12], i632.startRotationY)
  i632.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[13], i632.startRotationZ)
  i632.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i633[14], i632.startColor)
  i632.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[15], i632.gravityModifier)
  i632.simulationSpace = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'customSimulationSpace')
  i632.simulationSpeed = i633[19]
  i632.useUnscaledTime = !!i633[20]
  i632.scalingMode = i633[21]
  i632.playOnAwake = !!i633[22]
  i632.maxParticles = i633[23]
  i632.emitterVelocityMode = i633[24]
  i632.stopAction = i633[25]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i634 = root || new pc.MinMaxCurve()
  var i635 = data
  i634.mode = i635[0]
  i634.curveMin = new pc.AnimationCurve( { keys_flow: i635[1] } )
  i634.curveMax = new pc.AnimationCurve( { keys_flow: i635[2] } )
  i634.curveMultiplier = i635[3]
  i634.constantMin = i635[4]
  i634.constantMax = i635[5]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxGradient()
  var i637 = data
  i636.mode = i637[0]
  i636.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[1], i636.gradientMin)
  i636.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[2], i636.gradientMax)
  i636.colorMin = new pc.Color(i637[3], i637[4], i637[5], i637[6])
  i636.colorMax = new pc.Color(i637[7], i637[8], i637[9], i637[10])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i639 = data
  i638.mode = i639[0]
  var i641 = i639[1]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i641[i + 0]) );
  }
  i638.colorKeys = i640
  var i643 = i639[2]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i643[i + 0]) );
  }
  i638.alphaKeys = i642
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemColorBySpeed()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i645[1], i644.color)
  i644.range = new pc.Vec2( i645[2], i645[3] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i649 = data
  i648.color = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.time = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i653 = data
  i652.alpha = i653[0]
  i652.time = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemColorOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[1], i654.color)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemEmitter()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.rateOverTime)
  i656.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.rateOverDistance)
  var i659 = i657[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i659[i + 0]) );
  }
  i656.bursts = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemBurst()
  var i663 = data
  i662.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[0], i662.count)
  i662.cycleCount = i663[1]
  i662.minCount = i663[2]
  i662.maxCount = i663[3]
  i662.repeatInterval = i663[4]
  i662.time = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemRotationBySpeed()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  i664.range = new pc.Vec2( i665[5], i665[6] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemShape()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.shapeType = i669[1]
  i668.randomDirectionAmount = i669[2]
  i668.sphericalDirectionAmount = i669[3]
  i668.randomPositionAmount = i669[4]
  i668.alignToDirection = !!i669[5]
  i668.radius = i669[6]
  i668.radiusMode = i669[7]
  i668.radiusSpread = i669[8]
  i668.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[9], i668.radiusSpeed)
  i668.radiusThickness = i669[10]
  i668.angle = i669[11]
  i668.length = i669[12]
  i668.boxThickness = new pc.Vec3( i669[13], i669[14], i669[15] )
  i668.meshShapeType = i669[16]
  request.r(i669[17], i669[18], 0, i668, 'mesh')
  request.r(i669[19], i669[20], 0, i668, 'meshRenderer')
  request.r(i669[21], i669[22], 0, i668, 'skinnedMeshRenderer')
  i668.useMeshMaterialIndex = !!i669[23]
  i668.meshMaterialIndex = i669[24]
  i668.useMeshColors = !!i669[25]
  i668.normalOffset = i669[26]
  i668.arc = i669[27]
  i668.arcMode = i669[28]
  i668.arcSpread = i669[29]
  i668.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[30], i668.arcSpeed)
  i668.donutRadius = i669[31]
  i668.position = new pc.Vec3( i669[32], i669[33], i669[34] )
  i668.rotation = new pc.Vec3( i669[35], i669[36], i669[37] )
  i668.scale = new pc.Vec3( i669[38], i669[39], i669[40] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemSizeBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.mode = i675[1]
  i674.animation = i675[2]
  i674.numTilesX = i675[3]
  i674.numTilesY = i675[4]
  i674.useRandomRow = !!i675[5]
  i674.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[6], i674.frameOverTime)
  i674.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[7], i674.startFrame)
  i674.cycleCount = i675[8]
  i674.rowIndex = i675[9]
  i674.flipU = i675[10]
  i674.flipV = i675[11]
  i674.spriteCount = i675[12]
  var i677 = i675[13]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.sprites = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.radial)
  i680.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[5], i680.speedModifier)
  i680.space = i681[6]
  i680.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.orbitalX)
  i680.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[8], i680.orbitalY)
  i680.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[9], i680.orbitalZ)
  i680.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[10], i680.orbitalOffsetX)
  i680.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[11], i680.orbitalOffsetY)
  i680.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[12], i680.orbitalOffsetZ)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemNoise()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.separateAxes = !!i683[1]
  i682.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.strengthX)
  i682.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.strengthY)
  i682.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.strengthZ)
  i682.frequency = i683[5]
  i682.damping = !!i683[6]
  i682.octaveCount = i683[7]
  i682.octaveMultiplier = i683[8]
  i682.octaveScale = i683[9]
  i682.quality = i683[10]
  i682.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.scrollSpeed)
  i682.scrollSpeedMultiplier = i683[12]
  i682.remapEnabled = !!i683[13]
  i682.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[14], i682.remapX)
  i682.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[15], i682.remapY)
  i682.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[16], i682.remapZ)
  i682.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[17], i682.positionAmount)
  i682.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[18], i682.rotationAmount)
  i682.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[19], i682.sizeAmount)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemInheritVelocity()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.mode = i685[1]
  i684.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.curve)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemForceOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.space = i687[4]
  i686.randomized = !!i687[5]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.limit)
  i688.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.limitX)
  i688.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.limitY)
  i688.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.limitZ)
  i688.dampen = i689[5]
  i688.separateAxes = !!i689[6]
  i688.space = i689[7]
  i688.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[8], i688.drag)
  i688.multiplyDragByParticleSize = !!i689[9]
  i688.multiplyDragByParticleVelocity = !!i689[10]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i691 = data
  i690.enabled = !!i691[0]
  request.r(i691[1], i691[2], 0, i690, 'sharedMaterial')
  var i693 = i691[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[4]
  i690.shadowCastingMode = i691[5]
  i690.sortingLayerID = i691[6]
  i690.sortingOrder = i691[7]
  i690.lightmapIndex = i691[8]
  i690.lightmapSceneIndex = i691[9]
  i690.lightmapScaleOffset = new pc.Vec4( i691[10], i691[11], i691[12], i691[13] )
  i690.lightProbeUsage = i691[14]
  i690.reflectionProbeUsage = i691[15]
  request.r(i691[16], i691[17], 0, i690, 'mesh')
  i690.meshCount = i691[18]
  i690.activeVertexStreamsCount = i691[19]
  i690.alignment = i691[20]
  i690.renderMode = i691[21]
  i690.sortMode = i691[22]
  i690.lengthScale = i691[23]
  i690.velocityScale = i691[24]
  i690.cameraVelocityScale = i691[25]
  i690.normalDirection = i691[26]
  i690.sortingFudge = i691[27]
  i690.minParticleSize = i691[28]
  i690.maxParticleSize = i691[29]
  i690.pivot = new pc.Vec3( i691[30], i691[31], i691[32] )
  request.r(i691[33], i691[34], 0, i690, 'trailMaterial')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i695 = data
  i694.name = i695[0]
  i694.width = i695[1]
  i694.height = i695[2]
  i694.mipmapCount = i695[3]
  i694.anisoLevel = i695[4]
  i694.filterMode = i695[5]
  i694.hdr = !!i695[6]
  i694.format = i695[7]
  i694.wrapMode = i695[8]
  i694.alphaIsTransparency = !!i695[9]
  i694.alphaSource = i695[10]
  i694.graphicsFormat = i695[11]
  i694.sRGBTexture = !!i695[12]
  i694.desiredColorSpace = i695[13]
  i694.wrapU = i695[14]
  i694.wrapV = i695[15]
  return i694
}

Deserializers["SliceObject"] = function (request, data, root) {
  var i696 = root || request.c( 'SliceObject' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i696.childrens = i698
  i696.reward = i697[1]
  i696.moveSpeed = i697[2]
  request.r(i697[3], i697[4], 0, i696, 'collider')
  request.r(i697[5], i697[6], 0, i696, 'rigidBody')
  request.r(i697[7], i697[8], 0, i696, 'currencyText')
  i696.xForce = i697[9]
  i696.yForce = i697[10]
  i696.zForce = i697[11]
  i696.speedDuration = i697[12]
  i696.speedMult = i697[13]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i703 = data
  i702.pivot = new pc.Vec2( i703[0], i703[1] )
  i702.anchorMin = new pc.Vec2( i703[2], i703[3] )
  i702.anchorMax = new pc.Vec2( i703[4], i703[5] )
  i702.sizeDelta = new pc.Vec2( i703[6], i703[7] )
  i702.anchoredPosition3D = new pc.Vec3( i703[8], i703[9], i703[10] )
  i702.rotation = new pc.Quat(i703[11], i703[12], i703[13], i703[14])
  i702.scale = new pc.Vec3( i703[15], i703[16], i703[17] )
  return i702
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i704 = root || request.c( 'TMPro.TextMeshPro' )
  var i705 = data
  i704._SortingLayer = i705[0]
  i704._SortingLayerID = i705[1]
  i704._SortingOrder = i705[2]
  i704.m_hasFontAssetChanged = !!i705[3]
  request.r(i705[4], i705[5], 0, i704, 'm_renderer')
  i704.m_maskType = i705[6]
  i704.m_text = i705[7]
  i704.m_isRightToLeft = !!i705[8]
  request.r(i705[9], i705[10], 0, i704, 'm_fontAsset')
  request.r(i705[11], i705[12], 0, i704, 'm_sharedMaterial')
  var i707 = i705[13]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.m_fontSharedMaterials = i706
  request.r(i705[14], i705[15], 0, i704, 'm_fontMaterial')
  var i709 = i705[16]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.m_fontMaterials = i708
  i704.m_fontColor32 = UnityEngine.Color32.ConstructColor(i705[17], i705[18], i705[19], i705[20])
  i704.m_fontColor = new pc.Color(i705[21], i705[22], i705[23], i705[24])
  i704.m_enableVertexGradient = !!i705[25]
  i704.m_colorMode = i705[26]
  i704.m_fontColorGradient = request.d('TMPro.VertexGradient', i705[27], i704.m_fontColorGradient)
  request.r(i705[28], i705[29], 0, i704, 'm_fontColorGradientPreset')
  request.r(i705[30], i705[31], 0, i704, 'm_spriteAsset')
  i704.m_tintAllSprites = !!i705[32]
  request.r(i705[33], i705[34], 0, i704, 'm_StyleSheet')
  i704.m_TextStyleHashCode = i705[35]
  i704.m_overrideHtmlColors = !!i705[36]
  i704.m_faceColor = UnityEngine.Color32.ConstructColor(i705[37], i705[38], i705[39], i705[40])
  i704.m_fontSize = i705[41]
  i704.m_fontSizeBase = i705[42]
  i704.m_fontWeight = i705[43]
  i704.m_enableAutoSizing = !!i705[44]
  i704.m_fontSizeMin = i705[45]
  i704.m_fontSizeMax = i705[46]
  i704.m_fontStyle = i705[47]
  i704.m_HorizontalAlignment = i705[48]
  i704.m_VerticalAlignment = i705[49]
  i704.m_textAlignment = i705[50]
  i704.m_characterSpacing = i705[51]
  i704.m_wordSpacing = i705[52]
  i704.m_lineSpacing = i705[53]
  i704.m_lineSpacingMax = i705[54]
  i704.m_paragraphSpacing = i705[55]
  i704.m_charWidthMaxAdj = i705[56]
  i704.m_enableWordWrapping = !!i705[57]
  i704.m_wordWrappingRatios = i705[58]
  i704.m_overflowMode = i705[59]
  request.r(i705[60], i705[61], 0, i704, 'm_linkedTextComponent')
  request.r(i705[62], i705[63], 0, i704, 'parentLinkedComponent')
  i704.m_enableKerning = !!i705[64]
  i704.m_enableExtraPadding = !!i705[65]
  i704.checkPaddingRequired = !!i705[66]
  i704.m_isRichText = !!i705[67]
  i704.m_parseCtrlCharacters = !!i705[68]
  i704.m_isOrthographic = !!i705[69]
  i704.m_isCullingEnabled = !!i705[70]
  i704.m_horizontalMapping = i705[71]
  i704.m_verticalMapping = i705[72]
  i704.m_uvLineOffset = i705[73]
  i704.m_geometrySortingOrder = i705[74]
  i704.m_IsTextObjectScaleStatic = !!i705[75]
  i704.m_VertexBufferAutoSizeReduction = !!i705[76]
  i704.m_useMaxVisibleDescender = !!i705[77]
  i704.m_pageToDisplay = i705[78]
  i704.m_margin = new pc.Vec4( i705[79], i705[80], i705[81], i705[82] )
  i704.m_isUsingLegacyAnimationComponent = !!i705[83]
  i704.m_isVolumetricText = !!i705[84]
  request.r(i705[85], i705[86], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[87]
  i704.m_Color = new pc.Color(i705[88], i705[89], i705[90], i705[91])
  i704.m_RaycastTarget = !!i705[92]
  i704.m_RaycastPadding = new pc.Vec4( i705[93], i705[94], i705[95], i705[96] )
  return i704
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.VertexGradient' )
  var i711 = data
  i710.topLeft = new pc.Color(i711[0], i711[1], i711[2], i711[3])
  i710.topRight = new pc.Color(i711[4], i711[5], i711[6], i711[7])
  i710.bottomLeft = new pc.Color(i711[8], i711[9], i711[10], i711[11])
  i710.bottomRight = new pc.Color(i711[12], i711[13], i711[14], i711[15])
  return i710
}

Deserializers["Game.Pool.CurrencyText"] = function (request, data, root) {
  var i712 = root || request.c( 'Game.Pool.CurrencyText' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'text')
  request.r(i713[2], i713[3], 0, i712, 'icon')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i715 = data
  i714.cullTransparentMesh = !!i715[0]
  return i714
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Image' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Sprite')
  i716.m_Type = i717[2]
  i716.m_PreserveAspect = !!i717[3]
  i716.m_FillCenter = !!i717[4]
  i716.m_FillMethod = i717[5]
  i716.m_FillAmount = i717[6]
  i716.m_FillClockwise = !!i717[7]
  i716.m_FillOrigin = i717[8]
  i716.m_UseSpriteMesh = !!i717[9]
  i716.m_PixelsPerUnitMultiplier = i717[10]
  request.r(i717[11], i717[12], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[13]
  i716.m_Color = new pc.Color(i717[14], i717[15], i717[16], i717[17])
  i716.m_RaycastTarget = !!i717[18]
  i716.m_RaycastPadding = new pc.Vec4( i717[19], i717[20], i717[21], i717[22] )
  return i716
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button' )
  var i719 = data
  i718.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i719[0], i718.m_OnClick)
  i718.m_Navigation = request.d('UnityEngine.UI.Navigation', i719[1], i718.m_Navigation)
  i718.m_Transition = i719[2]
  i718.m_Colors = request.d('UnityEngine.UI.ColorBlock', i719[3], i718.m_Colors)
  i718.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i719[4], i718.m_SpriteState)
  i718.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i719[5], i718.m_AnimationTriggers)
  i718.m_Interactable = !!i719[6]
  request.r(i719[7], i719[8], 0, i718, 'm_TargetGraphic')
  return i718
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i721 = data
  i720.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i721[0], i720.m_PersistentCalls)
  return i720
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i725.length; i += 1) {
    i724.add(request.d('UnityEngine.Events.PersistentCall', i725[i + 0]));
  }
  i722.m_Calls = i724
  return i722
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'm_Target')
  i728.m_TargetAssemblyTypeName = i729[2]
  i728.m_MethodName = i729[3]
  i728.m_Mode = i729[4]
  i728.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i729[5], i728.m_Arguments)
  i728.m_CallState = i729[6]
  return i728
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i731 = data
  i730.m_Mode = i731[0]
  i730.m_WrapAround = !!i731[1]
  request.r(i731[2], i731[3], 0, i730, 'm_SelectOnUp')
  request.r(i731[4], i731[5], 0, i730, 'm_SelectOnDown')
  request.r(i731[6], i731[7], 0, i730, 'm_SelectOnLeft')
  request.r(i731[8], i731[9], 0, i730, 'm_SelectOnRight')
  return i730
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i733 = data
  i732.m_NormalColor = new pc.Color(i733[0], i733[1], i733[2], i733[3])
  i732.m_HighlightedColor = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.m_PressedColor = new pc.Color(i733[8], i733[9], i733[10], i733[11])
  i732.m_SelectedColor = new pc.Color(i733[12], i733[13], i733[14], i733[15])
  i732.m_DisabledColor = new pc.Color(i733[16], i733[17], i733[18], i733[19])
  i732.m_ColorMultiplier = i733[20]
  i732.m_FadeDuration = i733[21]
  return i732
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_HighlightedSprite')
  request.r(i735[2], i735[3], 0, i734, 'm_PressedSprite')
  request.r(i735[4], i735[5], 0, i734, 'm_SelectedSprite')
  request.r(i735[6], i735[7], 0, i734, 'm_DisabledSprite')
  return i734
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i737 = data
  i736.m_NormalTrigger = i737[0]
  i736.m_HighlightedTrigger = i737[1]
  i736.m_PressedTrigger = i737[2]
  i736.m_SelectedTrigger = i737[3]
  i736.m_DisabledTrigger = i737[4]
  return i736
}

Deserializers["ButtonAnimator"] = function (request, data, root) {
  var i738 = root || request.c( 'ButtonAnimator' )
  var i739 = data
  i738.buttonScaleOnPointerDown = i739[0]
  return i738
}

Deserializers["UpgradeButton"] = function (request, data, root) {
  var i740 = root || request.c( 'UpgradeButton' )
  var i741 = data
  var i743 = i741[0]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(i743[i + 0]);
  }
  i740.upgradeCosts = i742
  request.r(i741[1], i741[2], 0, i740, 'inactiveSprite')
  request.r(i741[3], i741[4], 0, i740, 'upgradeCostText')
  request.r(i741[5], i741[6], 0, i740, 'upgradeCountText')
  request.r(i741[7], i741[8], 0, i740, 'button')
  i740.upgradeType = i741[9]
  return i740
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i747 = data
  i746.m_hasFontAssetChanged = !!i747[0]
  request.r(i747[1], i747[2], 0, i746, 'm_baseMaterial')
  i746.m_maskOffset = new pc.Vec4( i747[3], i747[4], i747[5], i747[6] )
  i746.m_text = i747[7]
  i746.m_isRightToLeft = !!i747[8]
  request.r(i747[9], i747[10], 0, i746, 'm_fontAsset')
  request.r(i747[11], i747[12], 0, i746, 'm_sharedMaterial')
  var i749 = i747[13]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.m_fontSharedMaterials = i748
  request.r(i747[14], i747[15], 0, i746, 'm_fontMaterial')
  var i751 = i747[16]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i746.m_fontMaterials = i750
  i746.m_fontColor32 = UnityEngine.Color32.ConstructColor(i747[17], i747[18], i747[19], i747[20])
  i746.m_fontColor = new pc.Color(i747[21], i747[22], i747[23], i747[24])
  i746.m_enableVertexGradient = !!i747[25]
  i746.m_colorMode = i747[26]
  i746.m_fontColorGradient = request.d('TMPro.VertexGradient', i747[27], i746.m_fontColorGradient)
  request.r(i747[28], i747[29], 0, i746, 'm_fontColorGradientPreset')
  request.r(i747[30], i747[31], 0, i746, 'm_spriteAsset')
  i746.m_tintAllSprites = !!i747[32]
  request.r(i747[33], i747[34], 0, i746, 'm_StyleSheet')
  i746.m_TextStyleHashCode = i747[35]
  i746.m_overrideHtmlColors = !!i747[36]
  i746.m_faceColor = UnityEngine.Color32.ConstructColor(i747[37], i747[38], i747[39], i747[40])
  i746.m_fontSize = i747[41]
  i746.m_fontSizeBase = i747[42]
  i746.m_fontWeight = i747[43]
  i746.m_enableAutoSizing = !!i747[44]
  i746.m_fontSizeMin = i747[45]
  i746.m_fontSizeMax = i747[46]
  i746.m_fontStyle = i747[47]
  i746.m_HorizontalAlignment = i747[48]
  i746.m_VerticalAlignment = i747[49]
  i746.m_textAlignment = i747[50]
  i746.m_characterSpacing = i747[51]
  i746.m_wordSpacing = i747[52]
  i746.m_lineSpacing = i747[53]
  i746.m_lineSpacingMax = i747[54]
  i746.m_paragraphSpacing = i747[55]
  i746.m_charWidthMaxAdj = i747[56]
  i746.m_enableWordWrapping = !!i747[57]
  i746.m_wordWrappingRatios = i747[58]
  i746.m_overflowMode = i747[59]
  request.r(i747[60], i747[61], 0, i746, 'm_linkedTextComponent')
  request.r(i747[62], i747[63], 0, i746, 'parentLinkedComponent')
  i746.m_enableKerning = !!i747[64]
  i746.m_enableExtraPadding = !!i747[65]
  i746.checkPaddingRequired = !!i747[66]
  i746.m_isRichText = !!i747[67]
  i746.m_parseCtrlCharacters = !!i747[68]
  i746.m_isOrthographic = !!i747[69]
  i746.m_isCullingEnabled = !!i747[70]
  i746.m_horizontalMapping = i747[71]
  i746.m_verticalMapping = i747[72]
  i746.m_uvLineOffset = i747[73]
  i746.m_geometrySortingOrder = i747[74]
  i746.m_IsTextObjectScaleStatic = !!i747[75]
  i746.m_VertexBufferAutoSizeReduction = !!i747[76]
  i746.m_useMaxVisibleDescender = !!i747[77]
  i746.m_pageToDisplay = i747[78]
  i746.m_margin = new pc.Vec4( i747[79], i747[80], i747[81], i747[82] )
  i746.m_isUsingLegacyAnimationComponent = !!i747[83]
  i746.m_isVolumetricText = !!i747[84]
  request.r(i747[85], i747[86], 0, i746, 'm_Material')
  i746.m_Maskable = !!i747[87]
  i746.m_Color = new pc.Color(i747[88], i747[89], i747[90], i747[91])
  i746.m_RaycastTarget = !!i747[92]
  i746.m_RaycastPadding = new pc.Vec4( i747[93], i747[94], i747[95], i747[96] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i753 = data
  i752.name = i753[0]
  i752.atlasId = i753[1]
  i752.mipmapCount = i753[2]
  i752.hdr = !!i753[3]
  i752.size = i753[4]
  i752.anisoLevel = i753[5]
  i752.filterMode = i753[6]
  var i755 = i753[7]
  var i754 = []
  for(var i = 0; i < i755.length; i += 4) {
    i754.push( UnityEngine.Rect.MinMaxRect(i755[i + 0], i755[i + 1], i755[i + 2], i755[i + 3]) );
  }
  i752.rects = i754
  i752.wrapU = i753[8]
  i752.wrapV = i753[9]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i759 = data
  i758.name = i759[0]
  i758.index = i759[1]
  i758.startup = !!i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.aspect = i761[1]
  i760.orthographic = !!i761[2]
  i760.orthographicSize = i761[3]
  i760.backgroundColor = new pc.Color(i761[4], i761[5], i761[6], i761[7])
  i760.nearClipPlane = i761[8]
  i760.farClipPlane = i761[9]
  i760.fieldOfView = i761[10]
  i760.depth = i761[11]
  i760.clearFlags = i761[12]
  i760.cullingMask = i761[13]
  i760.rect = i761[14]
  request.r(i761[15], i761[16], 0, i760, 'targetTexture')
  i760.usePhysicalProperties = !!i761[17]
  i760.focalLength = i761[18]
  i760.sensorSize = new pc.Vec2( i761[19], i761[20] )
  i760.lensShift = new pc.Vec2( i761[21], i761[22] )
  i760.gateFit = i761[23]
  i760.commandBufferCount = i761[24]
  i760.cameraType = i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.type = i763[1]
  i762.color = new pc.Color(i763[2], i763[3], i763[4], i763[5])
  i762.cullingMask = i763[6]
  i762.intensity = i763[7]
  i762.range = i763[8]
  i762.spotAngle = i763[9]
  i762.shadows = i763[10]
  i762.shadowNormalBias = i763[11]
  i762.shadowBias = i763[12]
  i762.shadowStrength = i763[13]
  i762.shadowResolution = i763[14]
  i762.lightmapBakeType = i763[15]
  i762.renderMode = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'cookie')
  i762.cookieSize = i763[19]
  return i762
}

Deserializers["ObjectSpawner"] = function (request, data, root) {
  var i764 = root || request.c( 'ObjectSpawner' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'prefab')
  i764.spawnDuration = i765[2]
  return i764
}

Deserializers["ObjectDestroyer"] = function (request, data, root) {
  var i766 = root || request.c( 'ObjectDestroyer' )
  var i767 = data
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i769 = data
  i768.enabled = !!i769[0]
  i768.planeDistance = i769[1]
  i768.referencePixelsPerUnit = i769[2]
  i768.isFallbackOverlay = !!i769[3]
  i768.renderMode = i769[4]
  i768.renderOrder = i769[5]
  i768.sortingLayerName = i769[6]
  i768.sortingOrder = i769[7]
  i768.scaleFactor = i769[8]
  request.r(i769[9], i769[10], 0, i768, 'worldCamera')
  i768.overrideSorting = !!i769[11]
  i768.pixelPerfect = !!i769[12]
  i768.targetDisplay = i769[13]
  i768.overridePixelPerfect = !!i769[14]
  return i768
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i771 = data
  i770.m_UiScaleMode = i771[0]
  i770.m_ReferencePixelsPerUnit = i771[1]
  i770.m_ScaleFactor = i771[2]
  i770.m_ReferenceResolution = new pc.Vec2( i771[3], i771[4] )
  i770.m_ScreenMatchMode = i771[5]
  i770.m_MatchWidthOrHeight = i771[6]
  i770.m_PhysicalUnit = i771[7]
  i770.m_FallbackScreenDPI = i771[8]
  i770.m_DefaultSpriteDPI = i771[9]
  i770.m_DynamicPixelsPerUnit = i771[10]
  i770.m_PresetInfoIsWorld = !!i771[11]
  return i770
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i773 = data
  i772.m_IgnoreReversedGraphics = !!i773[0]
  i772.m_BlockingObjects = i773[1]
  i772.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i773[2] )
  return i772
}

Deserializers["CurrencyDisplayer"] = function (request, data, root) {
  var i774 = root || request.c( 'CurrencyDisplayer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'text')
  return i774
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_FirstSelected')
  i776.m_sendNavigationEvents = !!i777[2]
  i776.m_DragThreshold = i777[3]
  return i776
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i779 = data
  i778.m_HorizontalAxis = i779[0]
  i778.m_VerticalAxis = i779[1]
  i778.m_SubmitButton = i779[2]
  i778.m_CancelButton = i779[3]
  i778.m_InputActionsPerSecond = i779[4]
  i778.m_RepeatDelay = i779[5]
  i778.m_ForceModuleActive = !!i779[6]
  i778.m_SendPointerHoverToParent = !!i779[7]
  return i778
}

Deserializers["Gamemanager"] = function (request, data, root) {
  var i780 = root || request.c( 'Gamemanager' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'sliceObject')
  return i780
}

Deserializers["TrapController"] = function (request, data, root) {
  var i782 = root || request.c( 'TrapController' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TrapMovement')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i782.traps = i784
  var i787 = i783[1]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(i787[i + 0]);
  }
  i782.speedUpgrade = i786
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i791 = data
  i790.ambientIntensity = i791[0]
  i790.reflectionIntensity = i791[1]
  i790.ambientMode = i791[2]
  i790.ambientLight = new pc.Color(i791[3], i791[4], i791[5], i791[6])
  i790.ambientSkyColor = new pc.Color(i791[7], i791[8], i791[9], i791[10])
  i790.ambientGroundColor = new pc.Color(i791[11], i791[12], i791[13], i791[14])
  i790.ambientEquatorColor = new pc.Color(i791[15], i791[16], i791[17], i791[18])
  i790.fogColor = new pc.Color(i791[19], i791[20], i791[21], i791[22])
  i790.fogEndDistance = i791[23]
  i790.fogStartDistance = i791[24]
  i790.fogDensity = i791[25]
  i790.fog = !!i791[26]
  request.r(i791[27], i791[28], 0, i790, 'skybox')
  i790.fogMode = i791[29]
  var i793 = i791[30]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i793[i + 0]) );
  }
  i790.lightmaps = i792
  i790.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i791[31], i790.lightProbes)
  i790.lightmapsMode = i791[32]
  i790.mixedBakeMode = i791[33]
  i790.environmentLightingMode = i791[34]
  i790.ambientProbe = new pc.SphericalHarmonicsL2(i791[35])
  i790.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i791[36])
  i790.useReferenceAmbientProbe = !!i791[37]
  request.r(i791[38], i791[39], 0, i790, 'customReflection')
  request.r(i791[40], i791[41], 0, i790, 'defaultReflection')
  i790.defaultReflectionMode = i791[42]
  i790.defaultReflectionResolution = i791[43]
  i790.sunLightObjectId = i791[44]
  i790.pixelLightCount = i791[45]
  i790.defaultReflectionHDR = !!i791[46]
  i790.hasLightDataAsset = !!i791[47]
  i790.hasManualGenerate = !!i791[48]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'lightmapColor')
  request.r(i797[2], i797[3], 0, i796, 'lightmapDirection')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i798 = root || new UnityEngine.LightProbes()
  var i799 = data
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i807 = data
  var i809 = i807[0]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i809[i + 0]));
  }
  i806.ShaderCompilationErrors = i808
  i806.name = i807[1]
  i806.guid = i807[2]
  var i811 = i807[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.shaderDefinedKeywords = i810
  var i813 = i807[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i813[i + 0]) );
  }
  i806.passes = i812
  var i815 = i807[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i815[i + 0]) );
  }
  i806.usePasses = i814
  var i817 = i807[6]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i817[i + 0]) );
  }
  i806.defaultParameterValues = i816
  request.r(i807[7], i807[8], 0, i806, 'unityFallbackShader')
  i806.readDepth = !!i807[9]
  i806.isCreatedByShaderGraph = !!i807[10]
  i806.compiled = !!i807[11]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i821 = data
  i820.shaderName = i821[0]
  i820.errorMessage = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i826 = root || new pc.UnityShaderPass()
  var i827 = data
  i826.id = i827[0]
  i826.subShaderIndex = i827[1]
  i826.name = i827[2]
  i826.passType = i827[3]
  i826.grabPassTextureName = i827[4]
  i826.usePass = !!i827[5]
  i826.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[6], i826.zTest)
  i826.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[7], i826.zWrite)
  i826.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[8], i826.culling)
  i826.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[9], i826.blending)
  i826.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[10], i826.alphaBlending)
  i826.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[11], i826.colorWriteMask)
  i826.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[12], i826.offsetUnits)
  i826.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[13], i826.offsetFactor)
  i826.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[14], i826.stencilRef)
  i826.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[15], i826.stencilReadMask)
  i826.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[16], i826.stencilWriteMask)
  i826.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[17], i826.stencilOp)
  i826.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[18], i826.stencilOpFront)
  i826.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[19], i826.stencilOpBack)
  var i829 = i827[20]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i829[i + 0]) );
  }
  i826.tags = i828
  var i831 = i827[21]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i826.passDefinedKeywords = i830
  var i833 = i827[22]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i833[i + 0]) );
  }
  i826.passDefinedKeywordGroups = i832
  var i835 = i827[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i835[i + 0]) );
  }
  i826.variants = i834
  var i837 = i827[24]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i837[i + 0]) );
  }
  i826.excludedVariants = i836
  i826.hasDepthReader = !!i827[25]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i839 = data
  i838.val = i839[0]
  i838.name = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i841 = data
  i840.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[0], i840.src)
  i840.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[1], i840.dst)
  i840.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[2], i840.op)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i843 = data
  i842.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[0], i842.pass)
  i842.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[1], i842.fail)
  i842.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[2], i842.zFail)
  i842.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[3], i842.comp)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i847 = data
  i846.name = i847[0]
  i846.value = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i850.keywords = i852
  i850.hasDiscard = !!i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i857 = data
  i856.passId = i857[0]
  i856.subShaderIndex = i857[1]
  var i859 = i857[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.vertexProgram = i857[3]
  i856.fragmentProgram = i857[4]
  i856.exportedForWebGl2 = !!i857[5]
  i856.readDepth = !!i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'shader')
  i862.pass = i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i867 = data
  i866.name = i867[0]
  i866.type = i867[1]
  i866.value = new pc.Vec4( i867[2], i867[3], i867[4], i867[5] )
  i866.textureValue = i867[6]
  i866.shaderPropertyFlag = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i869 = data
  i868.name = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'texture')
  i868.aabb = i869[3]
  i868.vertices = i869[4]
  i868.triangles = i869[5]
  i868.textureRect = UnityEngine.Rect.MinMaxRect(i869[6], i869[7], i869[8], i869[9])
  i868.packedRect = UnityEngine.Rect.MinMaxRect(i869[10], i869[11], i869[12], i869[13])
  i868.border = new pc.Vec4( i869[14], i869[15], i869[16], i869[17] )
  i868.transparency = i869[18]
  i868.bounds = i869[19]
  i868.pixelsPerUnit = i869[20]
  i868.textureWidth = i869[21]
  i868.textureHeight = i869[22]
  i868.nativeSize = new pc.Vec2( i869[23], i869[24] )
  i868.pivot = new pc.Vec2( i869[25], i869[26] )
  i868.textureRectOffset = new pc.Vec2( i869[27], i869[28] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i871 = data
  i870.name = i871[0]
  i870.ascent = i871[1]
  i870.originalLineHeight = i871[2]
  i870.fontSize = i871[3]
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i873[i + 0]) );
  }
  i870.characterInfo = i872
  request.r(i871[5], i871[6], 0, i870, 'texture')
  i870.originalFontSize = i871[7]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i877 = data
  i876.index = i877[0]
  i876.advance = i877[1]
  i876.bearing = i877[2]
  i876.glyphWidth = i877[3]
  i876.glyphHeight = i877[4]
  i876.minX = i877[5]
  i876.maxX = i877[6]
  i876.minY = i877[7]
  i876.maxY = i877[8]
  i876.uvBottomLeftX = i877[9]
  i876.uvBottomLeftY = i877[10]
  i876.uvBottomRightX = i877[11]
  i876.uvBottomRightY = i877[12]
  i876.uvTopLeftX = i877[13]
  i876.uvTopLeftY = i877[14]
  i876.uvTopRightX = i877[15]
  i876.uvTopRightY = i877[16]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i879 = data
  i878.name = i879[0]
  i878.bytes64 = i879[1]
  i878.data = i879[2]
  return i878
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i881 = data
  i880.hashCode = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'material')
  i880.materialHashCode = i881[3]
  request.r(i881[4], i881[5], 0, i880, 'atlas')
  i880.normalStyle = i881[6]
  i880.normalSpacingOffset = i881[7]
  i880.boldStyle = i881[8]
  i880.boldSpacing = i881[9]
  i880.italicStyle = i881[10]
  i880.tabSize = i881[11]
  i880.m_Version = i881[12]
  i880.m_SourceFontFileGUID = i881[13]
  request.r(i881[14], i881[15], 0, i880, 'm_SourceFontFile_EditorRef')
  request.r(i881[16], i881[17], 0, i880, 'm_SourceFontFile')
  i880.m_AtlasPopulationMode = i881[18]
  i880.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i881[19], i880.m_FaceInfo)
  var i883 = i881[20]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('UnityEngine.TextCore.Glyph', i883[i + 0]));
  }
  i880.m_GlyphTable = i882
  var i885 = i881[21]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_Character', i885[i + 0]));
  }
  i880.m_CharacterTable = i884
  var i887 = i881[22]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i880.m_AtlasTextures = i886
  i880.m_AtlasTextureIndex = i881[23]
  i880.m_IsMultiAtlasTexturesEnabled = !!i881[24]
  i880.m_ClearDynamicDataOnBuild = !!i881[25]
  var i889 = i881[26]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.TextCore.GlyphRect', i889[i + 0]));
  }
  i880.m_UsedGlyphRects = i888
  var i891 = i881[27]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.TextCore.GlyphRect', i891[i + 0]));
  }
  i880.m_FreeGlyphRects = i890
  i880.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i881[28], i880.m_fontInfo)
  i880.m_AtlasWidth = i881[29]
  i880.m_AtlasHeight = i881[30]
  i880.m_AtlasPadding = i881[31]
  i880.m_AtlasRenderMode = i881[32]
  var i893 = i881[33]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Glyph', i893[i + 0]));
  }
  i880.m_glyphInfoList = i892
  i880.m_KerningTable = request.d('TMPro.KerningTable', i881[34], i880.m_KerningTable)
  i880.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i881[35], i880.m_FontFeatureTable)
  var i895 = i881[36]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i880.fallbackFontAssets = i894
  var i897 = i881[37]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i880.m_FallbackFontAssetTable = i896
  i880.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i881[38], i880.m_CreationSettings)
  var i899 = i881[39]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('TMPro.TMP_FontWeightPair', i899[i + 0]) );
  }
  i880.m_FontWeightTable = i898
  var i901 = i881[40]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('TMPro.TMP_FontWeightPair', i901[i + 0]) );
  }
  i880.fontWeights = i900
  return i880
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i903 = data
  i902.m_FaceIndex = i903[0]
  i902.m_FamilyName = i903[1]
  i902.m_StyleName = i903[2]
  i902.m_PointSize = i903[3]
  i902.m_Scale = i903[4]
  i902.m_UnitsPerEM = i903[5]
  i902.m_LineHeight = i903[6]
  i902.m_AscentLine = i903[7]
  i902.m_CapLine = i903[8]
  i902.m_MeanLine = i903[9]
  i902.m_Baseline = i903[10]
  i902.m_DescentLine = i903[11]
  i902.m_SuperscriptOffset = i903[12]
  i902.m_SuperscriptSize = i903[13]
  i902.m_SubscriptOffset = i903[14]
  i902.m_SubscriptSize = i903[15]
  i902.m_UnderlineOffset = i903[16]
  i902.m_UnderlineThickness = i903[17]
  i902.m_StrikethroughOffset = i903[18]
  i902.m_StrikethroughThickness = i903[19]
  i902.m_TabWidth = i903[20]
  return i902
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i907 = data
  i906.m_Index = i907[0]
  i906.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i907[1], i906.m_Metrics)
  i906.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i907[2], i906.m_GlyphRect)
  i906.m_Scale = i907[3]
  i906.m_AtlasIndex = i907[4]
  i906.m_ClassDefinitionType = i907[5]
  return i906
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i909 = data
  i908.m_Width = i909[0]
  i908.m_Height = i909[1]
  i908.m_HorizontalBearingX = i909[2]
  i908.m_HorizontalBearingY = i909[3]
  i908.m_HorizontalAdvance = i909[4]
  return i908
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i911 = data
  i910.m_X = i911[0]
  i910.m_Y = i911[1]
  i910.m_Width = i911[2]
  i910.m_Height = i911[3]
  return i910
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_Character' )
  var i915 = data
  i914.m_ElementType = i915[0]
  i914.m_Unicode = i915[1]
  i914.m_GlyphIndex = i915[2]
  i914.m_Scale = i915[3]
  return i914
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i921 = data
  i920.Name = i921[0]
  i920.PointSize = i921[1]
  i920.Scale = i921[2]
  i920.CharacterCount = i921[3]
  i920.LineHeight = i921[4]
  i920.Baseline = i921[5]
  i920.Ascender = i921[6]
  i920.CapHeight = i921[7]
  i920.Descender = i921[8]
  i920.CenterLine = i921[9]
  i920.SuperscriptOffset = i921[10]
  i920.SubscriptOffset = i921[11]
  i920.SubSize = i921[12]
  i920.Underline = i921[13]
  i920.UnderlineThickness = i921[14]
  i920.strikethrough = i921[15]
  i920.strikethroughThickness = i921[16]
  i920.TabWidth = i921[17]
  i920.Padding = i921[18]
  i920.AtlasWidth = i921[19]
  i920.AtlasHeight = i921[20]
  return i920
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_Glyph' )
  var i925 = data
  i924.id = i925[0]
  i924.x = i925[1]
  i924.y = i925[2]
  i924.width = i925[3]
  i924.height = i925[4]
  i924.xOffset = i925[5]
  i924.yOffset = i925[6]
  i924.xAdvance = i925[7]
  i924.scale = i925[8]
  return i924
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.KerningTable' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('TMPro.KerningPair', i929[i + 0]));
  }
  i926.kerningPairs = i928
  return i926
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.KerningPair' )
  var i933 = data
  i932.xOffset = i933[0]
  i932.m_FirstGlyph = i933[1]
  i932.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i933[2], i932.m_FirstGlyphAdjustments)
  i932.m_SecondGlyph = i933[3]
  i932.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i933[4], i932.m_SecondGlyphAdjustments)
  i932.m_IgnoreSpacingAdjustments = !!i933[5]
  return i932
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i937[i + 0]));
  }
  i934.m_GlyphPairAdjustmentRecords = i936
  return i934
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i941 = data
  i940.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i941[0], i940.m_FirstAdjustmentRecord)
  i940.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i941[1], i940.m_SecondAdjustmentRecord)
  i940.m_FeatureLookupFlags = i941[2]
  return i940
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i945 = data
  i944.sourceFontFileName = i945[0]
  i944.sourceFontFileGUID = i945[1]
  i944.pointSizeSamplingMode = i945[2]
  i944.pointSize = i945[3]
  i944.padding = i945[4]
  i944.packingMode = i945[5]
  i944.atlasWidth = i945[6]
  i944.atlasHeight = i945[7]
  i944.characterSetSelectionMode = i945[8]
  i944.characterSequence = i945[9]
  i944.referencedFontAssetGUID = i945[10]
  i944.referencedTextAssetGUID = i945[11]
  i944.fontStyle = i945[12]
  i944.fontStyleModifier = i945[13]
  i944.renderMode = i945[14]
  i944.includeFontFeatures = !!i945[15]
  return i944
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'regularTypeface')
  request.r(i949[2], i949[3], 0, i948, 'italicTypeface')
  return i948
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i951 = data
  i950.m_GlyphIndex = i951[0]
  i950.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i951[1], i950.m_GlyphValueRecord)
  return i950
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i953 = data
  i952.m_XPlacement = i953[0]
  i952.m_YPlacement = i953[1]
  i952.m_XAdvance = i953[2]
  i952.m_YAdvance = i953[3]
  return i952
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i955 = data
  i954.useSafeMode = !!i955[0]
  i954.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i955[1], i954.safeModeOptions)
  i954.timeScale = i955[2]
  i954.unscaledTimeScale = i955[3]
  i954.useSmoothDeltaTime = !!i955[4]
  i954.maxSmoothUnscaledTime = i955[5]
  i954.rewindCallbackMode = i955[6]
  i954.showUnityEditorReport = !!i955[7]
  i954.logBehaviour = i955[8]
  i954.drawGizmos = !!i955[9]
  i954.defaultRecyclable = !!i955[10]
  i954.defaultAutoPlay = i955[11]
  i954.defaultUpdateType = i955[12]
  i954.defaultTimeScaleIndependent = !!i955[13]
  i954.defaultEaseType = i955[14]
  i954.defaultEaseOvershootOrAmplitude = i955[15]
  i954.defaultEasePeriod = i955[16]
  i954.defaultAutoKill = !!i955[17]
  i954.defaultLoopType = i955[18]
  i954.debugMode = !!i955[19]
  i954.debugStoreTargetId = !!i955[20]
  i954.showPreviewPanel = !!i955[21]
  i954.storeSettingsLocation = i955[22]
  i954.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i955[23], i954.modules)
  i954.createASMDEF = !!i955[24]
  i954.showPlayingTweens = !!i955[25]
  i954.showPausedTweens = !!i955[26]
  return i954
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i956 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i957 = data
  i956.logBehaviour = i957[0]
  i956.nestedTweenFailureBehaviour = i957[1]
  return i956
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i958 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i959 = data
  i958.showPanel = !!i959[0]
  i958.audioEnabled = !!i959[1]
  i958.physicsEnabled = !!i959[2]
  i958.physics2DEnabled = !!i959[3]
  i958.spriteEnabled = !!i959[4]
  i958.uiEnabled = !!i959[5]
  i958.textMeshProEnabled = !!i959[6]
  i958.tk2DEnabled = !!i959[7]
  i958.deAudioEnabled = !!i959[8]
  i958.deUnityExtendedEnabled = !!i959[9]
  i958.epoOutlineEnabled = !!i959[10]
  return i958
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_Settings' )
  var i961 = data
  i960.m_enableWordWrapping = !!i961[0]
  i960.m_enableKerning = !!i961[1]
  i960.m_enableExtraPadding = !!i961[2]
  i960.m_enableTintAllSprites = !!i961[3]
  i960.m_enableParseEscapeCharacters = !!i961[4]
  i960.m_EnableRaycastTarget = !!i961[5]
  i960.m_GetFontFeaturesAtRuntime = !!i961[6]
  i960.m_missingGlyphCharacter = i961[7]
  i960.m_warningsDisabled = !!i961[8]
  request.r(i961[9], i961[10], 0, i960, 'm_defaultFontAsset')
  i960.m_defaultFontAssetPath = i961[11]
  i960.m_defaultFontSize = i961[12]
  i960.m_defaultAutoSizeMinRatio = i961[13]
  i960.m_defaultAutoSizeMaxRatio = i961[14]
  i960.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i961[15], i961[16] )
  i960.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i961[17], i961[18] )
  i960.m_autoSizeTextContainer = !!i961[19]
  i960.m_IsTextObjectScaleStatic = !!i961[20]
  var i963 = i961[21]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i960.m_fallbackFontAssets = i962
  i960.m_matchMaterialPreset = !!i961[22]
  request.r(i961[23], i961[24], 0, i960, 'm_defaultSpriteAsset')
  i960.m_defaultSpriteAssetPath = i961[25]
  i960.m_enableEmojiSupport = !!i961[26]
  i960.m_MissingCharacterSpriteUnicode = i961[27]
  i960.m_defaultColorGradientPresetsPath = i961[28]
  request.r(i961[29], i961[30], 0, i960, 'm_defaultStyleSheet')
  i960.m_StyleSheetsResourcePath = i961[31]
  request.r(i961[32], i961[33], 0, i960, 'm_leadingCharacters')
  request.r(i961[34], i961[35], 0, i960, 'm_followingCharacters')
  i960.m_UseModernHangulLineBreakingRules = !!i961[36]
  return i960
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i965 = data
  i964.hashCode = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'material')
  i964.materialHashCode = i965[3]
  request.r(i965[4], i965[5], 0, i964, 'spriteSheet')
  var i967 = i965[6]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_Sprite', i967[i + 0]));
  }
  i964.spriteInfoList = i966
  var i969 = i965[7]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i964.fallbackSpriteAssets = i968
  i964.m_Version = i965[8]
  i964.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i965[9], i964.m_FaceInfo)
  var i971 = i965[10]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_SpriteCharacter', i971[i + 0]));
  }
  i964.m_SpriteCharacterTable = i970
  var i973 = i965[11]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_SpriteGlyph', i973[i + 0]));
  }
  i964.m_SpriteGlyphTable = i972
  return i964
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_Sprite' )
  var i977 = data
  i976.name = i977[0]
  i976.hashCode = i977[1]
  i976.unicode = i977[2]
  i976.pivot = new pc.Vec2( i977[3], i977[4] )
  request.r(i977[5], i977[6], 0, i976, 'sprite')
  i976.id = i977[7]
  i976.x = i977[8]
  i976.y = i977[9]
  i976.width = i977[10]
  i976.height = i977[11]
  i976.xOffset = i977[12]
  i976.yOffset = i977[13]
  i976.xAdvance = i977[14]
  i976.scale = i977[15]
  return i976
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i983 = data
  i982.m_Name = i983[0]
  i982.m_HashCode = i983[1]
  i982.m_ElementType = i983[2]
  i982.m_Unicode = i983[3]
  i982.m_GlyphIndex = i983[4]
  i982.m_Scale = i983[5]
  return i982
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'sprite')
  i986.m_Index = i987[2]
  i986.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i987[3], i986.m_Metrics)
  i986.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i987[4], i986.m_GlyphRect)
  i986.m_Scale = i987[5]
  i986.m_AtlasIndex = i987[6]
  i986.m_ClassDefinitionType = i987[7]
  return i986
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_Style', i991[i + 0]));
  }
  i988.m_StyleList = i990
  return i988
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_Style' )
  var i995 = data
  i994.m_Name = i995[0]
  i994.m_HashCode = i995[1]
  i994.m_OpeningDefinition = i995[2]
  i994.m_ClosingDefinition = i995[3]
  i994.m_OpeningTagArray = i995[4]
  i994.m_ClosingTagArray = i995[5]
  i994.m_OpeningTagUnicodeArray = i995[6]
  i994.m_ClosingTagUnicodeArray = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i999[i + 0]) );
  }
  i996.files = i998
  i996.componentToPrefabIds = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1003 = data
  i1002.path = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'unityObject')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1007[i + 0]) );
  }
  i1004.scriptsExecutionOrder = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1009[i + 0]) );
  }
  i1004.sortingLayers = i1008
  var i1011 = i1005[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1011[i + 0]) );
  }
  i1004.cullingLayers = i1010
  i1004.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1005[3], i1004.timeSettings)
  i1004.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1005[4], i1004.physicsSettings)
  i1004.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1005[5], i1004.physics2DSettings)
  i1004.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1005[6], i1004.qualitySettings)
  i1004.enableRealtimeShadows = !!i1005[7]
  i1004.enableAutoInstancing = !!i1005[8]
  i1004.enableDynamicBatching = !!i1005[9]
  i1004.lightmapEncodingQuality = i1005[10]
  i1004.desiredColorSpace = i1005[11]
  var i1013 = i1005[12]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1004.allTags = i1012
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.value = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1021 = data
  i1020.id = i1021[0]
  i1020.name = i1021[1]
  i1020.value = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1025 = data
  i1024.id = i1025[0]
  i1024.name = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1027 = data
  i1026.fixedDeltaTime = i1027[0]
  i1026.maximumDeltaTime = i1027[1]
  i1026.timeScale = i1027[2]
  i1026.maximumParticleTimestep = i1027[3]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1029 = data
  i1028.gravity = new pc.Vec3( i1029[0], i1029[1], i1029[2] )
  i1028.defaultSolverIterations = i1029[3]
  i1028.bounceThreshold = i1029[4]
  i1028.autoSyncTransforms = !!i1029[5]
  i1028.autoSimulation = !!i1029[6]
  var i1031 = i1029[7]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1031[i + 0]) );
  }
  i1028.collisionMatrix = i1030
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.layerId = i1035[1]
  i1034.otherLayerId = i1035[2]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'material')
  i1036.gravity = new pc.Vec2( i1037[2], i1037[3] )
  i1036.positionIterations = i1037[4]
  i1036.velocityIterations = i1037[5]
  i1036.velocityThreshold = i1037[6]
  i1036.maxLinearCorrection = i1037[7]
  i1036.maxAngularCorrection = i1037[8]
  i1036.maxTranslationSpeed = i1037[9]
  i1036.maxRotationSpeed = i1037[10]
  i1036.baumgarteScale = i1037[11]
  i1036.baumgarteTOIScale = i1037[12]
  i1036.timeToSleep = i1037[13]
  i1036.linearSleepTolerance = i1037[14]
  i1036.angularSleepTolerance = i1037[15]
  i1036.defaultContactOffset = i1037[16]
  i1036.autoSimulation = !!i1037[17]
  i1036.queriesHitTriggers = !!i1037[18]
  i1036.queriesStartInColliders = !!i1037[19]
  i1036.callbacksOnDisable = !!i1037[20]
  i1036.reuseCollisionCallbacks = !!i1037[21]
  i1036.autoSyncTransforms = !!i1037[22]
  var i1039 = i1037[23]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1039[i + 0]) );
  }
  i1036.collisionMatrix = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.layerId = i1043[1]
  i1042.otherLayerId = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1047[i + 0]) );
  }
  i1044.qualityLevels = i1046
  var i1049 = i1045[1]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1044.names = i1048
  i1044.shadows = i1045[2]
  i1044.anisotropicFiltering = i1045[3]
  i1044.antiAliasing = i1045[4]
  i1044.lodBias = i1045[5]
  i1044.shadowCascades = i1045[6]
  i1044.shadowDistance = i1045[7]
  i1044.shadowmaskMode = i1045[8]
  i1044.shadowProjection = i1045[9]
  i1044.shadowResolution = i1045[10]
  i1044.softParticles = !!i1045[11]
  i1044.softVegetation = !!i1045[12]
  i1044.activeColorSpace = i1045[13]
  i1044.desiredColorSpace = i1045[14]
  i1044.masterTextureLimit = i1045[15]
  i1044.maxQueuedFrames = i1045[16]
  i1044.particleRaycastBudget = i1045[17]
  i1044.pixelLightCount = i1045[18]
  i1044.realtimeReflectionProbes = !!i1045[19]
  i1044.shadowCascade2Split = i1045[20]
  i1044.shadowCascade4Split = new pc.Vec3( i1045[21], i1045[22], i1045[23] )
  i1044.streamingMipmapsActive = !!i1045[24]
  i1044.vSyncCount = i1045[25]
  i1044.asyncUploadBufferSize = i1045[26]
  i1044.asyncUploadTimeSlice = i1045[27]
  i1044.billboardsFaceCameraPosition = !!i1045[28]
  i1044.shadowNearPlaneOffset = i1045[29]
  i1044.streamingMipmapsMemoryBudget = i1045[30]
  i1044.maximumLODLevel = i1045[31]
  i1044.streamingMipmapsAddAllCameras = !!i1045[32]
  i1044.streamingMipmapsMaxLevelReduction = i1045[33]
  i1044.streamingMipmapsRenderersPerFrame = i1045[34]
  i1044.resolutionScalingFixedDPIFactor = i1045[35]
  i1044.streamingMipmapsMaxFileIORequests = i1045[36]
  i1044.currentQualityLevel = i1045[37]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1055 = data
  i1054.weight = i1055[0]
  i1054.vertices = i1055[1]
  i1054.normals = i1055[2]
  i1054.tangents = i1055[3]
  return i1054
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'm_ObjectArgument')
  i1056.m_ObjectArgumentAssemblyTypeName = i1057[2]
  i1056.m_IntArgument = i1057[3]
  i1056.m_FloatArgument = i1057[4]
  i1056.m_StringArgument = i1057[5]
  i1056.m_BoolArgument = !!i1057[6]
  return i1056
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1059 = data
  i1058.xPlacement = i1059[0]
  i1058.yPlacement = i1059[1]
  i1058.xAdvance = i1059[2]
  i1058.yAdvance = i1059[3]
  return i1058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[27],"57":[12],"58":[12],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[27],"79":[3],"80":[81],"82":[81],"32":[17],"83":[17],"84":[17],"34":[32],"22":[21,17],"85":[17],"33":[32],"86":[17],"87":[17],"88":[17],"89":[17],"90":[17],"91":[17],"92":[17],"93":[17],"94":[17],"95":[21,17],"96":[17],"97":[17],"98":[17],"99":[17],"100":[21,17],"101":[17],"102":[36],"103":[36],"37":[36],"104":[36],"105":[27],"106":[27],"107":[17],"19":[3,17],"26":[17,21],"108":[17],"109":[21,17],"110":[3],"111":[21,17],"112":[17],"113":[114],"115":[114],"116":[114]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","TrapMovement","UnityEngine.ParticleSystem","UnityEngine.Rigidbody","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","SliceObject","Game.Pool.CurrencyText","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","ButtonAnimator","UpgradeButton","TMPro.TextMeshProUGUI","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","ObjectSpawner","ObjectDestroyer","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurrencyDisplayer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Gamemanager","TrapController","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "SliceMasterLuna-MultiObject";

Deserializers.lunaInitializationTime = "02/12/2025 14:51:03";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Test1";

Deserializers.lunaAppID = "27552";

Deserializers.projectId = "d061374d2733fcc4aa48092c69e8b074";

Deserializers.packagesInfo = "com.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0\ncom.unity.textmeshpro: 3.0.6";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1725";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4447";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

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

Deserializers.buildID = "2b00ce5c-a76a-427b-8a28-f10bd3518b39";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

