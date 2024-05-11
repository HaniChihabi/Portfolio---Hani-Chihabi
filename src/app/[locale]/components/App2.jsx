import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Image from 'next/image'
import React from "react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import ReactPlayer from 'react-player';

export default function Card6() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Function to handle modal close
    const handleClose = () => {
        onClose();
    };

    // Function to handle modal open
    const handleOpen = () => {
        onOpen();
    };

    return (
        <main>
            <CardContainer className="inter-var">
                <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">
                    <CardItem translateZ="100" className="w-full mt-4" onClick={handleOpen}>
                        <Image
                            src="/newcaniballimage.png"
                            layout="intrinsic"
                            width={1000}
                            height={1000}
                            className="max-h-72 max-w-96 object-cover rounded-3xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
            <Modal isOpen={isOpen} onClose={handleClose} size="2xl" scrollBehavior="normal" placement="center" hideCloseButton={true}>
                <ModalContent>
                    <ModalBody className="flex flex-col items-center justify-start p-0 gap-0">
                        <section className="w-full relative flex-shrink-0 max-h">
                            <ReactPlayer
                                url="./PacmanVideo.mp4"
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                                style={{ maxWidth: "100%", maxHeight: "100%" }} // Add style to contain the video within its container
                            />
                        </section>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </main>
    )
}
