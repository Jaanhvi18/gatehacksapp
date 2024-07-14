import About from "./_components/About";
import Facts from "./_components/Facts";
import Intro from "./_components/Intro";
// import Speakers from './_components/Speakers'
import FAQ from "./_components/FAQ";
// import Sponsors from './_components/Sponsors'
import Schedule from "./_components/Schedule";

import { ScheduleList } from "./_data/Schedule";

import { AboutParagraph } from "./_data/About";
import { FAQList } from "./_data/FAQ";

import Link from "next/link";


import DynamicNavbar from "./_components/DynamicNavbar";

export default function Home() {
	return (
		<div className="page h-full">
			<div className="w-[90%]">
				<Intro />
				<Facts />
				<About data={AboutParagraph} />
				<Schedule data={ScheduleList} />
				<FAQ data={FAQList} />

			</div>
		</div>
	);
}
