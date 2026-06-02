import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaUniversity,
  FaWhatsapp,
} from "react-icons/fa";

function ContactPage() {
  return (
    <main className="contact-section">
      <header className="page-header">
        <span className="section-badge">Get In Touch</span>
        <h1>Let's build a meaningful connection.</h1>
        <p>
          For projects, internships, collaborations, or a simple professional
          introduction, reach out through the channel that works best for you.
        </p>
      </header>

      <section className="contact-grid">
        <a className="contact-card" href="mailto:ahmedhashimsuleiman@gmail.com">
          <FaEnvelope />
          <h2>Email</h2>
          <p>ahmedhashimsuleiman@gmail.com</p>
          <span>Write an email <FaArrowRight /></span>
        </a>

        <a className="contact-card" href="https://wa.me/255776335604" target="_blank" rel="noreferrer">
          <FaWhatsapp />
          <h2>WhatsApp</h2>
          <p>+255 776 335 604</p>
          <span>Start a chat <FaArrowRight /></span>
        </a>

        <a className="contact-card" href="tel:+255776335604">
          <FaPhone />
          <h2>Phone</h2>
          <p>+255 776 335 604</p>
          <span>Make a call <FaArrowRight /></span>
        </a>

        <a className="contact-card" href="https://github.com/ahmedhashimsuleiman" target="_blank" rel="noreferrer">
          <FaGithub />
          <h2>GitHub</h2>
          <p>Explore my code and upcoming work.</p>
          <span>View profile <FaArrowRight /></span>
        </a>

        <article className="contact-card static-card">
          <FaUniversity />
          <h2>Institution</h2>
          <p>Eastern Africa Statistical Training Centre (EASTC)</p>
        </article>

        <article className="contact-card static-card">
          <FaMapMarkerAlt />
          <h2>Location</h2>
          <p>Dar es Salaam, Tanzania</p>
        </article>
      </section>
    </main>
  );
}

export default ContactPage;
