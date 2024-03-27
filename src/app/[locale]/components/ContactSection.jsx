import { useTranslations } from 'next-intl'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'
import { useState, useEffect } from 'react'

export function ContactSection() {
  useEffect(() => {
    const language = window.location.pathname.split('/')[1];
    setCurrentLanguage(language);
  }, []);
  const [currentLanguage, setCurrentLanguage] = useState('');
  
  const t = useTranslations("ContactButton")
  return (
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-28 sm:mx-0 sm:py-36 md:px-12 flex items-center justify-center relative top-10" >
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display font-medium text-4xl text-white text-center">
              {t("Text")}
            </h2>
            <div className="mt-6 flex justify-center">
              <Button href={`/${currentLanguage}/contact`} invert>
              {t("Contact")}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
  )
}
