using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class SplashParticleRenderer : MonoBehaviour
{
    public List<Sprite> sprites = new List<Sprite>();
    public SpriteRenderer spriteRenderer;

    private Tween tween;
    private bool isFirst = true;

    public void PlayParticle()
    {
        if (!isFirst)
        {
            tween.Kill();
        }
        isFirst = false;
        spriteRenderer.sprite = sprites[Random.Range(0, sprites.Count)];
        var color = spriteRenderer.color;
        color.a = 1;
        spriteRenderer.color = color;
        transform.DOKill();
        transform.localScale = Vector3.one; 
        transform.DOScale(1.2f, 1f).SetLoops(2, LoopType.Yoyo);
        
        tween = DOVirtual.Float(1f, 0f, 1f, (e) =>
        {
            color.a = e;
            spriteRenderer.color = color;
           
        }).SetDelay(1f);
    }
}
