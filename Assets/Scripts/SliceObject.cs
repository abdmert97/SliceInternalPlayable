using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using Unity.VisualScripting;
using UnityEngine;

public class SliceObject : MonoBehaviour
{
   public List<SliceObjectChildren> childrens;
   public float moveSpeed = 10f;
   public BoxCollider collider;
    public Rigidbody rigidBody;
    public SliceObject emptySliced;
    private bool isSliced;
    
   private SliceObject newParent;
   private bool _moveNewParent;
   private float _additionMove = 1;
   public float xForce = 1;
   public float yForce = 1;
   public float zForce = 1;

   public float speedDuration = 0.5f;
   public float speedMult = 2f;
   private int lastSlicedID;
   private void Awake()
   {
       isSliced = true;
       DOVirtual.DelayedCall(0.1f, () =>
       {
            isSliced = false;
       });
   }

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
        
            newParent = Instantiate(emptySliced);
          
            newParent.transform.position =  childrens[index].transform.position;
            for (int i = index; i < childrens.Count; i++)
            {
                childrens[i].transform.SetParent(newParent.transform);
                newParent.childrens.Add(childrens[i]);
            }
            newParent.collider.size = collider.size;
            newParent.collider.center = collider.center;
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
        DOVirtual.DelayedCall(0.5f, () =>
        {
            isSliced = false;
        });
    }

    private float GetRandom()
    {
        return UnityEngine.Random.Range(0.5f, 1f);
    }
    private void Update()
    {
        transform.position += transform.forward * Time.deltaTime * moveSpeed * _additionMove;
    }

    private void OnTriggerEnter(Collider other)
    {
     
        if (other.gameObject.layer == 6)
        {
            Slice(other.transform.position);
        }
    }

    private void Slice(Vector3 transformPosition)
    {
    
        SliceObjectChildren closestTransform = null;
        var distance = 999f;
        var z = transformPosition.z;
        foreach (SliceObjectChildren sliceObjectChildren in childrens)
        {
            var currDistance = Mathf.Abs(sliceObjectChildren.transform.position.z -z);
            if (currDistance <= distance)
            {
                closestTransform = sliceObjectChildren;
                distance = currDistance;
            }
        }
        Debug.Log(closestTransform.name);
        SliceFrom(closestTransform);
    }
}
