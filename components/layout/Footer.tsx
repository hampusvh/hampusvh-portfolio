import "@/components/layout/footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <p className="footer-label">Get in touch</p>
        <div className="footer-links">
          <a href="mailto:...">Email</a>
          <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/..." target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="footer-copy">© 2025 Hampus von Horn</p>
      </div>
    </footer>
  );
}

export default Footer;
