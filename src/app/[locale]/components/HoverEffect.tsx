"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";
import { Container } from "./Container";

export const projects = [
    {
      titleKey: "projectTitle1",
      descriptionKey: "projectDescription1",
      link: "https://algochurn.com",
    },
    {
      titleKey: "projectTitle2",
      descriptionKey: "projectDescription2",
      link: "https://algochurn.com",
    },
    {
        titleKey: "projectTitle3",
        descriptionKey: "projectDescription3",
        link: "https://algochurn.com",
    },
    {
        titleKey: "projectTitle4",
        descriptionKey: "projectDescription4",
        link: "https://algochurn.com",
    },
    // Add other projects with their respective i18n keys
  ];

  export const HoverEffect = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const t = useTranslations("approach");
  
    return (
      <Container className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted padding based on screen size */}
        <FadeIn className="flex flex-col items-center justify-center w-full font-medium text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('Text1')}</h1> {/* Responsive font size */}
          <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t('Text2')}</h1>
        </FadeIn>
        <FadeIn className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          {projects.map((project, idx) => (
            <div
              key={project?.link}
              className="group block p-2 relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 bg-slate-300/[0.2] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl overflow-hidden bg-black text-white border border-gray-600 relative z-50 p-4">
                <h4 className="text-xl md:text-3xl lg:text-4xl text-white text-center">
                  {t(project.titleKey)}
                </h4>
                <p className="mt-2 text-sm md:text-base text-gray-400 text-center">
                  {t(project.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>
      </Container>
    );
  };
  