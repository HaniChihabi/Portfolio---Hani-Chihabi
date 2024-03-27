"use client"
import React from "react";

import { GridList, GridListItem } from '../components/GridList'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { SectionIntro } from '../components/SectionIntro'
import Layout from '../components/Layout';
import ButtonUp from '../components/ButtonUp'
import {useTranslations} from 'next-intl'
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import Card7 from "../components/Card7";
import Card8 from "../components/Card8";
import CardStack from "../components/CardStack";
import  Faq  from "../components/Faq";
import { useState } from "react";
import BGAnimation from "../components/BGAnimation";
import { HoverEffect } from "../components/HoverEffect";

function Values() {
  const t = useTranslations('Me')

  return (
    <div classNameName="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-48 lg:pt-20">
      <SectionIntro
        title="Projects"
      >
      </SectionIntro>
      <Container classNameName="mt-16">
        <GridList>
          <GridListItem title="Efficient">
          I consistently meet every deadline, upholding a record of punctuality and reliability.
          </GridListItem>
          <GridListItem title="Adaptable">
          "Each business is different, so I work to fit their needs"
          </GridListItem>
          <GridListItem title="Innovative">
          I continuously adapt to the evolving tech landscape by incorporating new open source projects into my work
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Services() {
  // State to track visibility of sets of cards
  const [showFirstSet, setShowFirstSet] = useState(false);
  const [showSecondSet, setShowSecondSet] = useState(false);
  const t = useTranslations('projects')
  return (
    <Container className='flex flex-col justify-center items-center cont-bold w-full h-auto'>
      <div className='text-center font-medium text-7xl pb-24'>
        <h1>{t('Text1')}</h1>
        <h1>{t('Text2')}</h1>
      </div>
      <div className='grid lg:grid-cols-2 gap-x-4 gap-y-0'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      {/* First additional set of projects */}
      {showFirstSet && (
        <div className='grid grid-cols-2 gap-x-4 gap-y-0 mt-4'>
          <Card5 />
          <Card6 />
        </div>
      )}
      {/* Button to load the first set */}
      {!showFirstSet && !showSecondSet && (
        <div className="flex justify-center w-full mt-4">
          <button className="px-6 py-2 text-blue-500 text-xl rounded-md" onClick={() => setShowFirstSet(true)}>
            Load More Projects +
          </button>
        </div>
      )}
      {/* Second additional set of projects */}
      {showSecondSet && (
        <div className='grid grid-cols-2 gap-x-4 gap-y-0 mt-4'>
          <Card7 />
          <Card8 />
        </div>
      )}
      {/* Button to load the second set, shown after the first set is loaded */}
      {showFirstSet && !showSecondSet && (
        <div className="flex justify-center w-full mt-4">
          <button className="px-6 py-2 text-blue-500 text-xl rounded-md" onClick={() => setShowSecondSet(true)}>
            Load More Projects +
          </button>
        </div>
      )}
    </Container>
  );
}

export default function Work() {
  const t = useTranslations('work')

  return (
    <>
    <Layout className='bg-black h-screen'>

        <section className="py-32 bg-slate-0">
        <Services/>   
        </section>
        <section className=" h-[120vh]  py-32 mb-0 bg-slate-50">
          <CardStack />
        </section>

        <section className="py-32 bg-black">
          <HoverEffect />
        </section>

        <section className="bg-slate-0 py-32">
          <Faq />
        </section>


      <ContactSection />

{/* projects */}
      

<ButtonUp />
</Layout>
    </>
  )
}