import Image from 'next/image'
import { FadeIn, FadeInStagger } from './components/FadeIn'
import imageMe from './images/kolnn.jpeg'
import { Border } from './components/Border'
import { SocialMedia } from './components/SocialMedia'
import React from 'react';
import {useTranslations} from 'next-intl';
import { Container } from './components/Container'
import NewModal from './components/Modalnew'
import Mainpage from './components/Mainpage'
import Contactpage from './components/Contactpage'
import Workpage from './components/Workpage'

export default function Home() {
  const t = useTranslations('home');
  return (
  <main>
    <section className='relative'>
      <Mainpage />
    </section>
    <section>
      <Workpage />
    </section>
  </main>      
  );
}
