import img1 from '@/images/img1.png';
import img2 from '@/images/img2.png';
import img3 from '@/images/img3.png';
import img4 from '@/images/img4.png';
import Image from 'next/image';

export default function Intro() {
	return (
		<div className="page text-center flex flex-col justify-center items-center">
			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-9xl m-0 p-0 mb-2 text-gray-800 max-md:text-6xl select-none">
					<span className="text-[#95f8dc]">Gate</span>Hacks
				</h1>
				<div className="mt-5">
					<p className="bg-gray-800 text-[#fffefe] px-8 py-4 mx-2 my-2 text-lg hover:bg-gray-800 transition ease-in-out duration-7 cursor-pointer">
						28th - 29th September 2024 | In-Person
					</p>
				</div>
			</div>

			{/* Register Now Button */}
			<div className="flex justify-center mt-2">
				<a href="/actions" className="bg-gray-800 text-white px-10 py-6 rounded-lg text-2xl font-bold hover:bg-blue-700 transition duration-300">
					Register Now
				</a>
			</div>

			{/* Facts Section */}
			<div id="facts" className="w-full pt-10"> 
				<div className="row justify-evenly h-full w-full select-none mt-6">
					<div className="max-md:w-[90%] text-center">
						<p className="text-6xl text-red-700">Hackers</p>
						{/* <p className="text-7xl text-red-500">100</p> */}
					</div>
					<div className="max-md:w-[90%] max-md:mt-6 text-center">
						<p className="text-6xl text-amber-600">Projects</p>
						{/* <p className="text-7xl text-amber-500">100</p> */}
					</div>
					<div className="max-md:w-[90%] max-md:mt-6 text-center">
						<p className="text-6xl text-blue-700">Workshops</p>
						{/* <p className="text-7xl text-blue-600">100</p> */}
					</div>
					<div className="max-md:w-[90%] max-md:mt-6 text-center">
						<p className="text-6xl text-green-700">
							Prizes
						</p>
						{/* <p className="text-7xl text-green-600">$15000</p> */}
					</div>
				</div>
				<div className="row justify-evenly h-full w-full mt-6">
					<Image src={img1} alt="Image 1" width={400} height={400} className="m-2" />
					<Image src={img2} alt="Image 2" width={400} height={400} className="m-2" />
					<Image src={img3} alt="Image 3" width={400} height={400} className="m-2" />
					<Image src={img4} alt="Image 4" width={400} height={450} className="m-2" />
				</div>
			</div>
		</div>
	);
}
