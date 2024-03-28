import Image from 'next/image'
import { FadeIn, FadeInStagger } from './components/FadeIn'
import imageMe from './images/kolnn.jpeg'
import { Border } from './components/Border'
import { SocialMedia } from './components/SocialMedia'
import React from 'react';
import {useTranslations} from 'next-intl';
import { Container } from './components/Container'
import NewModal from './components/Modalnew'
export default function Home() {
  const t = useTranslations('home');
  return (
    <section className="overflow-hidden h-[85vh] max-h-screen flex justify-center items-center">
      <FadeIn className="block lg:flex-row items-center justify-center w-full p-4 lg:p-0">
        {/* Content Container */}
        <div className="flex flex-1 items-center justify-center lg:ml-5">
          <div className="text-center w-full px-4 lg:px-0">
            <h1 className="font-display text-3xl lg:text-6xl text-neutral-950 mb-4 lg:mb-2">
              {t('header2')}
            </h1>
            <p className="text-neutral-600 text-sm lg:text-xl leading-relaxed mt-2">
              {t('intro1')}
            </p>
            <p className="text-neutral-600 text-sm lg:text-xl leading-relaxed">
              {t('intro2')}
            </p>
            <p className="font-display text-neutral-600 text-sm lg:text-xl leading-relaxed font-medium">
              {t('intro3')}
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex flex-1 items-center justify-center">
          <div className='mt-4 lg:mt-0 h-40 w-40 lg:h-[200px] lg:w-[200px] relative rounded-4xl overflow-hidden'>
            <Image 
              src={imageMe}
              alt="A descriptive alt text"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <SocialMedia />
        </div>
      </FadeIn>
    </section>
  );
}
