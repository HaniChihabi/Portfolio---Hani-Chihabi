import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link"; // Ensure you've imported Link from next/link
import Image from 'next/image';
import React from "react";

export default function CasperaAO() {
    return (
        <main>
            <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-3">        
                    {/* Use the Link component to wrap the clickable area */}
                    <Link href="https://hanichihabi-casperai.vercel.app" passHref>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="/screen12.jpg"
                                    layout="intrinsic"
                                    width={1000}
                                    height={1000}
                                    className="max-h-80 max-w-96 object-cover rounded-3xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                    </Link>
                </CardBody>
            </CardContainer>
        </main>
    )
}
