"use client";
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import imageMe from '../images/kolnn.jpeg';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import AboutMeModal from './AboutMeModal';

export default function Mainpage() {
  const t = useTranslations('home');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <FadeIn className="flex flex-col items-center justify-center h-[90vh] w-full p-4 lg:p-0 relative bottom-10">
      {/* Image Container */}
      <div className="relative h-40 w-40 lg:h-[200px] lg:w-[200px] mb-7 rounded-xl overflow-hidden">
        <Image 
          src={imageMe}
          alt="A descriptive alt text"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Container */}
      <div className="text-center w-full px-4 lg:px-0">
        <h1 className="font-semibold text-4xl lg:text-xl text-neutral-950 mb-4">
          {t('header2')}
        </h1>
      </div>

      {/* About Me Modal Trigger */}
      <div className="mt-0 flex justify-center">
              <AboutMeModal />
          </div>
    </FadeIn>
  );
}
