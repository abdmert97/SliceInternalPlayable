using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class CurrencyManager
{
   public static int money = 50;

   public static void ResetMoney()
   {
      money = Gamemanager.Instance.startMoney;
   }
}
