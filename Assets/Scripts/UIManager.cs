using System;
using System.Collections;
using System.Collections.Generic;
using Luna.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public Button endCardButton;
    public Text tutorialInfo;
    public GameObject tutorialPanel;
    public GameObject endCardPanel;
    private void Awake()
    {
        Gamemanager.OnGameEnded += ActivateEndPanel;
        endCardPanel.SetActive(false);
        endCardButton.onClick.AddListener(() =>
        {
            Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/super-slicer-idle-game/id6642702981","https://play.google.com/store/apps/details?id=com.oreon.trapall");
        });
    
    }

    private void ActivateEndPanel()
    {
        endCardPanel.SetActive(true);
    }

    private void StopTutorial()
    {
        tutorialPanel.SetActive(false);
    }

    
}
