import { useTranslations } from 'next-intl'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'

export function ContactSection() {
  const t = useTranslations("ContactButton")
  return (
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 flex items-center justify-center relative top-10" >
        <div   className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white text-center sm:text-4xl">
              {t("Text")}
            </h2>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" invert>
              {t("Contact")}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
  )
}
