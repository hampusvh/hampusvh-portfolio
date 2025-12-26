import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import "@/styles/sections/contact.css";

export default function Contact() {
    return (
        <Section>
            <Container>
                <div className="contact-cta">
                    <p>Get in touch</p>

                    <div className="contact-actions">
                        <a href="#">Email</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
