using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrapMovement : MonoBehaviour
{
    public float speedMult = 1;
    public ParticleSystem trapParticles;

    private void Update()
    {
        transform.Rotate(Vector3.back * speedMult * Time.deltaTime);
    }

    public void PlayParticle()
    {
        trapParticles.Play();
    }
}
