import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";
import { useTranslations } from 'next-intl';
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const t = useTranslations('Modal');

  return (
    <>
        <div className=" text-3xl hover:scale-110 transition-transform duration-300 p-5 bg-slate-100 rounded-2xl" onClick={onOpen}>
        {t("Text1")}       
      </div>
      <Modal className="py-10 px-5" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{t("Text1")}</ModalHeader>
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
