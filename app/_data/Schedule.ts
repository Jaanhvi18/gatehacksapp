
export type DayType = {
    time: string,
    description: string,
    location: string
}

export type ScheduleType = {
    date: string,
    events: DayType[],
}

export const ScheduleList: ScheduleType[] = [
    {
        date: "Saturday September 28 2024",
        events: [
            {
                time: "11:00 AM - 11:45 AM",
                description: "Check-in",
                location: "Bernstein Hall"
            },
            {
                time: "12:00 PM",
                description: "HACKING BEGINS",
                location: "Bernstein Hall"
            },
            {
                time: "12:00 PM - 12:30 PM",
                description: "Finding a Team",
                location: "Bernstein Hall"
            },
            {
                time: "1:00 PM",
                description: "Lunch",
                location: "Bernstein Hall"
            },
            {
                time: "1:15 PM - 2:00 PM",
                description: "Pitching 101",
                location: "Bernstein Hall"
            },
            {
                time: "2:30 PM - 3:00 PM",
                description: "Github Basics",
                location: "Bernstein Hall"
            },
            {
                time: "3:30 PM - 4:00 PM",
                description: "Figma Basics: Creating an MVP",
                location: "Bernstein Hall"
            },
            {
                time: "4:00 PM - 5:00 PM",
                description: "Website 101",
                location: "Bernstein Hall"
            },            
            {
                time: "6:00 PM",
                description: "Dinner",
                location: "Bernstein Hall"
            },
            {
                time: "9:00 PM - 10:00 PM",
                description: "Game Time!",
                location: "Bernstein Hall"
            },
            {
                time: "12:00 AM",
                description: "Snack Time",
                location: "Bernstein Hall"
            }
        ]
    },
    {
        date: "Sunday September 29 2024",
        events: [
            {
                time: "10:00 AM - 10:30 AM",
                description: "How to Deploy a Website Workshop",
                location: "Bernstein Hall 2"
            },
            {
                time: "10:30 AM",
                description: "Brunch",
                location: "Bernstein Hall"
            },
            {
                time: "12:00 PM",
                description: "SUBMISSIONS DUE",
                location: "Bernstein Hall"
            },
            {
                time: "12:00 PM - 1:00 PM",
                description: "Judging and Demos",
                location: "Bernstein Hall"
            },
            // {
            //     time: "1:00 PM",
            //     description: "Lunch",
            //     location: "Bernstein Hall"
            // },
            {
                time: "1:30 PM - 2:30 PM",
                description: "Closing Ceremony + Prize Handout",
                location: "Bernstein Hall"
            }
        ]
    }
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