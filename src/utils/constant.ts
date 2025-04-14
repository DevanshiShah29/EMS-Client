export const BE_URL = "https://event-management-system-5zdg.onrender.com"

export const ROUTES = {
    LOGIN: "/login",
    SIGN_UP: "/sign-up",
    HOME: "/",
    USER_EVENTS: "/user/events",
    USER_PROFILE: "/user/profile",
    ADMIN: {
        DASHBOARD: "/admin/dashboard",
        EVENTS: "/admin/event",
        CREATE_EVENT : "/admin/event/create",
    }
}


export const ADMIN_SIDEBAR_ITEMS = [
    { id : 1, title : "Dashboard", route : ROUTES.ADMIN.DASHBOARD, icon : "/assets/DashboardIcon.svg"},
    { id : 2, title : "Events", route : ROUTES.ADMIN.EVENTS, icon : "/assets/EventsIcon.svg"},
] 

export const CATOGORIES_ITEMS = [
    { id: 1, label: "Music", value: "Music", icon: "🎵" },
    { id: 2, label: "Art & Culture", value: "Art & Culture", icon: "🎨" },
    { id: 3, label: "Film & Media", value: "Film & Media", icon: "🎬" },
    { id: 4, label: "Education", value: "Education", icon: "🎓" },
    { id: 5, label: "Sports", value: "Sports", icon: "🏅" },
    { id: 6, label: "Food & Drink", value: "Food & Drink", icon: "🍔" },
    { id: 7, label: "Wellness", value: "Wellness", icon: "🧘" },
    { id: 8, label: "Gaming", value: "Gaming", icon: "🎮" },
    { id: 9, label: "Business", value: "Business", icon: "💼" },
]

