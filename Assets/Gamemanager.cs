using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gamemanager : MonoBehaviour
{
    
    public SliceObject sliceObject;
    public static Gamemanager Instance;

    private void Awake()
    {
        Instance = this;
    }
}
