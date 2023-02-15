import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h1>
          Geo Sauer
          <span>he/they</span>
        </h1>
        <p>
          I&apos;m a full stack engineer with a lifetime of puzzling and tinkering experience, and I
          have a passion for creating beautiful, functional things that are as accessible as
          possible.
        </p>
        <p>
          With a background firmly rooted in visual art and experience ranging from bronze statue
          fabrication to telecommunications infrastructure, I&apos;ve made a lifestyle out of rising
          to the challenge and completing every task to exacting standards.
        </p>
      </div>
      <a href="https://www.linkedin.com/in/geosauer/" target="_blank" rel="noreferrer">
        <img src="/geob&w.jpg" alt="A portrait of Geo" />
      </a>
    </div>
  );
}
