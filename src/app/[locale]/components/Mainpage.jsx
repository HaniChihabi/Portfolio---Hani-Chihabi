"use client"
import Image from 'next/image'
import { FadeIn, FadeInStagger } from './FadeIn'
import imageMe from '../images/kolnn.jpeg'
import React from 'react';
import {useTranslations} from 'next-intl';
import { Container } from './Container'
import AboutMeModal from './AboutMeModal';
import react, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { View } from "@nextui-org/react";


export default function Mainpage() {
    const t = useTranslations('home');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const onClose = () => setIsOpen(false);
    return (
        <FadeIn className="flex h-[90vh] lg:flex-row items-center justify-center w-full p-4 lg:p-0">
          {/* Content Container */}
          <div className='block relative bottom-20'>

            {/* Image Container */}
          <div className="flex flex-1 items-center justify-center">
            <div className='mt-4 lg:mt-0 h-40 w-40 lg:h-[200px] lg:w-[200px] mb-7 relative rounded-xl overflow-hidden'>
              <Image 
                src={imageMe}
                alt="A descriptive alt text"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center lg:ml-5">
            <div className="text-center w-full px-4 lg:px-0">
              <h1 className="font-display text-4xl lg:text-5xl text-neutral-950 mb-4 lg:mb-0">
                {t('header2')}
              </h1>
               {/* <p className="text-neutral-600 text-sm lg:text-xl leading-relaxed mt-2 mb-0">
                {t('intro1')}
              </p> */}
            </div>
          </div>
          

          
          <div className="mt-4 flex justify-center">
              <AboutMeModal />
          </div>
          
          </div>
        </FadeIn>
    );
  }
  