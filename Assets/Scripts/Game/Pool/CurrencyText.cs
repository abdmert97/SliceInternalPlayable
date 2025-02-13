using System;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Random = System.Random;

namespace Game.Pool
{
    public class CurrencyText: MonoBehaviour
    {
        public TextMeshPro text;
        public SpriteRenderer icon;
        
     
        private Transform _transform;
        private Sequence _sequence;
        private const string Plus = "+";

        private void Awake()
        {
            _transform = transform;
        }


        public void Activate(Vector3 position, float count)
        {
            var upVector = _transform.right;
            text.text = Plus + count;
          
            _transform.localScale = Vector3.zero;

            _transform.position = position;
            // Debug.Break();
            
            _sequence = DOTween.Sequence();
            _sequence.Append(
                DOVirtual.Float(0, 1f, 0.3f, value =>
                {
                    _transform.position = position + upVector * value ;
                })
            );
            _sequence.Join(
                _transform.DOScale(Vector3.one, 0.3f).SetEase(Ease.OutBack));
            _sequence.AppendInterval(.25f);
            _sequence.Append(
                _transform.DOScale(Vector3.zero, 0.3f).SetEase(Ease.InBack)
            ).OnComplete(() =>
            {
               Destroy(gameObject);
            });
        }

        [Button]
        public void SetRotation()
        {
            transform.LookAt(Camera.main.transform);
            transform.forward = -transform.forward;
        }
    }
}