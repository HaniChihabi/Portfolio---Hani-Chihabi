"use client"
import { useId } from 'react'
import Link from 'next/link'

import { Border } from '../components/Border'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'
import { PageIntro } from '../components/PageIntro'
import { SocialMedia } from '../components/SocialMedia'
import Layout from '../components/Layout';
import { SectionIntro } from '../components/SectionIntro'
import { useTranslations } from 'next-intl'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-40 pb-4 pt-12 text-m text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
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



export default function Contact() {
  const t = useTranslations("Contact")
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    

    formData.append("access_key", "b4f2f349-72aa-480e-b625-78b24cc2aa24");

    const object = Object.fromEntries(formData);
  let errorMessage = '';

  // Checking for empty fields
  if (!object.name) errorMessage += t("inquiriesError.Name") + "\n" ;
  if (!object.email) errorMessage += t("inquiriesError.Email") + "\n";
  if (!object.company) errorMessage += t("inquiriesError.Company") + "\n";
  if (!object.phone) errorMessage += t("inquiriesError.Phone") + "\n";
  if (!object.message) errorMessage += t("inquiriesError.Message") + "\n";

  // Checking for valid email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (object.email && !emailRegex.test(object.email)) errorMessage += t("inquiriesError.InvalidEmail");

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
      <Layout>
        
  <Container className="flex items-center justify-center min-h-screen">
  <div className="grid grid-cols-1 gap-x-8 gap-y-24 relative bottom-28 place-items-center">
        <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="text-7xl flex justify-center font-medium text-neutral-950 mb-10">
         {t("Work inquiries")}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t("inquiries.Name")} name="name" autoComplete="name" />
          <TextInput
            label={t("inquiries.Email")}
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label={t("inquiries.Phone")} type="tel" name="phone" autoComplete="tel" />
          <TextInput label={t("inquiries.Message")} name="message" />
          
        </div>
        <Button type="submit" className="mt-10">
          {t("Work together")}
        </Button>
      </form>
    </FadeIn>
        </div>
      </Container>
      </Layout>
    </>
  )
}
