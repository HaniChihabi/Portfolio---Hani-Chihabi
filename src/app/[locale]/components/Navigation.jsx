import { usePathname } from "next/navigation";
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { Button } from './Button'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { GridPattern } from './GridPattern'
import { Logo, Logomark } from './Logo'
import { Offices } from './Offices'
import { SocialMedia } from './SocialMedia'
import { button } from '@nextui-org/react'
import 'animate.css';
import {useTranslations} from 'next-intl';
import { usePathname } from "next/navigation";


export default function Navigation() {
    useEffect(() => {
      const language = window.location.pathname.split('/')[1];
    setCurrentLanguage(language);
  }, []);
  
  const [currentLanguage, setCurrentLanguage] = useState('');
  const t = useTranslations('Navigation')
  
    return (
      <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
        <NavigationRow>
          <NavigationItem href={`/${currentLanguage}/work`} className="justify-start"><p>{t('My work')}</p></NavigationItem>
          <NavigationItem href={`/${currentLanguage}/contact`} className="justify-end"><p>Contact</p></NavigationItem>
        </NavigationRow>
        <NavigationRow>
          <NavigationItem href={`/${currentLanguage}/about`} className="justify-start"><p>About Me</p></NavigationItem>
          <SocialMedia className="relative right-0 top-0 text-xl" invert />
        </NavigationRow>
      </nav>
    )
  }
  function NavigationRow({ children }) {
  
    return (
      <div className="even:mt-px sm:bg-neutral-950">
        <Container>
           <div className="flex justify-between items-center">{children}</div>
         </Container>
      </div>
    )
  }
  
  function NavigationItem({ href, children, className }) {
    
    return (
      <Link
        href={href}
        className={`group relative isolate -mx-6 bg-neutral-950 w-1/2 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-neutral-800 sm:even:pl-16 flex items-center ${className}`}
      >
        {children}
        <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
      </Link>
    )
  }