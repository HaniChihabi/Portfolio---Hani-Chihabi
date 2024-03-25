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
import {useTranslations} from 'next-intl';
import { GithubOutlined } from '@ant-design/icons'
import { CoolComp } from '../components/CoolComp'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import BGAnimation from "../components/BGAnimation";
import CardStack from "../components/CardStack";
import  Faq  from "../components/Faq";

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
  const t = useTranslations('work');
  return (
    <Container className='flex justify-center items-center cont-bold w-full h-[100vh]'>
      <div className='text-center font-medium text-7xl py-24'>
          <h1>A small selection</h1>
          <h1>of my work.</h1>
        </div>
      {/* Adjusted grid gap here */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-0'> 
      <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        {/* Repeat for the other cards */}
      </div>
    </Container>
  );
}



export default function Work() {
  const t = useTranslations('work')

  return (
    <>
    <Layout>

        <section className="py-32">
        <Services/>   
        </section>
        <section className=" h-[120vh] bg-slate-50 py-32 mb-20">
          <CardStack />
        </section>

        <section className="h-[1500vh]">
          <BGAnimation />
        </section>

        <section>
          <Faq />
        </section>


      <ContactSection />

{/* projects */}
      

<ButtonUp />
</Layout>
    </>
  )
}