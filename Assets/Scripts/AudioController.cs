using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    public AudioSource audioSource;
    public AudioClip slice;
    public AudioClip click;
    public AudioSource clickAudioSource;
    public void PlayClick()
    {
        clickAudioSource.Play();
    }
    public void PlaySlice()
    {
        audioSource.PlayOneShot(slice);
    }
}
