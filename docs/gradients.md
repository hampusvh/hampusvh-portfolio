  background:
    radial-gradient(circle at 20% 10%,
      rgba(100, 150, 200, 0.08),
      transparent 60%),
    radial-gradient(circle at 90% 90%,
      rgba(150, 100, 200, 0.08),
      transparent 55%),
    linear-gradient(180deg,
      #0a0d11 0%,
      #080a0f 55%,
      #05070b 100%);



Subtle green gradient:

        background:
    radial-gradient(circle at 80% 5%,
      rgba(60, 190, 155, 0.09),
      transparent 60%),
    radial-gradient(circle at 0% 0%,
      rgba(40, 80, 90, 0.09),
      transparent 55%),
    linear-gradient(180deg,
      #05070b 0%,
      #04050a 55%,
      #020306 100%);


Blue/Green mist background (projects.css)

.projects {
  position: relative;
  padding-block: 72px 80px;
  background: transparent;
  color: var(--text-main);
  overflow: hidden;
  /* så mönstret inte spiller ut */
}

.projects::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  mask-image: linear-gradient(to bottom,
      transparent 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom,
      transparent 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      transparent 100%);

  background-image:
    radial-gradient(circle at 30% 20%,
      rgba(80, 200, 170, 0.18),
      transparent 60%),
    radial-gradient(circle at 80% 80%,
      rgba(70, 130, 200, 0.12),
      transparent 55%),
    radial-gradient(circle,
      rgba(255, 255, 255, 0.08) 0,
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px,
      transparent 36px);

  background-size:
    100% 100%,
    100% 100%,
    40px 40px;

  opacity: 0.16;
}

/* gör så att griden (och därmed korten) ligger ovanpå mönstret */
.projects-grid {
  position: relative;
  z-index: 1;

  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-description {
  color: var(--text-muted);
}

------------------------------------------------

Oval subtle turquoise glow:

.projects::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;

  background:
    radial-gradient(ellipse 60% 35% at 50% 60%,
      rgba(0, 255, 200, 0.15),
      transparent 70%);
  opacity: 0.6;
}
