import Container from "@/components/layout/Container";
import "@/styles/sections/contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <Container>
                <div className="contact-inner">
                    <p className="eyebrow">Get in touch</p>

                    <div className="contact-actions">
                        <a href="#" className="contact-link text-2">Email</a>
                        <a href="#" className="contact-link text-2">LinkedIn</a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
