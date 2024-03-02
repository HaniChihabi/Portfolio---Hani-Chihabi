import Image from 'next/image'
import { FadeIn, FadeInStagger } from './components/FadeIn'
import imageMe from './images/kolnn.jpeg'
import { Border } from './components/Border'
import { SocialMedia } from './components/SocialMedia'
import React from 'react';
import {useTranslations} from 'next-intl';
import LanguageButton from './components/LanguageButton'
import { Container } from './components/Container'
export default function Home() {
const t = useTranslations('home');
  return (
      <section className="overflow-hidden h-screen">
        
      <FadeIn className='  block lg:flex-row items-center justify-center overflow-hidden relative top-40'>
        {/* Content Container */}
        
        <div className="flex-1 flex items-center justify-center ml-5">
          <div className="max-w-sm md:max-w-4xl lg:max-w-[680px] sm:text-center ">
            {/* <h1 className="font-display font-extralight tracking-tight lg:text-4xl md:text-3xl sm:text-3xl">
            {t('header1')}
            </h1> */}
            
            <h1 className="font-display font-normal tracking-normal text-neutral-950 lg:text-7xl md:text-6xl sm:text-6xl mb-5">
              {t('header2')}
            </h1>

            <p className="font-display top-5 text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed lg:pb-0 sm:pb-8 font-light lg:text-3xl md:text-2xl sm:text-2xl relative mb-14">
            {t('intro1')}
            </p>

            <p className="font-display text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed font-medium lg:text-3xl md:text-2xl sm:text-2xl relative left-0 bottom-9 lg:pb-0 sm:pb-8">
            {t('intro2')}
            </p>
          </div>
        </div>

       {/* Image Container */}
       <div className="flex-1 flex items-center justify-center">
        <div className="h-full w-full max-w-lg flex justify-center items-center">
          <div className='h-[200px] w-[200px] relative rounded-4xl overflow-hidden mt-0'>
            <Image 
              src={imageMe}
              alt="A descriptive alt text"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
            <SocialMedia />

          </div>      
          </FadeIn>
      
      </section>
  )
}
