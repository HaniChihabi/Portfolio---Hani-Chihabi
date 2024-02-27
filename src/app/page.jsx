import Image from 'next/image'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import imageMe from '@/images/me.jpeg'
import { Border } from '@/components/Border'
import { SocialMedia } from '@/components/SocialMedia'

import { loadCaseStudies } from '@/lib/mdx'
export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <section className="overflow-hidden">
        
      <FadeIn className='h-[1000px] flex flex-col lg:flex-row items-center justify-center overflow-hidden relative top-36'>
        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center lg:relative lg:bottom-40 sm:bottom-4 left-52 ml-5">
          <div className="max-w-sm md:max-w-3xl lg:max-w-3xl sm:text-center ">
          <h1 className="font-display font-extralight tracking-tight text-neutral-950 lg:text-7xl md:text-5xl sm:text-5xl">
              Hey, my name is 
            </h1>
            <h1 className="font-display font-normal tracking-normal text-neutral-950 lg:text-7xl md:text-6xl sm:text-6xl mb-10">
              Hani Chihabi
            </h1>
            <Border>
            <p className="font-display top-10 text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed lg:pb-0 sm:pb-8 font-light lg:text-4xl md:text-3xl sm:text-3xl relative">
            I am a passionate software developer, <br /> living in Germany. I build cool projects and<br />  .
            </p>
            <p className="font-display text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed  font-semibold lg:text-4xl md:text-3xl sm:text-3xl relative left-0 bottom-3 lg:pb-0 sm:pb-8">
            I focus on crafting effective solutions.
            </p></Border>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="lg:relative left-4 top-[153px] h-full w-full max-w-lg">   
          <div className='flex-1 lg:h-[355px] lg:w-[350px] sm:h-[250px] sm:w-[250px]  relative rounded-xl overflow-hidden'>
              <Image 
                src={imageMe} // Adjust the path to your image
                alt="A descriptive alt text"
                layout="fill"
                objectFit="cover" // This will cover the available space, similar to bg-cover
              />
            </div>
          </div>
        </div>
        <SocialMedia className="mt-6 absolute bottom-36" />
      </FadeIn>
      
      </section>
    </>
  )
}
