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
    name: "John Smith",
    designation: "CEO, Smith Enterprises",
    content: (
      <div>
        <div className="flex items-center">
          <div className="relative w-20 h-20 mr-4 mb-5">
            <Image
              src="/sushi1.jpg"
              alt="John Smith"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div>
            <h1>John Smith</h1>
            <h2>CEO, Smith Enterprises</h2>
          </div>
        </div>
        <p>
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
          <div className="relative w-20 h-20 mr-4 mb-5">
            <Image
              src="/sushi1.jpg"
              alt="Alice Johnson"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div>
            <h1>Alice Johnson</h1>
            <h2>Marketing Director, Johnson Co.</h2>
          </div>
        </div>
        <p>
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
          <div className="relative w-20 h-20 mr-4 mb-5">
            <Image
              src="/sushi1.jpg"
              alt="Michael Brown"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div>
            <h1>Michael Brown</h1>
            <h2>CTO, Brown Innovations</h2>
          </div>
        </div>
        <p>
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
          <div className="relative w-20 h-20 mr-4 mb-5">
            <Image
              src="/sushi1.jpg"
              alt="Emily Wilson"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div>
            <h1>Emily Wilson</h1>
            <h2>Founder, Wilson Creations</h2>
          </div>
        </div>
        <p>
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
        <div className="flex items-center">
          <div className="relative w-20 h-20 mr-4 mb-5">
            <Image
              src="/sushi1.jpg"
              alt="David Lee"
              layout="fill"
              className="rounded-xl"
            />
          </div>
          <div>
            <h1>David Lee</h1>
            <h2>Director of Operations, Lee Corp</h2>
          </div>
        </div>
        <p>
          Working with you on our website project has been a pleasure. The website delivered has exceeded our expectations. Thank you!
        </p>
      </div>
    ),
  },
];

