using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrapController : MonoBehaviour
{
    public List<TrapMovement> traps;

    public List<int> speedUpgrade;
    private void Awake()
    {
        UpgradeButton.OnUpgrade += Upgrade;
    }

    private void OnDestroy()
    {
        UpgradeButton.OnUpgrade -= Upgrade;
    }

    private void Upgrade(UpgradeType arg1, int arg2)
    {
        if (arg1 == UpgradeType.Trap)
        {
            for (int i = 0; i < traps.Count && i<=arg2; i++)
            {
                traps[i].transform.parent.gameObject.SetActive(true);
            }
        }
        else if (arg1 == UpgradeType.Speed)
        {
            var increase = speedUpgrade[arg2];
            foreach (var trapMovement in traps)
            {
                trapMovement.speedMult+= increase;
            }
        }


    }
}
