export type DayType = {
    time: string,
    description: string
}


export type ScheduleType = {
    date: string,
    events: DayType[],
}


export const ScheduleList: ScheduleType[] = [
    {
        date: "Monday July 10 2023",
        events: [
            {
                time: "12:00 PM",
                description: "Free Boba in the Engineering Building. Bring your hacker passes."
            },
            {
                time: "1:00 PM",
                description: "Descope and GGV Capital are giving a speech on startups!"
            }
        ]
    },
    {
        "date": "Tuesday July 11 2023",
        "events": [
            {
                "time": "3:00 PM",
                "description": "Descope workshop in Room 117! Learn all about authentication and user management!"
            },
            {
                "time": "9:00 PM",
                "description": "How to build a website in Next.js with Descope!"
            }
        ]
    },
]
// We'll be updating this schedule as we get closer to the event, but here's a rough idea of what to expect from Saturday, May 27 to Sunday, May 28:

// 👋 9:00 AM - Doors open, registration, and meet fun people
// 👐 10:00 AM - Opening ceremony
// 🤖 11:00 AM - Hacking starts & Intro to Blender w/ Gabe
// 🌸 12:00 PM - Construct w/ Neel
// 🔨 1:00 PM - Lunch + Be Better than the Other Satellites!
// 🔨 2:00 PM - Sprig Games Workshop w/ Thomas
// 🍲 3:00 PM - Working with Games as Narratives w/ Damian
// 🔨 4:00 PM - Generative AI for Games Workshop w/ Kevin
// 🔨 5:00 PM - 3D Shaders and Graphics w/ Kai & Animation and Game Art w/ Darla
// 📺 7:00 PM - 12-hour track & Toronto project showcases
// 👐 9:00 PM - 12-hour track people leave :(
// 😪 12:00 AM - Midnight event!? Game night!?? Top secret.
// ☕ 3:30 AM - Still awake? Make your won cursed caffeinated concoctions.
// 🥐 8:00 AM - Breakfast time!
// 🛑 9:00 AM - Hands up! Off the keyboard! Time to showcase your work and play games.
// 💔 12:00 PM - Goodbye :)