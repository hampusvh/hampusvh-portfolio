import Card from "@/components/ui/Card";
import "@/styles/sections/projects.css";

function ProjectsSection() {
  return (
    <section className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <Card>
            <h3>MindJournal</h3>
            <p>A secure journaling app built with React, designed around GDPR and modern web security practices.</p>
          </Card>
          <Card>
            <h3>React Web Shop</h3>
            <p>A fullstack e-commerce demo built with React, Node.js, Express and MongoDB.</p>
          </Card>
          <Card>
            <h3>Gomoku Backend</h3>
            <p>Backend for a Gomoku game, with game logic and API endpoints built in Node.js and Express.</p>
          </Card>
          <Card>
            <h3>React Weather Tracker</h3>
            <p>A small weather app built with React that fetches real-time data from a public API.</p>
          </Card>
          <Card>
            <h3>Python Adventure Game</h3>
            <p>A text-based adventure game written in Python using simple decision trees and game logic.</p>
          </Card>
          <Card>
            <h3>Coming Soon</h3>
            <p>...</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;