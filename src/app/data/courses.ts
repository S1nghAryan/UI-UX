export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  enrollments: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  category: string;
  description: string;
  image: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "quiz" | "reading";
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Arvind Sharma",
    rating: 4.8,
    enrollments: 125340,
    duration: "52 hours",
    level: "Beginner",
    price: 3999,
    category: "Web Development",
    description: "Become a full-stack web developer with just one course. HTML, CSS, JavaScript, Node, React, MongoDB, and more!",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Introduction to Web Development",
        lessons: [
          { id: "l1", title: "What is Web Development?", duration: "12:30", type: "video" },
          { id: "l2", title: "Setting Up Your Environment", duration: "18:45", type: "video" },
          { id: "l3", title: "Your First HTML Page", duration: "22:15", type: "video" },
          { id: "l4", title: "Module 1 Quiz", duration: "10:00", type: "quiz" },
        ],
      },
      {
        id: "m2",
        title: "HTML & CSS Fundamentals",
        lessons: [
          { id: "l5", title: "HTML Structure & Elements", duration: "25:30", type: "video" },
          { id: "l6", title: "CSS Basics & Styling", duration: "30:20", type: "video" },
          { id: "l7", title: "Flexbox & Grid Layouts", duration: "35:45", type: "video" },
          { id: "l8", title: "Responsive Design", duration: "28:10", type: "video" },
        ],
      },
      {
        id: "m3",
        title: "JavaScript Essentials",
        lessons: [
          { id: "l9", title: "JavaScript Basics", duration: "32:15", type: "video" },
          { id: "l10", title: "DOM Manipulation", duration: "28:40", type: "video" },
          { id: "l11", title: "Events & Event Handling", duration: "24:55", type: "video" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    instructor: "Prof. Neeraj Kulkarni",
    rating: 4.9,
    enrollments: 89250,
    duration: "38 hours",
    level: "Intermediate",
    price: 4799,
    category: "Design",
    description: "Learn UI/UX design from scratch. Master Figma, design thinking, user research, prototyping, and more!",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Design Thinking Fundamentals",
        lessons: [
          { id: "l1", title: "Introduction to Design Thinking", duration: "15:20", type: "video" },
          { id: "l2", title: "Empathize & Define", duration: "22:35", type: "video" },
          { id: "l3", title: "Ideate & Prototype", duration: "28:15", type: "video" },
        ],
      },
      {
        id: "m2",
        title: "Figma Mastery",
        lessons: [
          { id: "l4", title: "Figma Interface Overview", duration: "18:40", type: "video" },
          { id: "l5", title: "Components & Auto Layout", duration: "32:20", type: "video" },
          { id: "l6", title: "Prototyping & Interactions", duration: "35:50", type: "video" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Python for Data Science",
    instructor: "Dr. Kavya Iyer",
    rating: 4.7,
    enrollments: 210450,
    duration: "44 hours",
    level: "Beginner",
    price: 3599,
    category: "Data Science",
    description: "Learn Python for data analysis, visualization, and machine learning. Perfect for beginners with no coding experience.",
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQeXRob24lMjBwcm9ncmFtbWluZyUyMGRhdGElMjBzY2llbmNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NTM4NDUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    modules: [
      {
        id: "m1",
        title: "Python Basics",
        lessons: [
          { id: "l1", title: "Python Installation & Setup", duration: "14:25", type: "video" },
          { id: "l2", title: "Variables & Data Types", duration: "20:30", type: "video" },
          { id: "l3", title: "Control Flow", duration: "25:15", type: "video" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing 2024",
    instructor: "Prof. Rohan Mehta",
    rating: 4.6,
    enrollments: 67890,
    duration: "28 hours",
    level: "Beginner",
    price: 3199,
    category: "Marketing",
    description: "Master digital marketing strategies including SEO, social media marketing, email marketing, and content marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Digital Marketing Fundamentals",
        lessons: [
          { id: "l1", title: "Introduction to Digital Marketing", duration: "16:30", type: "video" },
          { id: "l2", title: "Understanding Your Audience", duration: "21:45", type: "video" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Machine Learning A-Z",
    instructor: "Dr. Sneha Nair",
    rating: 4.8,
    enrollments: 156780,
    duration: "64 hours",
    level: "Advanced",
    price: 5599,
    category: "Data Science",
    description: "Master machine learning on Python & R. Includes hands-on projects, code templates, and comprehensive theory.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Introduction to Machine Learning",
        lessons: [
          { id: "l1", title: "What is Machine Learning?", duration: "19:20", type: "video" },
          { id: "l2", title: "Types of ML Algorithms", duration: "24:35", type: "video" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Graphic Design Essentials",
    instructor: "Alakh Pandey",
    rating: 4.7,
    enrollments: 94320,
    duration: "32 hours",
    level: "Beginner",
    price: 2799,
    category: "Design",
    description: "Learn graphic design theory and Adobe Creative Suite. Create stunning visuals for print and digital media.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Design Principles",
        lessons: [
          { id: "l1", title: "Color Theory", duration: "18:15", type: "video" },
          { id: "l2", title: "Typography Fundamentals", duration: "22:40", type: "video" },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "React - The Complete Guide",
    instructor: "Dr. Arvind Sharma",
    rating: 4.9,
    enrollments: 178560,
    duration: "48 hours",
    level: "Intermediate",
    price: 4399,
    category: "Web Development",
    description: "Dive deep into React.js! Learn hooks, context, Redux, Next.js, and build real-world projects.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "React Fundamentals",
        lessons: [
          { id: "l1", title: "What is React?", duration: "16:45", type: "video" },
          { id: "l2", title: "Components & Props", duration: "28:30", type: "video" },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Photography Masterclass",
    instructor: "Prof. Neeraj Kulkarni",
    rating: 4.8,
    enrollments: 112340,
    duration: "36 hours",
    level: "Beginner",
    price: 3439,
    category: "Photography",
    description: "Complete guide to photography - DSLR & mirrorless cameras, composition, lighting, editing, and more!",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=450&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Camera Basics",
        lessons: [
          { id: "l1", title: "Understanding Exposure", duration: "20:30", type: "video" },
          { id: "l2", title: "Aperture, Shutter, ISO", duration: "25:45", type: "video" },
        ],
      },
    ],
  },
];