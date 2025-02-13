using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrapMovement : MonoBehaviour
{
    public float speedMult = 1;


    private void Update()
    {
        transform.Rotate(Vector3.back * speedMult * Time.deltaTime);
    }
}
