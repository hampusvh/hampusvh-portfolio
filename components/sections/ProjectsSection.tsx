import Card from "@/components/ui/Card";
import "@/styles/sections/projects.css";

function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="heading-section">Featured Projects</h2>
        <div className="projects-grid">
          <Card>
            <h3 className="heading-card card-title">MindJournal</h3>
            <p className="text-body-sm project-description">A secure journaling app built with React, designed around GDPR and modern web security practices.</p>
          </Card>
          <Card>
            <h3 className="heading-card card-title">Web Shop</h3>
            <p className="text-body-sm project-description">A fullstack e-commerce demo built with React, Node.js, Express and MongoDB.</p>
          </Card>
          <Card>
            <h3 className="heading-card card-title">Gomoku Backend</h3>
            <p className="text-body-sm project-description">Backend for a Gomoku game, with game logic and API endpoints built in Node.js and Express.</p>
          </Card>
          <Card>
            <h3 className="heading-card card-title">Weather Tracker</h3>
            <p className="text-body-sm project-description">A small weather app built with React that fetches real-time data from a public API.</p>
          </Card>
          <Card>
            <h3 className="heading-card card-title">Adventure Game (Python)</h3>
            <p className="text-body-sm project-description">A text-based adventure game written in Python using simple decision trees and game logic.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;