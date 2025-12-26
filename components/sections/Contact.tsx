import Container from "@/components/layout/Container";
import "@/styles/sections/contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <Container>
                <div className="contact-inner">
                    <p className="contact-eyebrow">Get in touch</p>

                    <div className="contact-actions">
                        <a href="#" className="contact-link">Email</a>
                        <a href="#" className="contact-link">LinkedIn</a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
