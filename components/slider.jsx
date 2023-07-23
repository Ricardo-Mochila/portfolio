'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

export default function Slider() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <section id='slider' className='keen-slider flex gap-[30px] items-center justify-center h-[200px]'>
            <Carousel
                 additionalTransfrom={0}
                 arrows={false}
                 autoPlay
                 autoPlaySpeed={0.3}
                 centerMode={false}
                 className=""
                 containerClass="container-with-dot h-[100%] w-[100%] flex"
                 customTransition="all 1s linear"
                 dotListClass=""
                 draggable={false}
                 focusOnSelect={false}
                 infinite
                 itemClass=""
                 keyBoardControl={false}
                 minimumTouchDrag={0}
                 pauseOnHover={false}
                 renderArrowsWhenDisabled={false}
                 renderButtonGroupOutside={false}
                 renderDotsOutside={false}
                 responsive={{
                   desktop: {
                     breakpoint: {
                       max: 3000,
                       min: 1024
                     },
                     items: 3,
                     partialVisibilityGutter: 40
                   },
                   mobile: {
                     breakpoint: {
                       max: 464,
                       min: 0
                     },
                     items: 1,
                     partialVisibilityGutter: 30
                   },
                   tablet: {
                     breakpoint: {
                       max: 1024,
                       min: 464
                     },
                     items: 2,
                     partialVisibilityGutter: 30
                   }
                 }}
                 rewind={false}
                 rewindWithAnimation={false}
                 rtl={false}
                 shouldResetAutoplay={false}
                 showDots={false}
                 sliderClass=""
                 slidesToSlide={1}
                 swipeable={false}
                 transitionDuration={1000}
                >
                    <Image src='/slider/sass.png'
                    width={495}
                    height={200}
                    alt='sass logo'
                    />
                    <Image src='/slider/mongoDB.png'
                    width={495}
                    height={200}
                    alt='mongoDB logo'
                    />
                    <Image src='/slider/nodeJs.png'
                    width={495}
                    height={200}
                    alt='nodejs logo'
                    />
                    <Image src='/slider/pngwing.png'
                    width={495}
                    height={200}
                    alt='express logo'
                    />
                    <Image src='/slider/scss.png'
                    width={495}
                    height={200}
                    alt='scss logo'
                    />
            </Carousel>
            
        </section>
    )
}