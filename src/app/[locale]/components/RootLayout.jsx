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
import { Button } from './Button1'
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
import LanguageButton from './LanguageButton'

const RootLayoutContext = createContext(null)

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="select-none w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="select-none w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}


function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}) {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    if (!expanded) {
      // Start the shake animation with a delay of 1 second
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          setIsShaking(prev => !prev);
        }, 2000); // Toggle the isShaking state every 2 seconds
      }, 1000); // Delay of 1 second before the interval starts
    }

    return () => {
      clearInterval(interval); // Clear interval when the component unmounts or expanded changes
      clearTimeout(timeout); // Clear timeout when the component unmounts or expanded changes
    };
  }, [expanded]); // Re-run effect when expanded changes

  const hcLogoClass = clsx(
    'font-bold text-2xl sm:text-4xl z-50 transition duration-300 ease-in-out transform hover:scale-105', // Correct transition usage
    {
      'text-black': !expanded,
      'text-white': expanded,
    }
  );
  
  
  // Updated Globe definition
  const globeClasses = clsx(
    'font-bold text-4xl z-50 transition-all duration-300 ease-in-out transform hover:scale-105', // Basic classes
    {
      'text-black': !expanded, // Color when menu is not expanded
      'text-white': expanded, // Color when menu is expanded
      'fade-in scale-up': expanded, // Apply animation classes when expanded
    }
  );

  useEffect(() => {
    const language = window.location.pathname.split('/')[1];
    setCurrentLanguage(language);
}, []);


const [currentLanguage, setCurrentLanguage] = useState('');

  return (
    <Container className="select-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href={`/${currentLanguage}`}
            aria-label="Home"
            className={hcLogoClass}
          >
            HC
          </Link>
        </div>
        <div className="flex items-center">
          {!expanded&&(
            <div className={""}>
              <LanguageButton className={globeClasses} />
            </div>)}
            
            
          <button
            ref={toggleRef}
            type="button"
            onClick={() => onToggle()}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition animate__animated',
              expanded ? 'bg-transparent' : 'bg-black',
              { 'animate__shakeX': isShaking && !expanded },
              'text-white',
            )}
            aria-label="Toggle navigation"
          >
            <Icon className={clsx('h-4 w-4 sm:h-6 sm:w-6', invert ? 'fill-white' : 'fill-white')} />
          </button>
        </div>
      </div>
    </Container>
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
  const hoverEffectClasses = "transition-transform duration-300 ease-in-out transform hover:scale-110";

  return (
    <Link
      href={href}
      passHref
      className={`group relative isolate -mx-6 w-1/2 px-6 py-8 sm:py-16 even:mt-px sm:mx-0 sm:px-0 sm:odd:pr-16 sm:even:mt-0  sm:even:pl-16 flex items-center ${className}`}
    >
            <div className={hoverEffectClasses}>
      {children}
      </div>
      <span className="absolute inset-y-0 -z-10 bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  useEffect(() => {
    const language = window.location.pathname.split('/')[1];
    setCurrentLanguage(language);
}, []);

const [currentLanguage, setCurrentLanguage] = useState('');
const t = useTranslations('Navigation')

  return (
    <nav className="mt-px font-display text-2xl sm:text-4xl font-medium tracking-tight text-white bg-black">
      <NavigationRow>
        <NavigationItem href={`/${currentLanguage}//#work`} className="justify-start"><p>{t('My Work')}</p></NavigationItem>
        <NavigationItem href={`/${currentLanguage}//#contact`} className="justify-end"><p>{t('Contact')}</p></NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={`/${currentLanguage}/about`} className="justify-start"><p>{t('About Me')}</p></NavigationItem>
      </NavigationRow>
    </nav>
  )
}


function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()
  const t = useTranslations('home');

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-8 pt-8 sm:pb-14 sm:pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
              
            </div>
            <Navigation />
            
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)
  

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}