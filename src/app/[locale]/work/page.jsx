"use client"
import React from "react";

import Image from 'next/image'
import { GridList, GridListItem } from '../components/GridList'
import { GridPattern } from '../components/GridPattern'
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
import BGAnimation from "../components/BGAnimation";
import CardStack from "../components/CardStack";
import  Faq  from "../components/Faq";
import { useState } from "react";

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
  // State to track if the additional projects are loaded
  const [additionalProjectsLoaded, setAdditionalProjectsLoaded] = useState(false);

  const loadMoreProjects = () => {
    setAdditionalProjectsLoaded(true);
  };

  return (
    <Container className='flex flex-col justify-center items-center cont-bold w-full h-auto'>
      <div className='text-center font-medium text-7xl pb-24'>
        <h1>A small selection</h1>
        <h1>of my work.</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-4 gap-y-0'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      {/* Load the additional set of projects if the state is true */}
      {additionalProjectsLoaded && (
        <div className='grid grid-cols-2 gap-x-4 gap-y-0 mt-4'>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      )}
      {/* Only render the button if additional projects haven't been loaded yet */}
      {!additionalProjectsLoaded && (
        <div className="flex justify-center w-full mt-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md" onClick={loadMoreProjects}>
            Load More Projects
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
    <Layout>

        <section className="py-32 bg-slate-0">
        <Services/>   
        </section>
        <section className=" h-[120vh] bg-white py-32 mb-0 bg-slate-50">
          <CardStack />
        </section>

        {/* <section className="">
          <BGAnimation />
        </section> */}

        <section className="bg-slate-0">
          <Faq />
        </section>


      <ContactSection />

{/* projects */}
      

<ButtonUp />
</Layout>
    </>
  )
}