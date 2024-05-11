
import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { View } from "@nextui-org/react";   

export default function AboutMeModal({ isOpen, onClose }) {
    return (
        <View>
        <Button onClick={onClose}>Close</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="md" scrollBehavior="normal" placement="center" hideCloseButton={true}>
            <ModalContent>
                <ModalBody className="flex flex-col items-center justify-start p-0 gap-0">
                    <section className="w-full relative flex-shrink-0 max-h">
                        
                    </section>
                </ModalBody>
            </ModalContent>
        </Modal>
        </View>
    );
}
