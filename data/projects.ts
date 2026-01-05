export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    repoUrl?: string;
    visible: boolean;
    order: number;
}

export const PROJECTS: Project[] = [
    {
        id: "mindjournal",
        title: "MindJournal",
        description:
            "Privacy-focused journaling app built with React, designed around GDPR principles and modern web security.",
        tags: ["React", "Security", "GDPR"],
        featured: true,
        visible: true,
        order: 1,
        repoUrl: "https://github.com/hampusvh/FWK24S-WAI-Projektarbete-Frontend",
    },
    {
        id: "chat",
        title: "React Chat App",
        description:
            "Secure chat app built with React, focusing on authentication, protected routes, and safe message handling.",
        tags: ["React", "Security", "JWT", "CSRF"],
        featured: true,
        visible: true,
        order: 2,
        repoUrl: "https://github.com/hampusvh/react-chat-app",
    },
    {
        id: "webshop",
        title: "Web Shop",
        description:
            "Fullstack e-commerce application with a custom REST API, authentication, and product management.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        featured: false,
        visible: true,
        order: 3,
        repoUrl: "https://github.com/hampusvh/react-web-shop",
    },
    {
        id: "gomoku",
        title: "Gomoku Backend",
        description:
            "Node.js backend implementing game logic and API endpoints for a turn-based board game.",
        tags: ["Node.js", "Express", "Game logic", "API"],
        featured: false,
        visible: true,
        order: 4,
        repoUrl: "https://github.com/hampusvh/FWK24S-PLU-5iRad-backend",
    },

    // Valfria – antingen sätt visible:true och order 5/6, eller låt dem vara dolda
    {
        id: "adventure",
        title: "Text-Based Adventure (Python)",
        description:
            "Python project focusing on branching logic, state handling, and replayability.",
        tags: ["Python", "Logic", "State"],
        featured: false,
        visible: true,
        order: 5,
        repoUrl: "https://github.com/hampusvh/python-adventure-game",
    },
    {
        id: "weather",
        title: "Weather Tracker",
        description:
            "Lightweight React app consuming a public weather API.",
        tags: ["React", "API"],
        featured: false,
        visible: true,
        order: 6,
        repoUrl: "https://github.com/hampusvh/react-weather-tracker",
    },
];
