using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HandController : MonoBehaviour
{
    public Image image;
    public List<Sprite> sprites;
    public float time = 0.5f;
    public float delay = 0.2f;
    private float _timer = 0;
    private int index = 0;
    private int count;
    private int increment = 1;
    private void Awake()
    {
        count = sprites.Count;
    }

    private void OnEnable()
    {
        index = 0;
        image.sprite = sprites[index];
        _timer = 0;
    }

    private void Update()
    {
        _timer += Time.deltaTime;
        if (_timer>time)
        {
            index+=increment;
            if (index>= count)
            {
              
                increment = -1;
              
                return;
            }
            if (index<0)
            {
              
                increment = 1;
                _timer = -delay;
                return;
            }
            _timer = 0; 
            image.sprite = sprites[index];
        }
    }
}
