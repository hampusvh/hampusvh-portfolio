import "@/components/layout/footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-label">Contact</p>
          <div className="footer-links">
            <a href="mailto:...">Email</a>
            <a
              href="https://www.linkedin.com/in/hampus-von-horn-4b75918a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hampusvh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Hampus von Horn
        </p>
      </div>
    </footer>
  );
}

export default Footer;
