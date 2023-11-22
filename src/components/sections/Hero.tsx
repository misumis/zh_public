import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ButtonLink from '@/components/links/ButtonLink';

const Hero = () => (
  <section className='min-h-400 my-16 grid grid-cols-1 gap-14 align-middle lg:my-36 lg:grid-cols-5'>
    <Carousel
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      swipeable={false}
      autoPlay
      animationHandler='fade'
      infiniteLoop
      interval={5000}
      className='w-auto lg:col-span-3'
    >
      <div>
        <img
          alt='wizualizacja budynku jeden'
          className='rounded-md'
          src='/images/image_1.jpg'
        />
      </div>
      <div>
        <img
          alt='wizualizacja budynku dwa'
          className='rounded-md'
          src='/images/image_2.jpg'
        />
      </div>
      <div>
        <img
          alt='wizualizacja budynku trzy'
          className='rounded-md'
          src='/images/image_3.jpg'
        />
      </div>
    </Carousel>

    <div className='flex xs:flex-wrap xs:content-center xs:justify-center sm:flex-row sm:flex-nowrap sm:justify-between md:justify-around lg:col-span-2 lg:flex-col lg:justify-center'>
      <h1 className='uppercase  xs:text-center xs:text-4xl xs:leading-tight sm:text-left sm:text-5xl sm:leading-tight md:text-6xl xl:text-7xl xl:leading-tight '>
        <span className=' text-primary-600 xs:block'>{`Zamieszkaj `}</span>
        <span>na stokach</span>
      </h1>
      <ButtonLink
        className='h-min w-max text-lg xs:mt-4 sm:my-auto lg:my-0 lg:mt-6'
        variant='outline'
        href='/apartamenty'
      >
        Znajdź apartament
      </ButtonLink>
    </div>
  </section>
);

export default Hero;
