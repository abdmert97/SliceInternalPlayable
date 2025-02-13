using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectSpawner : MonoBehaviour
{
    public GameObject prefab;
    public float spawnDuration = 1;
    private float _time = 0f;

    private void Update()
    {
        _time += Time.deltaTime;
        if (_time>spawnDuration)
        {
            _time = 0;
            spawnObject();
        }
    }

    public void spawnObject()
    {
        Instantiate(prefab, transform.position, Quaternion.Euler(0,180,0));
    }
}
