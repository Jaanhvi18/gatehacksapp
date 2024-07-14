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
                        className="w-12 h-12"
                    />
                </div>
                {/* to change About section header */}
                <div className="col flex-1 max-md:flex-none max-md:mt-6 items-center justify-center">
                    <div className="col w-[90%]">
                        <p className="title justify-start mb-20 text-gray-800">About <span className="text-[#37c598]">Gate</span>Hacks</p>
                        <p className="text-lg">{data.firstParagraph}</p>
                        <br />
                        <p className="text-lg">{data.secondParagraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
