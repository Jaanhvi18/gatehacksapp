import { ScheduleType } from '../_data/Schedule'

export default function Schedule({ data }: { data: ScheduleType[] }) {
    return (
        <div id="schedule" className="page component">
            <p className="title">Schedule</p>
            <p className="mb-6 font-bold">
                We&apos;ll be updating this schedule as we get closer to the event, but here&apos;s a rough idea of what to expect from Saturday, May 27 to Sunday, May 28:
            </p>
            <div className="row items-start justify-evenly w-full">
                {data.map((schedule, i) => (
                    <div key={i} className="flex flex-col flex-1 max-md:flex-none max-md:mb-12 w-[95%] mx-3">
                        <p className="text-2xl mb-3 text-[#ef4444] font-bold">{schedule.date}</p>
                        <div>
                            {schedule.events.map((event, i) => (
                                <div key={i} className="col align-start my-3 bg-[#202020] text-[#fff] py-6 pb-7 pl-7">
                                    <p className="text-xl mb-3 text-[#d837ff] font-bold">{event.time}</p>
                                    <p className="w-[90%] font-bold">{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
