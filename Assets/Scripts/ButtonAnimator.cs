using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ButtonAnimator : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    public float buttonScaleOnPointerDown = .8f;
    private Button _button;
    private RectTransform _rectTransform;
    private Transform _transform;
    private Vector2 _originalSizeDelta;
    private Vector3 _originalScale;
    private Image clickableAreaPlaceholder;
    
    private void Awake()
    {
        _button = GetComponent<Button>();
        _rectTransform = GetComponent<RectTransform>();
        _originalSizeDelta = _rectTransform.sizeDelta;
        _transform = transform;
        _originalScale = _transform.localScale;
        

        CreateClickableAreaPlaceholder();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (!_button.interactable || !_button.enabled) return;
        _transform.DOKill();
        _transform.DOScale(_originalScale * buttonScaleOnPointerDown, .2f).SetEase(Ease.OutBack).OnUpdate(() =>
        {
            clickableAreaPlaceholder.rectTransform.sizeDelta = _originalSizeDelta * (_originalScale.magnitude / _transform.localScale.magnitude);
        });
        //GameManager.Instance.gameplayController.audioController.RequestAudio(AudioController.AudioType.ButtonClick);
     
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (!_button.interactable || !_button.enabled) return;
        _transform.DOKill();
        _transform.DOScale(_originalScale, .2f).SetEase(Ease.OutBounce).OnUpdate(() =>
        {
            clickableAreaPlaceholder.rectTransform.sizeDelta = _originalSizeDelta * (_originalScale.magnitude / _transform.localScale.magnitude);
        });
    }
    
    // This is a placeholder required to ensure clickable area does not change during animation
    private void CreateClickableAreaPlaceholder()
    {
        clickableAreaPlaceholder = new GameObject().AddComponent<Image>();
        clickableAreaPlaceholder.name = "ClickableArea";
        clickableAreaPlaceholder.color = Color.clear;
        clickableAreaPlaceholder.rectTransform.SetParent(_rectTransform);
        clickableAreaPlaceholder.rectTransform.position = _rectTransform.position;
        clickableAreaPlaceholder.rectTransform.localScale = Vector3.one;
        clickableAreaPlaceholder.rectTransform.pivot = Vector2.one/2;
        clickableAreaPlaceholder.rectTransform.anchorMin = Vector2.one/2;
        clickableAreaPlaceholder.rectTransform.anchorMax = Vector2.one/2;
        clickableAreaPlaceholder.rectTransform.anchoredPosition = Vector2.zero;
        clickableAreaPlaceholder.rectTransform.sizeDelta = _rectTransform.sizeDelta;
    }
}
