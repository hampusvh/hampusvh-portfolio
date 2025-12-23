export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    repoUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "mindjournal",
        title: "MindJournal",
        description:
            "A secure journaling app built with React, designed around GDPR and modern web security practices.",
        tags: ["React", "Security", "GDPR"],
        featured: true,
        repoUrl: "https://github.com/hampusvh/FWK24S-WAI-Projektarbete-Frontend",
    },
    {
        id: "webshop",
        title: "Web Shop",
        description:
            "A fullstack e-commerce demo built with React, Node.js, Express and MongoDB.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        featured: true,
        repoUrl: "https://github.com/hampusvh/react-web-shop",
    },
    {
        id: "gomoku",
        title: "Gomoku Backend",
        description:
            "Backend for a Gomoku game, with game logic and API endpoints built in Node.js and Express.",
        tags: ["Node.js", "Express"],
        featured: false,
        repoUrl: "https://github.com/hampusvh/FWK24S-PLU-5iRad-backend",
    },
    {
        id: "weather",
        title: "Weather Tracker",
        description:
            "A small weather app built with React that fetches real-time data from a public API.",
        tags: ["React", "API"],
        featured: false,
        repoUrl: "https://github.com/hampusvh/react-weather-tracker",
    },
    {
        id: "adventure",
        title: "Adventure Game (Python)",
        description:
            "A text-based adventure game written in Python using simple decision trees and game logic.",
        tags: ["Python"],
        featured: false,
        repoUrl: "https://github.com/hampusvh/python-adventure-game",
    }
];
