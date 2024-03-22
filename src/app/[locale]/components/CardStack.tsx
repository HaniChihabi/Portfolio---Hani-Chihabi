"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "../utils/cn";
import {Container} from "./Container";
import Image from "next/image";
export default function CardStackDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full font-medium">
      <h1 className="text-7xl">What our clients</h1>
      <h1 className="text-7xl mb-40 text-center">are saying</h1>
      <CardStack items={CARDS} />
    </div>
  );
}


// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <div>
      <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-5">
          <Image
            src="/sushi1.jpg"
            alt="Manu Arora"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p></div>
    ),
  },
  {
    id: 1,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <div>
      <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-5">
          <Image
            src="/sushi1.jpg"
            alt="Manu Arora"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p></div>
    ),
  },
  {
    id: 2,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <div>
      <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-5">
          <Image
            src="/sushi1.jpg"
            alt="Manu Arora"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p></div>
    ),
  },
  {
    id: 3,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <div>
      <div className="flex items-center">
        <div className="relative w-20 h-20 mr-4 mb-5">
          <Image
            src="/sushi1.jpg"
            alt="Manu Arora"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p></div>
    ),
  },
  
];
