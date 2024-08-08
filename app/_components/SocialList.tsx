import { SocialList } from '../_data/Social';

export default function SocialLinks() {
    return (
        <div id='social-links' className='page component'>
            <p className='title'>Follow Us</p>
            <div className='row items-start justify-evenly w-full'>
                {SocialList.map((social, i) => (
                    <div key={i} className='flex flex-col items-center max-md:mb-12 w-[30%] mx-3'>
                        <a href={social.link} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center'>
                            <p className='ml-2 text-xl font-bold text-[#994ef5]'>{social.social }</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
