using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Game.Pool;
using Sirenix.OdinInspector;
using UI.Widgets;
using UnityEngine;

public class SliceObject : MonoBehaviour
{
   public List<Transform> childrens;
   public int reward;
   public float moveSpeed = 10f;
   public BoxCollider collider;
   public Rigidbody rigidBody;
   public float delayOffset;
   public CurrencyText currencyText;
   private bool isSliced;
    
   private SliceObject newParent;
   private bool _moveNewParent;
   private float _additionMove = 1;
   public float xForce = 1;
   public float yForce = 1;
   public float zForce = 1;

   public float speedDuration = 0.5f;
   public float speedMult = 2f;
   private List<int> lastSlicedIDs = new List<int>();
   
   private TrapMovement trapMovement;
   private void Awake()
   {
       UpdateColliderBounds(this); 
       isSliced = true;
       DOVirtual.DelayedCall(0.1f, () =>
       {
            isSliced = false;
       });
   }

   [Button]
   public void GetChildren()
   {
       childrens.Clear();
       foreach (Transform child in transform.GetChild(0))
       {
           childrens.Add(child);
       }
       SortList();
   }
   [Button]
   public void SortList()
   {
       childrens.Sort((a, b) => (int)((a.transform.position.z - b.transform.position.z)*100));
   }
    public void SliceFrom(Transform sliceObjectChildren,int id)
    {
        if (lastSlicedIDs.Contains(id) )
        {
            return;
        }
       
        lastSlicedIDs.Add(id);
     
        isSliced = true;
       
            var index = childrens.IndexOf(sliceObjectChildren) + 1;

            if (index >= childrens.Count) return; // Safety check to prevent out-of-bounds error

// Create a new parent object for the sliced parts
var emptySliced = Gamemanager.Instance.sliceObject;
            newParent = Instantiate(emptySliced);
           
            newParent.lastSlicedIDs.Add(id);
            
            DOVirtual.DelayedCall(0.25f, () =>
            {
                lastSlicedIDs.Remove(id);
                newParent.lastSlicedIDs.Remove(id);
            });
// Collect children that will be moved

// Collect children that will be moved
         

            for (int i = index; i < childrens.Count; i++)
            {
                childrens[i].transform.SetParent(newParent.transform);
                newParent.childrens.Add(childrens[i]);
            }

// Remove the moved children from the original list
            foreach (Transform child in newParent.childrens)
            {
                childrens.Remove(child);
            }

// Calculate bounds **without moving objects**
            Bounds newParentBounds = CalculateWorldBounds(newParent.childrens);
            Bounds originalBounds = CalculateWorldBounds(childrens);

// Set collider sizes and centers without moving objects
            newParent.collider.size = newParentBounds.size;
            newParent.collider.center = newParent.transform.InverseTransformPoint(newParentBounds.center);

            collider.size = originalBounds.size;
            collider.center = transform.InverseTransformPoint(originalBounds.center);
            
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
            
            newParent.rigidBody.AddForce(Vector3.up * yForce* GetRandom()*0.6f, ForceMode.Impulse);
            trapMovement.PlayParticle();
            CurrencyManager.money += reward;
            StageProgressBar.IncreaseBar.Invoke(reward);
            var text = Instantiate(currencyText);
            text.Activate(transform.position+Vector3.up*1 + Vector3.right*1.5f,reward);
            Gamemanager.Instance.audioController.PlaySlice();
        DOVirtual.DelayedCall(0.15f, () =>
        {
            isSliced = false;
        });
    }
    
    void UpdateColliderBounds(SliceObject obj)
    {
        var newBound = BoundCalculator.GetBounds(obj.gameObject);
        obj.collider.size = newBound.size;
        obj.collider.center = obj.transform.InverseTransformPoint(newBound.center);
    }

// Function to get the center of all children
    Vector3 GetCenterOfChildren(List<Transform> children)
    {
        if (children.Count == 0) return Vector3.zero;

        Vector3 totalPosition = Vector3.zero;
        foreach (var child in children)
        {
            totalPosition += child.position;
        }
        return totalPosition / children.Count;
    }

    private float GetRandom()
    {
        return UnityEngine.Random.Range(0.5f, 1f);
    }
    private void Update()
    {
        transform.position += transform.forward * Time.deltaTime * ObjectSpawner.speed * _additionMove;
    }

    private void OnTriggerEnter(Collider other)
    {   
     
        if (other.gameObject.layer == 6)
        { 
            trapMovement = other.GetComponent<TrapMovement>();
            var speed =trapMovement.speedMult;
            if (trapMovement.CanCut() == false)
            {
                return;
            }
            DOVirtual.DelayedCall(Mathf.Max(0.1f,0.35f+delayOffset- speed/1000), () =>
            {
                Slice(other.transform.position, other.gameObject.GetInstanceID());
              
            });
            
        }
    }

    private void Slice(Vector3 transformPosition,int slicedID)
    {
    
        Transform closestTransform = null;
        var distance = 999f;
        var z = transformPosition.z;
        foreach (Transform sliceObjectChildren in childrens)
        {
            var currDistance = Mathf.Abs(sliceObjectChildren.transform.position.z -z);
            if (currDistance <= distance)
            {
                closestTransform = sliceObjectChildren;
                distance = currDistance;
            }
        }
            
        SliceFrom(closestTransform,slicedID);
    }
    
    Bounds CalculateWorldBounds(List<Transform> children)
    {
        if (children.Count == 0) return new Bounds(Vector3.zero, Vector3.zero);

        Bounds bounds = BoundCalculator.GetBounds(children[0].parent.gameObject);
        return bounds;
    }
}
