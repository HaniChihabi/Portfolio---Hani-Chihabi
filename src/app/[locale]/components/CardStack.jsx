// File: CardStackDemo.tsx
"use Client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";

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
  horizontalOffset = 30, // Additional horizontal offset for the fanning effect
  scaleFactor = 0.006,
  cardWidth = 400, // Default card width
  cardHeight = 560, // Default card height
  contentPadding = "40px", // Default content padding
  leftShift = 260, // New: Amount to shift the card stack to the left
}) => {
  const [cards, setCards] = useState(items);
  const t = useTranslations('Cards');

  const handleClick = (clickedId) => {
    setCards((prevCards) => {
      const clickedIndex = prevCards.findIndex((card) => card.id === clickedId);
      const clickedCard = prevCards[clickedIndex];
      const remainingCards = [...prevCards.slice(0, clickedIndex), ...prevCards.slice(clickedIndex + 1)];
      return [...remainingCards, clickedCard];
    });
  };

  return (
    <FadeIn className="relative flex items-center justify-center h-auto w-auto">
      <div style={{ transform: `translateX(-${leftShift}px)` }}> {/* Apply the left shift here */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] select-none"
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
            <div className="relative h-20 w-20 rounded-xl mb-10 overflow-hidden">
              <Image src={card.imageSrc} alt={card.name} layout="fill" className="rounded-xl" />
            </div>
            <div>
              <p className="text-xl font-normal">{t(card.contentKey)}</p>
            </div>
            <div className="absolute bottom-10">
              <p>{card.name}</p>
              <p>{card.designation}</p>
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
      <h1 className="text-7xl">{t('Text1')}</h1>
      <h1 className="text-7xl mb-20">{t('Text2')}</h1>
      <CardStack items={CARDS} />
    </FadeIn>
  );
}