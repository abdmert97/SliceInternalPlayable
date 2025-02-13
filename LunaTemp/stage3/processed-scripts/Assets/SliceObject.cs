using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class SliceObject : MonoBehaviour
{
   public List<SliceObjectChildren> childrens;
   public float moveSpeed = 10f;
    public Rigidbody rigidBody;
   private bool isSliced;
    
   private Transform newParent;
   private bool _moveNewParent;
   private float _additionMove = 1;
   public float xForce = 1;
   public float yForce = 1;
   public float zForce = 1;

   public float speedDuration = 0.5f;
   public float speedMult = 2f;
   [Button]
   public void SortList()
   {
       childrens.Sort((a, b) => (int)((a.transform.position.z - b.transform.position.z)*100));
   }
    public void SliceFrom(SliceObjectChildren sliceObjectChildren)
    {
        if (isSliced)
        {
            return;
        }
        isSliced = true;
        DOVirtual.DelayedCall(0.02f, () =>
        {
            var index = childrens.IndexOf(sliceObjectChildren) ;
        
            newParent = new GameObject("Sliced").transform;
            newParent.transform.position =  childrens[index].transform.position;
            for (int i = index; i < childrens.Count; i++)
            {
                childrens[i].transform.SetParent(newParent.transform);
            }
            
            DOVirtual.DelayedCall(0.01f, () =>
            {
                _moveNewParent = true;
                ;
            });
            DOVirtual.Float(speedMult, 1f, speedDuration, (e) =>
            {
            _additionMove = e;
            }).SetEase(Ease.InCubic);
       
           
            rigidBody.AddForce(Vector3.right * xForce * 1 * GetRandom() * 1 * 1, ForceMode.Impulse);
            rigidBody.AddForce(Vector3.up * yForce* GetRandom(), ForceMode.Impulse);

            rigidBody.AddTorque(-Vector3.forward* GetRandom() * zForce,
                ForceMode.Impulse);

            
        });
    }

    private float GetRandom()
    {
        return UnityEngine.Random.Range(0.5f, 1f);
    }
    private void Update()
    {
        transform.position += transform.forward * Time.deltaTime * moveSpeed * _additionMove;

        if (_moveNewParent)
        {
            newParent.position += transform.forward * Time.deltaTime * moveSpeed;
        }
    }
}
