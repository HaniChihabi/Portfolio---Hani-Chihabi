"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
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
    
    <div className="max-w-5xl mx-auto px-20">
    <div className="flex flex-col items-center justify-center w-full font-medium text-white">
      <h1 className="text-7xl">{t('Text1')}</h1> {/* Example usage of `t` */}
      <h1 className="text-7xl mb-10">{t('Text2')}</h1> {/* Example usage of `t` */}
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                className="absolute inset-0 h-full w-full bg-slate-300/[0.2] block rounded-3xl" // Adjust the background overlay to be lighter
                layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    filter: 'brightness(1.25)', // Increase the brightness when hovered
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    filter: 'brightness(1)', // Return to normal brightness on exit

                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-black text-white border border-gray-400 relative z-50 ">
            <div className="text-center relative z-50"> {/* Adjusted for text-center */}
                <div className="p-10">
                  <h4 className="text-zinc-100 text-6xl tracking-wide mt-4">
                  {t(project.titleKey)}
                  </h4>
                  <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {t(project.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

