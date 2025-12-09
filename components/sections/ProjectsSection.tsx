import Card from "@/components/ui/Card";
import "@/styles/sections/projects.css";

function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <Card>
            <h3 className="card-title">MindJournal</h3>
            <p className="project-description">A secure journaling app built with React, designed around GDPR and modern web security practices.</p>
          </Card>
          <Card>
            <h3 className="card-title">React Web Shop</h3>
            <p className="project-description">A fullstack e-commerce demo built with React, Node.js, Express and MongoDB.</p>
          </Card>
          <Card>
            <h3 className="card-title">Gomoku Backend</h3>
            <p className="project-description">Backend for a Gomoku game, with game logic and API endpoints built in Node.js and Express.</p>
          </Card>
          <Card>
            <h3 className="card-title">React Weather Tracker</h3>
            <p className="project-description">A small weather app built with React that fetches real-time data from a public API.</p>
          </Card>
          <Card>
            <h3 className="card-title">Python Adventure Game</h3>
            <p className="project-description">A text-based adventure game written in Python using simple decision trees and game logic.</p>
          </Card>
          <Card>
            <h3 className="card-title">Coming Soon</h3>
            <p>...</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;