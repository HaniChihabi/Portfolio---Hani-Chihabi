import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import imageMe from '@/images/me.jpeg'
import { DownCircleOutlined } from '@ant-design/icons';
import { Footer } from '@/components/Footer'



import { loadCaseStudies } from '@/lib/mdx'
const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <section className="overflow-hidden">
      <FadeIn className='h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden relative top-20'>
        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center relative bottom-48 left-44 ml-5">
          <div className="max-w-3xl">
          <h1 className="font-display text-9xl font-extralight tracking-tight text-neutral-950 sm:text-7xl">
              Hey, my name is 
            </h1>
            <h1 className="font-display text-9xl font-normal tracking-normal text-neutral-950 sm:text-7xl mb-10 text-center">
              Hani Chihabi
            </h1>
            <p className="font-display relative top-10 text-4xl text-neutral-600 leading-relaxed font-light relative left-10">
            I am a passionate software developer, <br /> living in Germany. I build cool projects and<br />  .
            </p>
            <p className="font-display text-4xl text-neutral-600 leading-relaxed font-semibold relative left-28 bottom-3">
            I focus on crafting effective solutions.
            </p>
            {/* <DownCircleOutlined className='text-[80px] text-center relative left-64 top-20 text-slate-400 hover:text-black'/> */}
            {/* <button className="px-4 py-2 rounded-md border font-display font-light border-black bg-white text-neutarl-700 text-4xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 relative left-[100px] top-[50px] " >Sketch</button> */}
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="relative right-8 top-32 h-full w-full max-w-lg">   
          <div className='flex-1 h-[600px] w-[400px] relative rounded-2xl overflow-hidden'>
              <Image 
                src={imageMe} // Adjust the path to your image
                alt="A descriptive alt text"
                layout="fill"
                objectFit="cover" // This will cover the available space, similar to bg-cover
              />
            </div>
          </div>
        </div>
      </FadeIn>
      </section>

{/* 
      <Testimonial className=" relative bottom-64"
        
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}


    </>
  )
}
