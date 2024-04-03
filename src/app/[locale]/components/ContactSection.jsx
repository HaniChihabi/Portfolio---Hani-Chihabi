"use client"
import { useTranslations } from 'next-intl'
import { Button1 } from './Button1'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'
import { useState, useEffect } from 'react'


import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Image from 'next/image'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Contactpage from './Contactpage'

export function ContactSection() {
  useEffect(() => {
    const language = window.location.pathname.split('/')[1];
    setCurrentLanguage(language);
  }, []);
  const [currentLanguage, setCurrentLanguage] = useState('');
  
  const t = useTranslations("ContactButton")
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-28 sm:mx-0 sm:py-36 md:px-12 flex items-center justify-center relative top-10" >
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-white text-center">
              {t("Text")}
            </h2>
            <div className="mt-6 flex justify-center">
              <Button href={`/${currentLanguage}/contact`} onPress={onOpen} invert>
              {t("Contact")}
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="normal" placement='center'>
        <ModalContent>
          {(onClose) => (
            <>
              <section>
                <Contactpage />
              </section>
            </>
          )}
        </ModalContent>
      </Modal>
            </div>
          </div>
        </div>
      </FadeIn>
  )
}
