using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace UI.Widgets
{
    public class StageProgressBar: MonoBehaviour
    {
        public static Action<int> IncreaseBar;
        public Slider slider;
        public TextMeshProUGUI goalText;
        

        private const string Slash = "/";

        private int count = 0;
        private int goal = 500;
     
        private void Awake()
        {
            IncreaseBar += UpdateProgress;
            goalText.text = 0 + Slash +goal;
            slider.value = 0;
        }

        private void OnDestroy()
        {
            IncreaseBar -= UpdateProgress;
        }

        private void UpdateProgress(int obj)
        {
            count += obj;
            SetProgress(count, goal);
        }

        public void SetProgress(float currentCount, float goalCount)
        {
            float progress = currentCount / goalCount;
            goalText.text = currentCount + Slash +goalCount;
            goalText.transform.DOKill();
            goalText.transform.localScale = Vector3.one;
            goalText.transform.DOScale(1.2f, 0.15f).SetEase(Ease.Linear).SetLoops(2, LoopType.Yoyo);
            if (progress>= 1)
            {
                progress = 1;
                Gamemanager.Instance.ForceEndGame();
            }
            slider.value = progress;
        }

     
    }
}