using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    public AudioSource audioSource;
    public AudioClip slice;
    public AudioClip click;

    public void PlayClick()
    {
        audioSource.PlayOneShot(click);
    }
    public void PlaySlice()
    {
        audioSource.PlayOneShot(slice);
    }
}
