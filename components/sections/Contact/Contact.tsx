import Container from "@/components/primitives/Container/Container";
import Section from "@/components/primitives/Section/Section";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import "@/components/sections/Contact/contact.css";

export default function Contact() {
    return (
        <Section id="contact" inset={{ top: "tight", bottom: "loose" }}>
            <Container>
                <div className="contact">
                    <div className="contact-head">
                        <h2 className="contact-title">Contact</h2>
                        <p className="contact-description">
                            I’m open to new opportunities and collaborations. Reach out via email, or connect on LinkedIn and GitHub.
                        </p>
                    </div>
                    <div className="contact-actions" aria-label="Contact links">
                        <a className="contact-link" href="mailto:hampus.vh@gmail.com">
                            <MailIcon width={16} height={16} />
                            <span>Email</span>
                        </a>

                        <a
                            className="contact-link"
                            href="https://www.linkedin.com/in/hampus-von-horn-4b75918a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon width={16} height={16} />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            className="contact-link"
                            href="https://github.com/hampusvh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon width={16} height={16} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
