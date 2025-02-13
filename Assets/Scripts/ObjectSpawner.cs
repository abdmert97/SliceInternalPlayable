using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectSpawner : MonoBehaviour
{
    public SliceObject prefab;
    public float spawnDuration = 1;
    public static float speed = 4;
    private float _time = 0f;
    private void Awake()
    {
        UpgradeButton.OnUpgrade += Upgrade;
        _time = spawnDuration -0.1f;
    }

    private void Upgrade(UpgradeType arg1, int arg2)
    {
        if (arg1 == UpgradeType.Fish)
        {
            spawnDuration *= 0.9f;
            speed *= 1.1f;
        }
    }

    private void OnDestroy()
    {
        UpgradeButton.OnUpgrade -= Upgrade;
    }
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
       var spawned = Instantiate(prefab, transform.position, Quaternion.Euler(0,180,0));
      
    }
}
