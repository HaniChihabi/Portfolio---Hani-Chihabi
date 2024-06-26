// File: CardStackDemo.tsx
"use Client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";

const useResponsiveWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial setup

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width;
};

const CARDS = [
  {
    id: 0,
    name: "Said Chihabi",
    designation: "Software engineer, ITL",
    imageSrc: "/pp1.jpg",
    contentKey: "cardContentJohnSmith",
  },
  {
    id: 1,
    name: "Jonas Fesehazion",
    designation: "Mitstudierender von Hani",
    imageSrc: "/pp2.jpg",
    contentKey: "cardContentAliceJohnson",
  },
  {
    id: 2,
    name: "Liza Shrestha",
    designation: "Diakovere, Assistenzkraft",
    imageSrc: "/pp3.jpg",
    contentKey: "cardContentMichaelTurner",
  },
  {
    id: 3,
    name: "Aron Coker",
    designation: "Praktikant bei ",
    imageSrc: "/pp5.jpg",
    contentKey: "cardContentEmilyCarter",
  },
  {
    id: 4,
    name: "Robert Backhaus",
    designation: "Schüler, IGS Linden",
    imageSrc: "/pp4.jpg",
    contentKey: "cardContentDavidLee",
  }
];

export const CardStack = ({
  items,
  offset = 20, // Default vertical offset
  contentPadding = "30px", // Default content padding
}) => {
  const [cards, setCards] = useState(items);
  const t = useTranslations('Cards');
  const screenWidth = useResponsiveWidth();
  const isMobile = screenWidth < 768;
  const cardWidth = isMobile ? 290 : 390;
  const cardHeight = isMobile ? 380 : 480;
  const scaleFactor = isMobile ? 0.1 : 0.006; // Adjusted scale factor for mobile
  const horizontalOffset = isMobile ? 20 : 30; // Adjusted horizontal offset for mobile


  const handleClick = (clickedId) => {
    setCards((prevCards) => {
      const clickedIndex = prevCards.findIndex((card) => card.id === clickedId);
      const clickedCard = prevCards[clickedIndex];
      const remainingCards = [...prevCards.slice(0, clickedIndex), ...prevCards.slice(clickedIndex + 1)];
      return [...remainingCards, clickedCard];
    });
  };

  return (
    <FadeIn className="relative flex items-center justify-center h-auto w-auto ">
      <div className="flex justify-center" > {/* Apply the left shift here */}
        {cards.map((card, index) => (
          
          <motion.div
            key={card.id}
            className="absolute flex flex-col dark:bg-black bg-white rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] select-none"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              transform: `scale(${1 - index * scaleFactor}) translateX(${index * horizontalOffset}px)`,
              zIndex: cards.length - index,
              padding: contentPadding
            }}
            onClick={() => handleClick(card.id)}
            animate={{
              x: index * horizontalOffset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
          >
            <div 
      className="relative rounded-xl overflow-hidden"
      style={{
        width: isMobile ? '60px' : '80px', // Smaller width on mobile
        height: isMobile ? '60px' : '80px', // Smaller height on mobile
        marginBottom: isMobile ? '15px' : '20px',
      }}
    >
      <Image src={card.imageSrc} alt={card.name} layout="fill" className="rounded-xl mb-10" />
    </div>
            <div>
              <p className={`${isMobile ? 'text-base leading-tight' : 'text-xl leading-normal'} font-extralight `} style={{ fontWeight: 'normal', fontSize: '18px', marginTop: '10px' }} >{t(card.contentKey)}</p>
            </div>
            <div className="absolute bottom-10" style={{ bottom: isMobile ? '20px' : '20px' }}>
              <p className={`${isMobile ? 'text-sm' : 'text-lg'}`}>{card.name}</p>
              <p className={`text-sm ${isMobile ? 'text-sm leading-tight' : 'text-lg leading-normal'}`}  >{card.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
};

export default function CardStackDemo() {
  const t = useTranslations('rating');

  return (
    <FadeIn className="flex flex-col items-center justify-center w-full font-medium">
      <h1 className="text-5xl sm:text-7xl">{t('Text1')}</h1>
      <h1 className="text-5xl sm:text-7xl mb-20">{t('Text2')}</h1>
      <CardStack className="font-extralight" items={CARDS} />
    </FadeIn>
  );
}