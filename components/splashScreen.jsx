'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import anime from 'animejs'

export default function SplashScreen({loaded}) {

    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => loaded()
        })

       loader
       .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
       }).add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
       })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className='m-auto'>
            <Image id='logo' src='/logo.png' width={200} height={200} alt='logo'></Image>
        </div>
    )
}