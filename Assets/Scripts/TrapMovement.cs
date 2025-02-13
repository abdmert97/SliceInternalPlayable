using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrapMovement : MonoBehaviour
{
    public float speedMult = 1;
    public ParticleSystem trapParticles;
    public SplashParticleRenderer SplashParticleRenderer;
    public SplashParticleRenderer SplashParticleRenderer1;
    private int count;
    private void Update()
    {
        transform.Rotate(Vector3.back * speedMult * Time.deltaTime);
    }

    public void PlayParticle()
    {
      
      
        if (count == 1)
        {
            SplashParticleRenderer1.PlayParticle();
            count = 0;
        }
        else
        {
            SplashParticleRenderer.PlayParticle();
            count++;
        }
      
       
        trapParticles.Play();
    }

    public bool CanCut()
    {
        var angle = transform.localEulerAngles.z;
        if (angle>5 && angle<100)
        {
            return true;
        }
     
        return false;
    }
}
