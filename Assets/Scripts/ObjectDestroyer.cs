using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectDestroyer : MonoBehaviour
{
   private void OnTriggerEnter(Collider other)
   {
      if (other.gameObject.layer == 8)
      {
         Destroy(other.gameObject);
      }
   }
}
