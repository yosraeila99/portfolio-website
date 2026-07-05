import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function App() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdvwdkz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Portfolio</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="welcome">Welcome to my portfolio</p>

          <h1>Zeyad Noaman</h1>

          <h3>Front-End Developer | UI/UX Designer</h3>

          <p className="hero-text">
            I build modern, responsive, and user-friendly websites with clean
            design, clear content, and smooth user experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            <a href="https://t.me/username" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
            </a>

            <a href="mailto:example@email.com">
              <FaEnvelope />
            </a>

            <a href="https://github.com/yosraeil99" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="globe">
            <div className="globe-icon html-icon">
              <FaHtml5 />
            </div>

            <div className="globe-icon css-icon">
              <FaCss3Alt />
            </div>

            <div className="globe-icon js-icon">
              <FaJs />
            </div>

            <div className="globe-icon react-icon">
              <FaReact />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-header">
          <p>Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>من أنا؟</h3>

            <p className="arabic-text">
              أنا مطور واجهات أمامية ومصمم UI/UX أعمل على بناء مواقع عصرية،
              متجاوبة، وسهلة الاستخدام. أركز على تحويل الأفكار إلى واجهات واضحة
              وجذابة تساعد المستخدم على الوصول لما يحتاجه بسهولة.
            </p>

            <p>
              I build modern and responsive web interfaces that combine clean
              design, clear structure, and smooth user experience.
            </p>
          </div>

          <div className="about-card">
            <h3>What I Do</h3>

            <div className="about-list">
              <p>Front-End Web Development</p>
              <p>Responsive Website Design</p>
              <p>UI/UX Design Improvements</p>
              <p>Arabic & English Portfolio Content</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-header">
          <p>My technical toolkit</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div>
            <FaHtml5 className="skill-icon" />
            <span>HTML</span>
          </div>

          <div>
            <FaCss3Alt className="skill-icon" />
            <span>CSS</span>
          </div>

          <div>
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
          </div>

          <div>
            <FaReact className="skill-icon" />
            <span>React</span>
          </div>

          <div>
            <SiTailwindcss className="skill-icon" />
            <span>Tailwind CSS</span>
          </div>

          <div>
            <span className="skill-text-icon">UI</span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-header">
          <p>Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card featured-project">
            <div className="project-top">
              <span className="project-label">Featured Project</span>
              <span className="project-year">2026</span>
            </div>

            <h3>MiniMart Marketplace</h3>

            <p>
              A complete React marketplace application with product browsing,
              cart quantity control, checkout flow, user dashboard, protected
              admin dashboard, product management, order tracking, and
              localStorage data persistence.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
              <span>React Router</span>
            </div>

            <div className="project-actions">
              <a
                href="https://minimart-marketplace.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/yosraeil99/minimart-marketplace"
                target="_blank"
                rel="noreferrer"
                className="code-btn"
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span className="project-label">Portfolio</span>
              <span className="project-year">2026</span>
            </div>

            <h3>Personal Portfolio Website</h3>

            <p>
              A modern responsive portfolio website with Arabic and English
              content, hero section, skills, projects, contact form, and clean
              dark UI design.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>UI Design</span>
            </div>

            <div className="project-actions">
              <a href="#contact">Request Similar</a>

              <a href="#contact" className="code-btn">
                Details
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span className="project-label">UI Concept</span>
              <span className="project-year">2026</span>
            </div>

            <h3>Landing Page Design</h3>

            <p>
              A clean landing page concept focused on strong visual hierarchy,
              responsive layout, modern typography, and smooth user experience.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Responsive</span>
            </div>

            <div className="project-actions">
              <a href="#contact">View Details</a>

              <a href="#contact" className="code-btn">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-header">
          <p>Let&apos;s work together</p>
          <h2>Contact Me</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Zeyad Noaman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;