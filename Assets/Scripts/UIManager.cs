using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Luna.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public Button endCardButton;
  
    public GameObject endCardPanel;
    public List<Transform> endCardPanels;
    public Transform button;
    private void Awake()
    {
        Gamemanager.OnGameEnded += ActivateEndPanel;
        endCardPanel.SetActive(false);
        endCardButton.onClick.AddListener(() =>
        {
            Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/super-slicer-idle-game/id6642702981","https://play.google.com/store/apps/details?id=com.oreon.trapall");
        });
    
    }

    private void OnDestroy()
    {
        Gamemanager.OnGameEnded -= ActivateEndPanel;
    }

    private void ActivateEndPanel()
    {
        endCardPanel.SetActive(true);
        for (int i = 0; i < endCardPanels.Count; i++)
        {
            var item = endCardPanels[i];
            item.localScale = Vector3.zero;
            item.DOScale(1,0.5f).SetDelay(i*0.2f).SetEase(Ease.OutBack);
        }
        button.DOScale(Vector3.one*1.2f, 0.5f).SetDelay(1.5f).SetLoops(-1,LoopType.Yoyo).SetUpdate(true);
    }

  

    
}
