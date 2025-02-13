using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SliceObjectChildren : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 6)
        {
            GetComponentInParent<SliceObject>().SliceFrom(this);
        }
    }
}
