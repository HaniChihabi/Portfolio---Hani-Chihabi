// File: CardStackDemo.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const CARDS: Card[] = [
  {
    id: 0,
    name: "John Smith",
    designation: "CEO, Smith Enterprises",
    content: (
      <div>
        <div className="flex items-center">
          <div className="relative w-20 h-20 mr-4 mb-10">
            <Image
              src="/pp1.jpg"
              alt="John Smith"
              layout="fill"
              
              className="rounded-xl"
            />
          </div>
        </div>
        <p className="text-2xl mb-20">
          The website exceeded our expectations. The design is elegant,
          functionality seamless, and the user experience unparalleled. Great job!
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Marketing Director, Johnson Co.",
    content: (
      <div>
        <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-10">
            <Image
              src="/pp2.jpg"
              alt="Alice Johnson"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <p className="text-2xl leading-9 font-normal">
          Your website design skills are exceptional. It looks stunning and functions flawlessly. Thank you!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Michael Brown",
    designation: "CTO, Brown Innovations",
    content: (
      <div>
        <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-10">
            <Image
              src="/pp3.jpg"
              alt="Michael Brown"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <p className="text-2xl">
          The website you developed for our company is outstanding. It has streamlined our processes and captivated our audience. Thank you!
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Emily Wilson",
    designation: "Founder, Wilson Creations",
    content: (
      <div>
        <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-10">
            <Image
              src="/pp4.jpg"
              alt="Emily Wilson"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <p className="text-2xl leading-9">
          Your expertise in website development is remarkable. The website captures our brand identity perfectly. Thank you!
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "David Lee",
    designation: "Director of Operations, Lee Corp",
    content: (
      <div>
        <div className="flex items-center justify-between">
        <div className="relative w-20 h-20 mr-4 mb-10">
            <Image
              src="/pp5.jpg"
              alt="David Lee"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
        <p className="text-2xl leading-9">
          Working with you on our website project has been a pleasure. The website delivered has exceeded our expectations. Thank you!
        </p>
      </div>
    ),
  },
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
  const CONTENT_PADDING = contentPadding || "30px"; // Default content padding

  const [cards, setCards] = useState<Card[]>(items);

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
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-80 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between select-none"
            style={{
              userSelect: 'none', // Add this line
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              top: index * CARD_OFFSET,
              transform: `translate(-50%, -50%) scale(${
                1 - index * SCALE_FACTOR
              })`,
              zIndex: cards.length - index,
            }}
            onClick={() => handleClick(card.id)} // Updated onClick handler
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 "
              style={{ padding: CONTENT_PADDING }}
            >
              <div >
                {card.content}
              </div>
              <div className="absolute bottom-7">
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function CardStackDemo() {
  const t = useTranslations('rating');
  return (
    <div className="flex flex-col items-center justify-center w-full font-medium">
      <h1 className="text-7xl">{t('Text1')}</h1>
      <h1 className="text-7xl mb-40 text-center">{t('Text2')}</h1>
      <CardStack items={CARDS} />
    </div>
  );
}
