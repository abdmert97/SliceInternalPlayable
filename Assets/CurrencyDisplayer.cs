using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class CurrencyDisplayer : MonoBehaviour
{
    public TextMeshProUGUI text;

    private int money;
    private void Awake()
    {
        CurrencyManager.ResetMoney();
        money = CurrencyManager.money;
        text.text = CurrencyManager.money.ToString();
    }

    private void Update()
    {
        if (money!= CurrencyManager.money)
        {
            money = CurrencyManager.money;
            text.text = CurrencyManager.money.ToString();
        }
    }
}
