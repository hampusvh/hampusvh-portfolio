import "@/components/sections/Contact/contact.css";
import Container from "@/components/layout/Container";

export default function Contact() {
    return (
        <section className="section contact" id="contact" aria-labelledby="contact-title">
            <Container>
                <div className="contact-panel">
                    <div className="contact-content">
                        <h2 className="contact-title" id="contact-title">Contact</h2>
                        <p className="contact-description">
                            I'm open to new opportunities and collaborations. Feel free to reach out via email or connect with me on LinkedIn and GitHub.
                        </p>
                        <div className="contact-actions">
                            <a className="btn btn-primary" href="mailto:...">Email me</a>
                            <a className="btn btn-secondary" href="...">LinkedIn</a>
                            <a className="btn btn-ghost" href="...">GitHub</a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
