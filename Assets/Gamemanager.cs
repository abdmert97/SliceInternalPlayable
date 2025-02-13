using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gamemanager : MonoBehaviour
{
    public static event Action OnGameEnded;
    public AudioController audioController;
    public SliceObject sliceObject;
    private bool _gameEnded;
    public static Gamemanager Instance;
    [LunaPlaygroundField("End Upgrade Count", 2, "End Upgrade Count")]
    public int endUpgradeCount = 4;
    //Make sure to set the colour Alpha to 255 in inspector as its automatically set to 0


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
    }

    public void EndGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame();
        if (endUpgradeCount<= upgradeCount + 2)
        {
            Luna.Unity.LifeCycle.GameEnded();
            _gameEnded = true;
             OnGameEnded.Invoke();
            Time.timeScale = 0.1f;
        }
       
    }
    
    public void InstallGame()
    {
        //Uncomment these when Luna is installed
        Luna.Unity.Playable.InstallFullGame();
    }
}
