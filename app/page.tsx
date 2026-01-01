import Container from "@/components/ui/Container";

export default function Page() {
  return (
    <main>
      <section className="section">
        <Container>
          <div className="stack project">
            <div className="row">
              <p>MindJournal</p>
              <a
                href="https://github.com/hampusvh/FWK24S-WAI-Projektarbete-Frontend"
                target="_blank"
                rel="noreferrer"
              >
                View repo
              </a>
            </div>

            <p>
              A secure journaling app built with React, designed around GDPR and modern web
              security practices.
            </p>

            <p>React · Security · GDPR</p>
          </div>

        </Container>
      </section>
    </main>
  );
}
