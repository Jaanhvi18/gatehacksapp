import Image from "next/image";
import { CiInstagram } from 'react-icons/ci';
import { SocialType } from "../_data/Social";



export default function Bottom({ Logo, SocialList }: { Logo: string, SocialList: SocialType[] }) {
    return (
        <div className='row justify-between px-4 py-4 bottom-0 w-full bg-[#1d242b]'>
            <div>
                <Image
                    src={Logo}
                    alt="bottom navbar logo"
                    width={200}
                    height={160}
                    className="w-12 h-12 m-6"
                    placeholder="blur"
                    blurDataURL={Logo}
                />
            </div>
            <div className='row items-start h-full py-6 max-md:col text-white'>
                {SocialList.map((social, i) => (
                    <a key={i} className="m-6 flex items-center" href={social.link} target="_blank" rel="noopener noreferrer">
                        <CiInstagram size={32} className='mr-2 text-[#cdff57]' />
                        {social.social}
                    </a>
                ))}
            </div>
        </div>
    )
}
