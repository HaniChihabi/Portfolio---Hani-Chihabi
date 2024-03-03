
import Image from 'next/image'

import { GridList, GridListItem } from '../components/GridList'
import { GridPattern } from '../components/GridPattern'
import { Blockquote } from '../components/Blockquote'
import { Border } from '../components/Border'
import { Button } from '../components/Button'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { formatDate } from '../lib/formatDate'
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

import Layout from '../components/Layout';
import ButtonUp from '../components/ButtonUp'
import {useTranslations} from 'next-intl';
import VideoPlayer from "../components/VideoPlayer";
import { Modal } from '@nextui-org/react'



function Values() {
  const t = useTranslations('Me')

  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-48 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
      eyebrow="Projects"
        title="My work brings:"
      >
      </SectionIntro>

      <Container className="mt-16">
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
  const t = useTranslations('work')
  return (
    <>
      <Container className="mt-40">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[40rem]">
              
            <VideoPlayer />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4 text-2xl">
            <ListItem    title={t('sec1.title')} className="text-xl p-4">
              {t('sec1.text')}
            </ListItem>
            <ListItem    title={t('sec2.title')} className="text-xl p-4">
              {t('sec2.text')}
            </ListItem>
            <ListItem    title={t('sec3.title')} className="text-xl p-4">
              {t('sec3.text')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

const team = [
  {
    title: '',
    people: [
      {
        name: 'Pac-Man',   
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'Pacman'    ,
        image: { src: imagePacman },
      },
      {
        name: 'Can I Ball',
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'BG'     ,

        image: { src: imageCanIBall },
      },
      {
        name: 'Prayer Mauaqit',
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'BG'     ,
        image: { src: imagePrayertimes },
      },
      {
        name: 'Blake Reid',
        link: 'https://github.com/HaniChihabi/studio-js', // Add your GitHub project URL here  
        videoURL: 'BG'     ,
        image: { src: imageBg },
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
    <Container className="mt-16 sm:mt-32 lg:mt-0 mb-10" >
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            {/* <Border as={FadeIn} /> */}
            <FadeIn />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-40 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-4">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            
                            {person.link && (
  <div className="flex items-center justify-between mt-2"> {/* Adjust space-x-4 to control spacing */}
    <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
    <div>   
      
    <a href={person.link} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline">
      View Code
    </a>                     
    {person.videoURL === 'Pacman' && (
      <ModalPac />
    )}
    {person.videoURL === 'BG' && (
      <ModalBG />
    )}
    </div>
  </div>
)}
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}


export default function Work() {
  const t = useTranslations('work')
  const intro = (
    <SectionIntro className='relative font-display top-10 left-0'
      title={t('header')}
    />
  );

  return (
    <>
    <Layout intro={intro}>

      <Services />   

      <Values />
              <Team />



      <ContactSection />

{/* projects */}
      

<ButtonUp />
</Layout>
    </>
  )
}