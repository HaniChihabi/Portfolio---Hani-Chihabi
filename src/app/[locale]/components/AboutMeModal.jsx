import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";
import { useTranslations } from 'next-intl';
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const t = useTranslations('Modal');

  return (
    <>
        <div className=" text-5xl hover:scale-125 cursor-pointer transition-transform duration-300 p-0 bg-slate-0 rounded-2xl font-display" onClick={onOpen}>
        {t("Text1")}       
      </div>
      <Modal className="py-10 px-5" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-display text-center"><h1 className="font-display">{t("Text1")}</h1></ModalHeader>
              <ModalBody className="font-light">
                <p> 
                {t("Text2")}
                </p>
                <p>
                {t("Text3")}
                </p>
                <p>
                {t("Text4")}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
