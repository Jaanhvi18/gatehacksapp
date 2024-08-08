'use client';

import abtImg from '@/images/aboutImg.png';
import Image from "next/image";
import { useEffect } from 'react';
import { AboutType } from "../_data/About";

export default function About({ data }: { data: AboutType }) {
    useEffect(() => {
    }, []);

    return (
        <div id="about" className="page component">
            <div className="row">
                <div className="col flex-1 max-md:flex-none items-center justify-center w-[90%]">
                    <Image
                        src={abtImg}
                        alt="hackathon logo"
                        width={500}
                        height={500}
                        className="w-full h-auto max-w-md mx-auto" // Updated classes for responsive scaling
                    />
                </div>
                <div className="col flex-1 max-md:flex-none max-md:mt-6 items-center justify-center">
                    <div className="col w-[90%]">
                        <p className="title justify-start mb-8 text-gray-800"> {/* Adjusted mb-20 to mb-8 */}
                            About <span className="text-[#95f8dc] text-shadow-black">Gate</span>Hacks
                        </p>
                        <p className="text-lg text-shadow-black mb-4">{data.firstParagraph}</p> {/* Added mb-4 for spacing */}
                        <p className="text-lg text-shadow-black">{data.secondParagraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
