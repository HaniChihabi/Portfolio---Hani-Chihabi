"use client"
import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import Layout from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro'


function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}



function ContactDetails() {
  return (
    <FadeIn>
    
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email me
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'hanichihabih@gmail.com']
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  const intro = (
    <SectionIntro className='relative font-display top-10 left-0'

      title="Contact"
    />
  );
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    

    formData.append("access_key", "b4f2f349-72aa-480e-b625-78b24cc2aa24");

    const object = Object.fromEntries(formData);
  let errorMessage = '';

  // Checking for empty fields
  if (!object.name) errorMessage += 'Name is required. \n';
  if (!object.email) errorMessage += 'Email is required. \n';
  if (!object.company) errorMessage += 'Company is required. \n';
  if (!object.phone) errorMessage += 'Phone is required. \n';
  if (!object.message) errorMessage += 'Message is required. ';

  // Checking for valid email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (object.email && !emailRegex.test(object.email)) errorMessage += 'Email is not valid. ';

  // If there are errors, alert them and stop the form submission
  if (errorMessage) {
    alert(errorMessage);
    return;
  }
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: json,
      });

      const result = await response.json();
      if (result.success) {
          console.log(result);
          alert('Submission was successful!');
      } else {
          console.error(result);
          alert('Submission failed. Please try again.');
      }
  } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
  }
  
}
  return (
    <>
      <Layout intro={intro}>
        
      <Container className="mt-244 sm:mt-56 lg:mt-72">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 relative bottom-28">
        <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
          <ContactDetails />
        </div>
      </Container>
      </Layout>
    </>
  )
}
