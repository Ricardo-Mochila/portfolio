'use client'

import Image from 'next/image'
import {useRef} from 'react';
import {motion, useScroll, useTransform } from 'framer-motion';

export default function Slider() {

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
	  target: ref,
	  offset: ["end end", "start start"]
	});

	const transformY = useTransform(
		scrollYProgress,
		[0, 0.4, 1],
		[-4000, -2000, 4000]
	)

    return (
        <section ref={ref}>
			<motion.div className="h-[100px] relative flex gap-[60px]" style={{translateX: transformY}}>
				<Image src='/slider/sass.png'
				width={495}
				height={200}
				alt='sass logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/mongoDB.png'
				width={495}
				height={200}
				alt='mongoDB logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/nodeJs.png'
				width={495}
				height={200}
				alt='nodejs logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/pngwing.png'
				width={495}
				height={200}
				alt='express logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/scss.png'
				width={495}
				height={200}
				alt='scss logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/sass.png'
				width={495}
				height={200}
				alt='sass logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/mongoDB.png'
				width={495}
				height={200}
				alt='mongoDB logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/nodeJs.png'
				width={495}
				height={200}
				alt='nodejs logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/pngwing.png'
				width={495}
				height={200}
				alt='express logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
				<Image src='/slider/scss.png'
				width={495}
				height={200}
				alt='scss logo'
				className='h-[100px] w-auto brightness-[10] grayscale'
				/>
			</motion.div>
			
        </section>
    )
}