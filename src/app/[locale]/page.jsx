import Image from 'next/image'
import { FadeIn, FadeInStagger } from '../../components/FadeIn'
import imageMe from '../../images/kolnn.jpeg'
import { Border } from '../../components/Border'
import { SocialMedia } from '../../components/SocialMedia'

export default async function Home() {

  return (
    <>
      <section className="overflow-hidden">
        
      <FadeIn className='h-[1000px] block lg:flex-row items-center justify-center overflow-hidden relative top-48'>
        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center ml-5">
          <div className="max-w-sm md:max-w-3xl lg:max-w-3xl sm:text-center ">
          <h1 className="font-display font-extralight tracking-tight text-neutral-950 lg:text-6xl md:text-5xl sm:text-5xl">
              Hey, my name is 
            </h1>
            <h1 className="font-display font-normal tracking-normal text-neutral-950 lg:text-7xl md:text-6xl sm:text-6xl mb-0">
              Hani Chihabi
            </h1>
           
            <p className="font-display top-10 text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed lg:pb-0 sm:pb-8 font-light lg:text-4xl md:text-3xl sm:text-3xl relative">
            I am a passionate software developer, <br /> living in Germany. I build cool projects and<br />  .
            </p>
            <p className="font-display text-neutral-600 lg:leading-relaxed md:leading-relaxed sm:leading-relaxed  font-semibold lg:text-4xl md:text-3xl sm:text-3xl relative left-0 bottom-3 lg:pb-0 sm:pb-8">
            I focus on crafting effective solutions.
            </p>
          </div>
        </div>

       {/* Image Container */}
       <div className="flex-1 flex items-center justify-center">
  <div className="h-full w-full max-w-lg flex justify-center items-center">
    <div className='h-[200px] w-[200px] relative rounded-4xl overflow-hidden mt-8'>
      <Image 
        src={imageMe}
        alt="A descriptive alt text"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
</div>
<div className="w-full flex justify-center mt-6">
            <SocialMedia />
          </div>      </FadeIn>
      
      </section>
    </>
  )
}
