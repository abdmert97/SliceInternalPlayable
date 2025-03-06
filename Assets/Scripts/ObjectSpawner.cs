using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectSpawner : MonoBehaviour
{
    public List<SliceObject> prefab;
    public float spawnDuration = 1;
    public static float speed = 5;
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
            spawnDuration *= 0.8f;
            speed *= 1.15f;
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
        var spawn = prefab[UnityEngine.Random.Range(0, prefab.Count)];
       var spawned = Instantiate(spawn, transform.position, Quaternion.Euler(0,180,0));
      
    }
}
