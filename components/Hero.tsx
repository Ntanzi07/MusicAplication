'use client'

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'

type Props = {}

const Hero = (props: Props) => {
    const ref = useRef(null)

    const { scrollYProgress: scroll1 } = useScroll({
        target: ref,
        offset: ["0 0", "1 1"]
    });

    const translateY = useTransform(scroll1, [0, .5], ["0%", "100%"]);
    const scale = useTransform(scroll1, [0, 1], ["1", ".5"]);
    const borderRadius = useTransform(scroll1, [0, 1], ["0rem", "2.5em"]);

    return (
        <section ref={ref} className='relative h-[500vh]'>
            <div className='sticky top-0 h-screen w-full overflow-hidden'>
                <motion.div 
                style={{
                    scale,
                    borderRadius
                }}
                className='w-full h-full left-0 top-0 rounded-3xl absolute overflow-hidden z-[-1]'>
                    <video
                        src='video1.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        className='w-full h-full object-cover object-[50%_30%] select-none'
                    />
                </motion.div>
                <motion.div
                    style={{
                        translateY,
                    }}
                    className='absolute left-0 bottom-0 mix-blend-multiply w-full bg-background sm:px-16 px-4 py-5 select-none'>
                    <h1 className='sm:text-[9vw] text-[18vw] arimo uppercase leading-[1em] text-justify font-bold'>Your New way to listen Music</h1>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero