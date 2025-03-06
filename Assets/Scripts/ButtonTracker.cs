using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonTracker : MonoBehaviour
{
    public HandController hand;
  public UpgradeButton knife;
  public UpgradeButton fish;
  public UpgradeButton speed;
  public Vector3 offset;
  private bool _isActive;
  private float _timer;


  private void Awake()
  {
      UpgradeButton.OnUpgrade += DisableHand;
  }

  private void OnDestroy()
  {
      UpgradeButton.OnUpgrade -= DisableHand;
  }

  private void DisableHand(UpgradeType arg1, int arg2)
  {
      hand.gameObject.SetActive(false);
      _timer = 0;
     
  }

  private void Update()
  {
    if (knife.button.interactable ||  fish.button.interactable || speed.button.interactable)
    {
       _timer += Time.deltaTime;
    }
    else
    {
        hand.gameObject.SetActive(false);
        _timer = 0;
    }

    if (_timer>=2)
    {
        hand.gameObject.SetActive(true);
        _timer = 0;
        if (knife.button.interactable)
        {
            hand.transform.position = knife.transform.position +offset;
        }
        else if (speed.button.interactable)
        {
            hand.transform.position = speed.transform.position +offset ;
        }
        else if (fish.button.interactable)
        {
            hand.transform.position = fish.transform.position +offset;
        }
        else
        {
            hand.gameObject.SetActive(false);
        }
    }
    
  }
}
