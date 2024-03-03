"use client"

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ReactPlayer from "react-player";

export default function modal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
            //   <VideoApps/>
            let videosrc = "/squirrel.mp4";
  return (
    
    <>
      <Button className="h-7" onPress={onOpen}>Preview</Button>
      <Modal size="5xl" className="pt-10 bg-transparent" shadow='none' radius='none' isOpen={isOpen} isDismissable='true' hideCloseButton="false" backdrop="blur" onOpenChange={onOpenChange} isKeyboardDismissDisabled={true}>
        <ModalContent>
          
              <ModalBody>
                <div className="relative rounded-lg pt-[59.25%]">
                    <ReactPlayer
                    url={videosrc}
                    playing={isOpen} // Control play state based on modal open state
                    controls={false}
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
