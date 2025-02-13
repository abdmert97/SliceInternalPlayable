using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UpgradeButton : MonoBehaviour
{
   public static event Action<UpgradeType,int> OnUpgrade;
   public List<int> upgradeCosts;
   public Sprite inactiveSprite;
   public TextMeshProUGUI upgradeCostText;
   public TextMeshProUGUI upgradeCountText;
   private int upgradeIndex;
   public Button button;
   public UpgradeType upgradeType;
   
   private int money;
   private void Awake()
   {
      UpdateUI();
      button.onClick.AddListener(Upgrade);
   }

   private void Upgrade()
   {
      CurrencyManager.money-=upgradeCosts[upgradeIndex];
      upgradeIndex++;
      UpdateUI();
      OnUpgrade?.Invoke(upgradeType, upgradeIndex);
   }

   private void UpdateUI()
   {
      if (upgradeIndex >= upgradeCosts.Count)
      {
         upgradeCostText.text = "MAX";     
         button.interactable = false;
     
      }
      else
      {
         upgradeCostText.text = upgradeCosts[upgradeIndex].ToString();
      }
      upgradeCountText.text = (upgradeIndex +1).ToString();
   }
   
   private void Update()
   {
      if (money!= CurrencyManager.money)
      {
         money = CurrencyManager.money;
         CheckButtons();
      }
   }

   private void CheckButtons()
   {
      if (CurrencyManager.money<upgradeCosts[upgradeIndex])
      {
         button.interactable = false;
      }
      else
      {
         button.interactable = true;
      }
   }
}

public enum UpgradeType
{
   Trap,
   Fish,
   Speed
}
