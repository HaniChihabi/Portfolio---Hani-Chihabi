"use client"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Image from 'next/image'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Card2() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <main>
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">        
            <CardItem translateZ="100" className="w-full mt-4" onClick={onOpen}>
            <Image
              src="/sushipage.jpg"
              layout="intrinsic"
              width={1000}
              height={1000}
              className="h-72 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
            </CardItem>
          </CardBody>
        </CardContainer>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="normal" placement="top">
        <ModalContent>
          {(onClose) => (
            <>
            <ModalBody className="flex flex-col items-center justify-start p-0 gap-0">
        <section className="w-full h-[40vh] relative flex-shrink-0">
            <video
                className="w-full h-full object-cover rounded" // Adjust classes as needed
                controls // Provides play, pause, etc. controls
                autoPlay // Automatically start the video (optional)
                muted // Recommended if autoPlay is enabled
                loop // Loop the video
                >
                <source src="/public/BGRemoverVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </section>  
        </ModalBody>

        <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </main>
    )
}