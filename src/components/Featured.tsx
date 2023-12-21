'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Featured({ banner }: any) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = banner

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [images?.length])

  return (
    <div>
      {images?.length > 0 && (
        <div className='relative slider flex'>
          <Carousel
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
            infiniteLoop
            autoPlay
            interval={15000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            {images.map((image: any, index: any) => (
              <div key={index} className='max-h-[300px] md:max-h-[600px] lg:max-h-[60vh]'>
                <Image
                  width={10000}
                  height={10000}
                  src={image?.imageUrl[0]}
                  alt={`Image ${index}`}
                  className='w-full object-contain duration-200 transition-opacity'
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default Featured
