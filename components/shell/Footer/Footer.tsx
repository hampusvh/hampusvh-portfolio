import "@/components/shell/Footer/footer.css";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import Container from "@/components/primitives/Container/Container";


function Footer() {
  return (
    <footer className="site-footer">
      <Container><div className="footer-inner">
        <div className="footer-left">
          <p className="footer-label">Contact</p>

          <div className="footer-links">
            <a className="footer-link" href="mailto:hampus.vh@gmail.com">
              <MailIcon width={16} height={16} />
              <span>Email</span>
            </a>

            <a
              className="footer-link"
              href="https://www.linkedin.com/in/hampus-von-horn-4b75918a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={16} height={16} />
              <span>LinkedIn</span>
            </a>

            <a
              className="footer-link"
              href="https://github.com/hampusvh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon width={16} height={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Hampus von Horn
        </p>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
