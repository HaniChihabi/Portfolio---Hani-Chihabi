// File: CardStackDemo.tsx
"use Client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export type Card = {
  id: number;
  name: string;
  designation: string;
  imageSrc: string; // Adding image source here
  contentKey: string; // Use keys for translation instead of direct content
};

// Adjusted CARDS array to use content keys
const CARDS: Card[] = [
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
  offset,
  scaleFactor,
  cardWidth,
  cardHeight,
  contentPadding
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  cardWidth?: number;
  cardHeight?: number;
  contentPadding?: string;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.006;
  const CARD_WIDTH = cardWidth || 450; // Default card width
  const CARD_HEIGHT = cardHeight || 560; // Default card height
  const CONTENT_PADDING = contentPadding || "40px"; // Default content padding

  const [cards, setCards] = useState<Card[]>(items);
  const t = useTranslations('Cards'); // Assuming your namespace for cards is 'Cards'

  const handleClick = (clickedId: number) => {
    setCards((prevCards) => {
      const clickedIndex = prevCards.findIndex((card) => card.id === clickedId);
      const clickedCard = prevCards[clickedIndex];
      const remainingCards = [...prevCards.slice(0, clickedIndex), ...prevCards.slice(clickedIndex + 1)];
      return [...remainingCards, clickedCard];
    });
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-60 w-60 md:h-80 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] select-none"
          style={{
            userSelect: 'none',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            top: index * CARD_OFFSET,
            transform: `translate(-50%, -50%) scale(${1 - index * SCALE_FACTOR})`,
            zIndex: cards.length - index,
            padding: CONTENT_PADDING
          }}
          onClick={() => handleClick(card.id)}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="relative h-20 w-20 bg-black rounded-xl mb-10">
          <Image src={card.imageSrc} alt={card.name} layout="fill" className="rounded-xl " />
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
  );
};

export default function CardStackDemo() {
  const t = useTranslations('rating'); // Assuming your namespace for the home page is 'HomePage'

  return (
    <div className="flex flex-col items-center justify-center w-full font-medium">
      <h1 className="text-7xl">{t('Text1')}</h1> {/* Example usage of `t` */}
      <h1 className="text-7xl mb-44">{t('Text2')}</h1> {/* Example usage of `t` */}
      <CardStack items={CARDS} />
    </div>
  );
}
