import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import {FadeIn} from "./FadeIn";
import {Container} from "./Container";

const faqKeys = [
  {
    title: "faqTitle1",
    content: "faqContent1",
  },
  {
    title: "faqTitle2",
    content: "faqContent2",
  },
  {
    title: "faqTitle3",
    content: "faqContent3",
  },
  {
    title: "faqTitle4",
    content: "faqContent4",
  },
  {
    title: "faqTitle5",
    content: "faqContent5",
  },
  {
    title: "faqTitle6",
    content: "faqContent6",
  }
];

export default function FAQComponent() {
  const t = useTranslations("FAQs");

  return (
    <Container className="mx-auto w-full max-w-6xl px-0 sm:py-26 md:px-6 lg:px-8 ">
      <FadeIn className='text-center font-medium text-5xl sm:text-7xl pb-16'>
        <h1>{t('Text1')}</h1>
        <h1>{t('Text2')}</h1>
      </FadeIn>
      <FadeIn className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <div className="flex justify-center">
        
        </div>
        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
            title: "font-medium",
            trigger: "py-6",
            content: "pt-0 pb-6 text-base text-default-500",
          }}
          selectionMode="multiple"
          variant="splitted"
        >
          {faqKeys.map((faq, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={t(faq.title)}
            >
              {t(faq.content)}
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </Container>
  );
}
