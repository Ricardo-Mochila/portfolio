'use client'

import Image from 'next/image'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}  

export default function ProjectCard({src, title, devType, text, technologies, invert}) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 50);
    const y1 = useParallax(scrollYProgress, 200);

    return (
        <div className={`flex flex-col mt-[50px] ${invert ? "md:flex-row-reverse" : "md:flex-row"}`} ref={ref}>
            <motion.div className={`max-w-[80%] md:min-w-[50%] md:max-w-[50%] ${invert ? 'ml-auto' : ''}`} style={{ y }}>
                <Image
                    src={src}
                    width={783}
                    height={479}
                    alt={title}
                    className='rounded-xl aspect-[16/9] object-cover object-left-top'
                />
            </motion.div>

            <motion.div style={{ y1 }} className={`relative bg-background-color shadow-xl relative top-[-40px] rounded-xl p-[10px] md:p-[20px] pb-[20px] md:pb-[30px] md:ml-0 md:h-fit md:top-[unset] md:bottom-[-40px] md:mt-auto ${invert ? 'ml-[0px] mr-[40px]' : 'ml-[40px]'} ${invert ? 'md:left-[40px] md:mr-0' : 'md:left-[-40px]'}`}>
                <h4 className='font-mono text-secondary-color text-sm md:text-base mb-0 md:font-semibold'>{devType}</h4>
                <h3 className='text-white text-base md:text-xl mb-0 font-semibold md:font-bold tracking-wider'>{title}</h3>
                <p className='text-sm md:text-base text-neutral-400 md:mt-[10px] whitespace-pre-wrap'>{text}</p>
                <div className='absolute right-[10px] bottom-[-10px] flex gap-[10px]'>
                    {technologies.map(t => (
                        <span key={t} className='text-white uppercase font-semibold text-sm md:font-bold'>{t}</span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}