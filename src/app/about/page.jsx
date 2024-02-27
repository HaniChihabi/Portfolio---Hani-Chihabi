
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import imageLaptop from '@/images/laptop.jpg'
import { StylizedImage } from '@/components/StylizedImage'
import { Blockquote } from '@/components/Blockquote'
import imageBasketball from '@/images/basketball.jpg'
import imageCar from '@/images/car.jpeg'
import Layout from '@/components/Layout';

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
      </blockquote>    </div>
  )
}

function Discover() {
  return (
    
    <Section className='text-2xl' title=" My name is Hani" image={{ src: imageCar }}>
      <div className="space-y-6 text-neutral-600 text-xl">
      <p>
          I'm 22 years old and currently living in Germany. My passion for learning drives me every day.
        </p>
        <p>
          My goal is simple: to become the best version of myself, exploring new horizons both personally and professionally.
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
  return (
    <Section title="Basketball - My Therapy" image={{ src: imageBasketball, shape: 1 }}>
      <div className="space-y-6 text-neutral-600 text-xl">
        <p>
        For me, basketball is more than just a sport; it's a form of therapy. Playing outside every day, I find peace and balance that helps me navigate life's ups and downs. The court is where I clear my mind and rejuvenate my spirit.

        </p>
        <p>
        Each game is a lesson in teamwork, perseverance, and pushing beyond limits. Whether it's a friendly match or a solo practice, basketball has been a constant source of joy and a testament to the power of dedication.

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
  return (
    <Section title="Software Development Journey" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-xl text-neutral-600">
        <p>
        Software development has been an exhilarating journey for me. From the thrill of building new projects to the collaboration with talented peers, each aspect has enriched my experience in the tech world.

        </p>
        <p>
        My laptop is my gateway to creation. It accompanies me everywhere - from cozy cafes to serene green spaces and even on vacations. This mobility allows me to draw inspiration from various environments, keeping my work fresh and innovative.

        </p>
        <p>
        Engaging in software development has not just been about coding; it's about bringing ideas to life, solving real-world problems, and making an impact through technology.

        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Welcome to my journey
      </h3> */}
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export default async function About() {
  const intro = (
    <SectionIntro className='relative font-display top-10 left-0'
      title="About Me"
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
      </Layout>
    </>
  )
}
