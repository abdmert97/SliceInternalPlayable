using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Gamemanager : MonoBehaviour
{
    public static event Action OnGameEnded;
    public AudioController audioController;
    public SliceObject sliceObject;
    public Camera camera;
    private bool _gameEnded;
    public static Gamemanager Instance;
    [LunaPlaygroundField("End Upgrade Count", 2, "End Upgrade Count")]
    public int endUpgradeCount = 4;
    //Make sure to set the colour Alpha to 255 in inspector as its automatically set to 0
    [SerializeField]
    [LunaPlaygroundField("SkyColor", 0, "Game Controls")]
    public Color skyColor;
    [LunaPlaygroundField("StartMoney", 0, "Game Controls")]
    public int startMoney = 50;
    private int upgradeCount;
    private void Awake()
    {
        Instance = this;
        UpgradeButton.OnUpgrade += CheckFinish;
    }

    private void CheckFinish(UpgradeType arg1, int arg2)
    {
        upgradeCount++;
        if (endUpgradeCount<= upgradeCount)
        {
            EndGame();
        }
    }

    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        camera.backgroundColor = skyColor;
    }

    public void EndGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/super-slicer-idle-game/id6642702981","https://play.google.com/store/apps/details?id=com.oreon.trapall");
        if (endUpgradeCount + 2<= upgradeCount && _gameEnded == false)
        {
            Luna.Unity.LifeCycle.GameEnded();
            _gameEnded = true;
             OnGameEnded?.Invoke();
             DOVirtual.DelayedCall(2f, () =>
             {
                 Time.timeScale = 0.1f;
             });
        }
       
    }
    public void ForceEndGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/super-slicer-idle-game/id6642702981","https://play.google.com/store/apps/details?id=com.oreon.trapall");
       
            Luna.Unity.LifeCycle.GameEnded();
            _gameEnded = true;
            OnGameEnded?.Invoke();
            DOVirtual.DelayedCall(2f, () =>
            {
                Time.timeScale = 0.1f;
            });
     
       
    }
    
    public void InstallGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame();
    }
}
