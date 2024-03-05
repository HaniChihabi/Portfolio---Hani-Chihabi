import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { SectionIntro } from '../components/SectionIntro'
import imageLaptop from '../images/laptop.jpg'
import { StylizedImage } from '../components/StylizedImage'
import { Blockquote } from '../components/Blockquote'
import imageBasketball from '../images/basketball.jpg'
import imageCar from '../images/car.jpeg'
import Layout from '../components/Layout';
import ButtonUp from '../components/ButtonUp'
import {useTranslations} from 'next-intl';

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">      
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32 relative top-10">
      <blockquote className="relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
        <p className="flex justify-center sm:before:absolute sm:before:right-full text-white mb-10">
          Welcome to my journey
        </p>
      </blockquote>
    </div>
  )
}

function Discover() {
  const t = useTranslations('Me')

  return (
    
    <Section className='text-2xl' title={t('title')} image={{ src: imageCar }}>
      <div className="space-y-6 text-neutral-600 text-l">
      <p>
          {t('text1')}
        </p>
        <p>
        {t('text2')}
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function Build() {
  const t = useTranslations('Basketball')
  return (
    <Section title={t('title')} image={{ src: imageBasketball, shape: 1 }}>
      <div className="space-y-6 text-neutral-600 text-l">
        <p>
          {t('text1')}
        </p>
        <p>
          {t('text2')}
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  const t = useTranslations('Coding')
  return (
    <Section title={t('title')} image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-l text-neutral-600">
        <p>
          {t('text1')}
        </p>
        <p>
          {t('text2')}

        </p>
        <p>
          {t('text3')}
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Welcome to my journey
      </h3> */}
    </Section>
  )
}


export default function About() {
  const t = useTranslations('AboutMeTitle')
  const intro = (
    <SectionIntro className='relative font-display top-10 left-0'
      title={t('AboutMeTitle')}
      subtitle="Learn more about our mission and values."
    />
  );
  return (
    <>
    
      <Layout intro={intro}>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-32 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      <Culture />
      <ButtonUp />
      </Layout>
    </>
  )
}
