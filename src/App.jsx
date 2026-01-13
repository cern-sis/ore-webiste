import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <News />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

function Header() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          {/* User's exact logo structure converted to React/CSS classes */}
          <div className="logo-graphic">
            <div className="logo-graphic-gradient"></div>
            <div className="logo-graphic-dot"></div>
          </div>
          <div className="logo-text">
            <span>open</span>
            <span>research</span>
            <span>europe</span>
          </div>
        </a>

        <div className="header-right">
          <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="#about" onClick={scrollToAbout}>About</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Open Research. Shared Progress.</h1>
      </div>
    </section>
  )
}

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {
      date: "12 OCT 2025",
      title: "New Policy on Open Data in European Research",
      excerpt: "Understanding the implications of the latest EU commission guidelines on data accessibility and transparency.",
      body: "Full details about the new policy on Open Data in European Research. This initiative aims to foster greater transparency and collaboration across the scientific community. By mandating open access for all publicly funded research, the European Commission hopes to accelerate innovation and reduce duplication of efforts."
    },
    {
      date: "28 SEP 2025",
      title: "ORE Platform Reaches 10,000 Submissions",
      excerpt: "A milestone achievement for open access publishing in Europe, celebrating the contributions of researchers.",
      body: "We are proud to announce that the Open Research Europe platform has reached 10,000 submissions. This milestone underscores the growing trust and adoption of open peer review models among researchers. We thank our authors, reviewers, and partners for making this possible."
    },
    {
      date: "15 SEP 2025",
      title: "Interview with Latest Grant Winners",
      excerpt: "We speak to the recipients of the Horizon Europe grants about their upcoming projects and publishing plans.",
      body: "In this exclusive interview, we sit down with three recent recipients of the Horizon Europe grants. They discuss their groundbreaking projects in renewable energy, quantum computing, and sustainable agriculture, and how open publishing will play a key role in disseminating their findings."
    }
  ];

  return (
    <>
      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="news-card"
                onClick={() => setSelectedNews(item)}
                style={{ cursor: 'pointer' }}
              >
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedNews(null)}>×</button>
            <span className="modal-date">{selectedNews.date}</span>
            <h2 className="modal-title">{selectedNews.title}</h2>
            <p className="modal-body">{selectedNews.body}</p>
          </div>
        </div>
      )}
    </>
  )
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About ORE</h2>
            <p>
              Open Research Europe (ORE) is an open access publishing platform for the publication of research stemming from Horizon 2020, Horizon Europe, and Euratom funding across all subject areas.
            </p>
            <p>
              The platform makes it easy for Horizon 2020 and Horizon Europe beneficiaries to comply with the open access terms of their funding and offers researchers a publishing venue to share their results and insights rapidly and facilitate open, constructive research discussion.
            </p>
          </div>
          <div className="about-image">
            [About Image / Infographic Placeholder]
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section">
      <div className="container contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-powered">POWERED BY CERN</div>
        <div className="funder-logos">
          {/* Placeholders for funder logos */}
          <div className="funder-logo"></div>
          <div className="funder-logo"></div>
          <div className="funder-logo"></div>
          <div className="funder-logo"></div>
          <div className="funder-logo"></div>
        </div>
      </div>
    </footer>
  )
}

export default App
