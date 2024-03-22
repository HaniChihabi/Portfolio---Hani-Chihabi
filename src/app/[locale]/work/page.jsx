"use client"
import React from "react";

import Image from 'next/image'
import { GridList, GridListItem } from '../components/GridList'
import { GridPattern } from '../components/GridPattern'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import imageLaptop from '../images/laptop.jpg'
import { List, ListItem } from '../components/List'
import imagePacman from '../images/pac2.jpg'
import imageCanIBall from '../images/caniball.jpg'
import imagePrayertimes from '../images/prayertimes.jpg'
import imageBg from '../images/Background.jpg'
import ModalPac from '../components/ModalPac'
import ModalBG from '../components/ModalBG'
import ModalCIB from '../components/ModalCIB'
import ModalPT from '../components/ModalPT'
import Layout from '../components/Layout';
import ButtonUp from '../components/ButtonUp'
import {useTranslations} from 'next-intl';
import { GithubOutlined } from '@ant-design/icons'
import { CoolComp } from '../components/CoolComp'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Card1 from "../components/Card1";
import CardStack from "../components/CardStack";

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
      <div className='text-center font-medium text-6xl py-24'>
          <h1>A small selection</h1>
          <h1>of my work.</h1>
        </div>
      {/* Adjusted grid gap here */}
      <div className='grid grid-cols-2 gap-x-4 gap-y-0'> 
      <Card1 />
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">        
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sushi1.jpg"
                height="1000"
                width="1000"
                className="h-72 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">        
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sushi1.jpg"
                height="1000"
                width="1000"
                className="h-72 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">        
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/sushi1.jpg"
                height="1000"
                width="1000"
                className="h-72 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* Repeat for the other cards */}
      </div>
    </Container>
  );
}

function Clients() {
  return (
    <>
    <CardStack />
    </>
  )
}



const team = [
  {
    title: '',
    people: [
      {
        name: 'Prayer Mauaqit',
        link: 'https://github.com/HaniChihabi/Prayer-Mauaqit', // Add your GitHub project URL here  
        videoURL: 'PT'     ,
        image: { src: imagePrayertimes },
      },
      {
        name: 'BG Remover',
        link: 'https://github.com/HaniChihabi/Backgroud-Remover', // Add your GitHub project URL here  
        videoURL: 'BG'     ,
        image: { src: imageBg },
      },
      {
        name: 'Pac-Man',   
        link: 'https://github.com/HaniChihabi/PacMan', // Add your GitHub project URL here  
        videoURL: 'Pacman'    ,
        image: { src: imagePacman },
      },
      {
        name: 'Can I Ball',
        link: 'https://github.com/HaniChihabi/CanIBall', // Add your GitHub project URL here  
        videoURL: 'CanIBall'     ,

        image: { src: imageCanIBall },
      },
      
      
      {
        name: 'Kathryn Murphy',
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'BG'     ,
        image: { src: imageLaptop },
      },
      {
        name: 'Whitney Francis',
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'BG'     ,
        image: { src: imageLaptop },
      }
    ],
  },
]

function Team() {
  
  return (
    <>
    <CoolComp />
    </>
  )
}


export default function Work() {
  const t = useTranslations('work')

  return (
    <>
    <Layout>

        <Services/> 

        <clients />
        

      <Values />



      <ContactSection />

{/* projects */}
      

<ButtonUp />
</Layout>
    </>
  )
}