export const EVENTS_DUMMY_DATA = [
    {
        img: "https://i.pravatar.cc/40?img=11",
        title: "React Conf",
        category: "Conference",
        startTime: "2025-04-15T10:00:00Z",
        duration: "2h 15m",
        location: "Berlin",
        price: 45,
        ticketsAvailable: 80,
      },
      {
        img: "https://i.pravatar.cc/40?img=12",
        title: "AI Summit",
        category: "Hackathon",
        startTime: "2025-04-10T08:00:00Z",
        duration: "3h 30m",
        location: "London",
        price: 20,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=13",
        title: "Next.js Workshop",
        category: "Workshop",
        startTime: "2025-04-22T14:00:00Z",
        duration: "1h 15m",
        location: "Online",
        price: 10,
        ticketsAvailable: 200,
      },
      {
        img: "https://i.pravatar.cc/40?img=14",
        title: "Startup Grind",
        category: "Conference",
        startTime: "2025-04-01T13:30:00Z",
        duration: "2h 30m",
        location: "San Francisco",
        price: 30,
        ticketsAvailable: 90,
      },
      {
        img: "https://i.pravatar.cc/40?img=15",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-03T11:30:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=16",
        title: "Tech Expo",
        category: "Conference",
        startTime: "2025-03-30T15:30:00Z",
        duration: "2h",
        location: "Berlin",
        price: 40,
        ticketsAvailable: 60,
      },
      {
        img: "https://i.pravatar.cc/40?img=17",
        title: "DevOps Meetup",
        category: "Workshop",
        startTime: "2025-04-28T12:00:00Z",
        duration: "2h",
        location: "New York",
        price: 25,
        ticketsAvailable: 30,
      },
      {
        img: "https://i.pravatar.cc/40?img=18",
        title: "Cyber Security Day",
        category: "Hackathon",
        startTime: "2025-04-26T10:00:00Z",
        duration: "3h",
        location: "London",
        price: 0,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=19",
        title: "AI Hackathon",
        category: "Hackathon",
        startTime: "2025-04-17T09:00:00Z",
        duration: "4h",
        location: "San Francisco",
        price: 45,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=20",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-27T17:00:00Z",
        duration: "1h 45m",
        location: "Online",
        price: 0,
        ticketsAvailable: 50,
      },
      {
        img: "https://i.pravatar.cc/40?img=21",
        title: "React Conf",
        category: "Conference",
        startTime: "2025-05-01T11:00:00Z",
        duration: "2h 30m",
        location: "Berlin",
        price: 55,
        ticketsAvailable: 90,
      },
      {
        img: "https://i.pravatar.cc/40?img=22",
        title: "AI Summit",
        category: "Hackathon",
        startTime: "2025-04-15T09:00:00Z",
        duration: "3h",
        location: "London",
        price: 15,
        ticketsAvailable: 70,
      },
      {
        img: "https://i.pravatar.cc/40?img=23",
        title: "Next.js Workshop",
        category: "Workshop",
        startTime: "2025-04-23T14:00:00Z",
        duration: "1h",
        location: "Online",
        price: 10,
        ticketsAvailable: 25,
      },
      {
        img: "https://i.pravatar.cc/40?img=24",
        title: "Startup Grind",
        category: "Conference",
        startTime: "2025-04-13T13:00:00Z",
        duration: "2h",
        location: "San Francisco",
        price: 35,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=25",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-04T11:00:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=26",
        title: "Tech Expo",
        category: "Conference",
        startTime: "2025-03-28T15:30:00Z",
        duration: "2h",
        location: "Berlin",
        price: 50,
        ticketsAvailable: 120,
      },
      {
        img: "https://i.pravatar.cc/40?img=27",
        title: "DevOps Meetup",
        category: "Workshop",
        startTime: "2025-04-29T10:00:00Z",
        duration: "2h",
        location: "New York",
        price: 0,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=28",
        title: "Cyber Security Day",
        category: "Hackathon",
        startTime: "2025-04-25T10:00:00Z",
        duration: "4h",
        location: "London",
        price: 15,
        ticketsAvailable: 80,
      },
      {
        img: "https://i.pravatar.cc/40?img=29",
        title: "AI Hackathon",
        category: "Hackathon",
        startTime: "2025-04-16T09:00:00Z",
        duration: "5h",
        location: "San Francisco",
        price: 35,
        ticketsAvailable: 20,
      },
      {
        img: "https://i.pravatar.cc/40?img=30",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-24T17:00:00Z",
        duration: "1h 30m",
        location: "Online",
        price: 0,
        ticketsAvailable: 40,
      },
      {
        img: "https://i.pravatar.cc/40?img=31",
        title: "Frontend Fiesta",
        category: "Conference",
        startTime: "2025-05-03T09:00:00Z",
        duration: "3h",
        location: "Tokyo",
        price: 60,
        ticketsAvailable: 150,
      },
      {
        img: "https://i.pravatar.cc/40?img=32",
        title: "ML Marathon",
        category: "Hackathon",
        startTime: "2025-04-30T12:00:00Z",
        duration: "6h",
        location: "Online",
        price: 0,
        ticketsAvailable: 60,
      },
      {
        img: "https://i.pravatar.cc/40?img=33",
        title: "DesignOps Summit",
        category: "Workshop",
        startTime: "2025-04-07T15:00:00Z",
        duration: "2h 15m",
        location: "Berlin",
        price: 45,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=34",
        title: "Growth Hacking 101",
        category: "Webinar",
        startTime: "2025-04-09T19:00:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 300,
      },
      {
        img: "https://i.pravatar.cc/40?img=35",
        title: "React Native Camp",
        category: "Workshop",
        startTime: "2025-04-18T10:30:00Z",
        duration: "2h",
        location: "New York",
        price: 35,
        ticketsAvailable: 45,
      },
      {
        img: "https://i.pravatar.cc/40?img=36",
        title: "Serverless Days",
        category: "Conference",
        startTime: "2025-04-21T08:00:00Z",
        duration: "3h",
        location: "San Francisco",
        price: 40,
        ticketsAvailable: 90,
      },
      {
        img: "https://i.pravatar.cc/40?img=37",
        title: "Firebase Bootcamp",
        category: "Workshop",
        startTime: "2025-04-19T14:00:00Z",
        duration: "1h 45m",
        location: "Online",
        price: 0,
        ticketsAvailable: 110,
      },
      {
        img: "https://i.pravatar.cc/40?img=38",
        title: "UI/UX Forum",
        category: "Conference",
        startTime: "2025-04-05T13:00:00Z",
        duration: "2h",
        location: "London",
        price: 20,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=39",
        title: "AI & Ethics",
        category: "Webinar",
        startTime: "2025-04-06T11:30:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 75,
      },
      {
        img: "https://i.pravatar.cc/40?img=40",
        title: "Kubernetes Crash Course",
        category: "Workshop",
        startTime: "2025-04-20T15:00:00Z",
        duration: "2h",
        location: "Berlin",
        price: 30,
        ticketsAvailable: 60,
      },
      {
        img: "https://i.pravatar.cc/40?img=41",
        title: "GraphQL Day",
        category: "Conference",
        startTime: "2025-04-11T09:00:00Z",
        duration: "2h 30m",
        location: "London",
        price: 25,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=42",
        title: "TypeScript Live",
        category: "Webinar",
        startTime: "2025-04-13T16:00:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 200,
      },
      {
        img: "https://i.pravatar.cc/40?img=43",
        title: "Clean Code Clinic",
        category: "Workshop",
        startTime: "2025-04-22T10:30:00Z",
        duration: "2h",
        location: "New York",
        price: 15,
        ticketsAvailable: 35,
      },
      {
        img: "https://i.pravatar.cc/40?img=44",
        title: "Open Source Panel",
        category: "Conference",
        startTime: "2025-04-14T13:00:00Z",
        duration: "3h",
        location: "San Francisco",
        price: 0,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=45",
        title: "Headless CMS Workshop",
        category: "Workshop",
        startTime: "2025-04-10T17:00:00Z",
        duration: "1h 30m",
        location: "Berlin",
        price: 40,
        ticketsAvailable: 60,
      },
      {
        img: "https://i.pravatar.cc/40?img=46",
        title: "Product-Led Growth",
        category: "Webinar",
        startTime: "2025-04-29T09:00:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 95,
      },
      {
        img: "https://i.pravatar.cc/40?img=47",
        title: "Frontend Connect",
        category: "Conference",
        startTime: "2025-05-02T14:00:00Z",
        duration: "2h",
        location: "Berlin",
        price: 50,
        ticketsAvailable: 70,
      },
      {
        img: "https://i.pravatar.cc/40?img=48",
        title: "Serverless Showdown",
        category: "Hackathon",
        startTime: "2025-04-26T12:00:00Z",
        duration: "4h",
        location: "London",
        price: 20,
        ticketsAvailable: 10,
      },
      {
        img: "https://i.pravatar.cc/40?img=49",
        title: "CodeCraft Conference",
        category: "Conference",
        startTime: "2025-04-07T09:00:00Z",
        duration: "3h",
        location: "New York",
        price: 60,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=50",
        title: "Design Thinking Workshop",
        category: "Workshop",
        startTime: "2025-04-16T11:30:00Z",
        duration: "2h",
        location: "Online",
        price: 0,
        ticketsAvailable: 30,
      },
      {
        img: "https://i.pravatar.cc/40?img=1",
        title: "React Conf",
        category: "Conference",
        startTime: "2025-04-10T14:00:00Z",
        duration: "2h 30m",
        location: "San Francisco",
        price: 50,
        ticketsAvailable: 100,
      },
      {
        img: "https://i.pravatar.cc/40?img=2",
        title: "AI Summit",
        category: "Hackathon",
        startTime: "2025-04-11T09:00:00Z",
        duration: "3h",
        location: "New York",
        price: 0,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=3",
        title: "Next.js Workshop",
        category: "Workshop",
        startTime: "2025-04-08T16:30:00Z",
        duration: "1h 45m",
        location: "Online",
        price: 25,
        ticketsAvailable: 20,
      },
      {
        img: "https://i.pravatar.cc/40?img=4",
        title: "Startup Grind",
        category: "Conference",
        startTime: "2025-04-12T13:00:00Z",
        duration: "2h",
        location: "London",
        price: 30,
        ticketsAvailable: 50,
      },
      {
        img: "https://i.pravatar.cc/40?img=5",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-06T11:00:00Z",
        duration: "1h",
        location: "Online",
        price: 0,
        ticketsAvailable: 150,
      },
      {
        img: "https://i.pravatar.cc/40?img=6",
        title: "Tech Expo",
        category: "Conference",
        startTime: "2025-03-25T15:30:00Z",
        duration: "3h",
        location: "Berlin",
        price: 60,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=7",
        title: "DevOps Meetup",
        category: "Workshop",
        startTime: "2025-04-14T10:00:00Z",
        duration: "2h",
        location: "New York",
        price: 20,
        ticketsAvailable: 70,
      },
      {
        img: "https://i.pravatar.cc/40?img=8",
        title: "Cyber Security Day",
        category: "Hackathon",
        startTime: "2025-04-02T14:00:00Z",
        duration: "4h",
        location: "London",
        price: 0,
        ticketsAvailable: 30,
      },
      {
        img: "https://i.pravatar.cc/40?img=9",
        title: "AI Hackathon",
        category: "Hackathon",
        startTime: "2025-04-18T09:30:00Z",
        duration: "5h",
        location: "San Francisco",
        price: 40,
        ticketsAvailable: 0,
      },
      {
        img: "https://i.pravatar.cc/40?img=10",
        title: "Cloud Talk",
        category: "Webinar",
        startTime: "2025-04-19T17:00:00Z",
        duration: "1h 30m",
        location: "Online",
        price: 0,
        ticketsAvailable: 120,
      },
];

