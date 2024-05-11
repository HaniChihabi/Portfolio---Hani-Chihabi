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
    name: "John Smith",
    designation: "CEO, Smith Enterprises",
    imageSrc: "/pp1.jpg",
    contentKey: "cardContentJohnSmith",
  },
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Marketing Director, Johnson Co.",
    imageSrc: "/pp2.jpg",
    contentKey: "cardContentAliceJohnson",
  },
  {
    id: 2,
    name: "Michael Turner",
    designation: "CTO, Turner Innovations",
    imageSrc: "/pp3.jpg",
    contentKey: "cardContentMichaelTurner",
  },
  {
    id: 3,
    name: "Emily Carter",
    designation: "Founder, Carter Designs",
    imageSrc: "/pp4.jpg",
    contentKey: "cardContentEmilyCarter",
  },
  {
    id: 4,
    name: "David Lee",
    designation: "Director of Operations, Lee Corp",
    imageSrc: "/pp5.jpg",
    contentKey: "cardContentDavidLee",
  }
];

export const CardStack = ({
  items,
  offset = 20, // Default vertical offset
  contentPadding = "60px", // Default content padding
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
            className="absolute flex flex-col justify-between dark:bg-black bg-white rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] select-none"
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
      <Image src={card.imageSrc} alt={card.name} layout="fill" className="rounded-xl" />
    </div>
            <div>
              <p className={`${isMobile ? 'text-base leading-tight' : 'text-xl leading-normal'} `} style={{ fontWeight: 'normal' }} >{t(card.contentKey)}</p>
            </div>
            <div style={{ bottom: isMobile ? '20px' : '20px' }}>
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
      <CardStack items={CARDS} />
    </FadeIn>
  );
}