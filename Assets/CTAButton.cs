using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class CTAButton : MonoBehaviour
{
    public Button button;
    public float scaleDelay = 150;
    private void Awake()
    {
        button.onClick.AddListener(OnClick);
        
    }

    private void Start()
    {
        DOVirtual.DelayedCall(scaleDelay, () =>
        {
            transform.DOScale(1.2f, 0.5f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
        });
    }

    private void OnClick()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/super-slicer-idle-game/id6642702981","https://play.google.com/store/apps/details?id=com.oreon.trapall");
    }
}
