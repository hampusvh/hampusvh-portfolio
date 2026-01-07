import "@/components/shell/Footer/footer.css";
import Container from "@/components/primitives/Container/Container";

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <p className="footer-copy">© {new Date().getFullYear()} Hampus von Horn</p>
      </Container>
    </footer>
  );
}

export default Footer;
