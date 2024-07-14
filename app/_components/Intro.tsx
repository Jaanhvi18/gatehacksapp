export default function Intro() {
	return (
		<div className="page h-screen text-center">
			<h1 className="row text-9xl m-0 p-0 mb-2 text-gray-800 max-md:text-6xl select-none">
				<span className="text-[#1bfdb5]">Gate</span>Hacks
			</h1>
			<p className="my-4 text-lg select-none">
				The next fight is not in our{" "}
				<span className="text-blue-300">skies</span>,{" "}
				<span className="text-yellow-600">land</span>, or{" "}
				<span className="text-indigo-500">seas</span>. It&apos;s in the{" "}
				<span className="text-gray-400">digital world</span>. Join the
				battle.
			</p>
			<div className="row">
				<p className="bg-gray-600 text-[#e9e9e9] px-8 py-4 mx-2 my-2 text-lg hover:bg-gray-800 transition ease-in-out duration-7 cursor-pointer">
					October 2024 | In-Person
				</p>
			</div>
		</div>
	);
}
