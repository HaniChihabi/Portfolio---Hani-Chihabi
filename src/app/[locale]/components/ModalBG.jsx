"use client"

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ReactPlayer from "react-player";

export default function ModalComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
            //   <VideoApps/>
            let videosrc = "/BGRemoverVid.mp4";
  return (

    <>
      <Button className="h-7" onPress={onOpen}>Preview</Button>
      <Modal size="5xl" className="pt-10 bg-transparent" shadow='none' radius='none' isOpen={isOpen} isDismissable='true' hideCloseButton="false" backdrop="blur" onOpenChange={onOpenChange} isKeyboardDismissDisabled={true}>
        <ModalContent>
          
              <ModalBody>
                  <div className="relative pt-[150%] pb-[-50%]">
                    <ReactPlayer
                    url={videosrc}
                    playing={isOpen} // Control play state based on modal open state
                    controls={true}
                    light={false}
                    pip={false}
                    loop={true}
                    width="98%"
                    height="98%"
                    className='absolute top-0 left-0'
                    />
                </div>
                  </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