export enum ROLE {
    Admin = "admin",
    User = "user",
}

export const INITIAL_TICKETS_TYPES = [
  { id: "1", type: "Premium", price: "300", maxQty: 100, description: "All access, Goodies" },
  { id: "2", type: "Standard", price: "150", maxQty: 50, description: "Front row, extra access" },
  { id: "3", type: "Free", price: "0", maxQty: 50, description: "General admission" },
]


export const ALLOWED_FILE_FORMATS = ["jpg", "jpeg", "png", "webp"];
export const MAX_FILE_SIZE_MB = 2;


export const API_ROUTES = {
  ADMIN : {
    CREATE_EVENT : `${BE_URL}/events`,
    GET_EVENTS : `${BE_URL}/events`,
    DELETE_EVENT: (id: string) => `${BE_URL}/events/${id}`,
  }, 
  AUTH: {
    LOGIN: `${BE_URL}/login`,
  }
}

export const API_TYPES = {
  GET : "GET",
  POST : "POST",
  DELETE : "DELETE",
  PUT : "PUT",
  PATCH: "PATCH"
}

export const PAGINATION_OPTIONS = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
  { value: 20, label: '20' },
];

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y3OWNmNThhZDgwNTRkYjBmOGI3NTUiLCJuYW1lIjoiU2hyZXlhc2giLCJlbWFpbCI6InNocmV5YXNoQHlvcG1haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDQ2MDQ4MjYsImV4cCI6MTc0NDY5MTIyNn0.MJ9rlUzejJUWDmnBYUdafEOIhfmgsY-wmtbm5OIYec0"
