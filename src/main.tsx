import React from "react";
import { createRoot } from "react-dom/client";

const services = [
  {
    title: "Nail Fixing",
    description:
      "Beautifully styled nails designed to complement your personality and special occasions.",
    icon: "💅",
  },
  {
    title: "Gele Making",
    description:
      "Elegant professional gele styling for weddings, parties, celebrations and special occasions.",
    icon: "👑",
  },
  {
    title: "Makeover",
    description:
      "Professional makeovers designed to enhance your natural beauty and create a polished look.",
    icon: "✨",
  },
  {
    title: "Pedicure",
    description:
      "Relaxing pedicure services for clean, refreshed and beautifully maintained feet.",
    icon: "🦶",
  },
  {
    title: "Beauty Equipment",
    description:
      "Quality beauty tools and equipment for personal beauty care and professional use.",
    icon: "🛍️",
  },
];

function App() {
  const whatsapp =
    "https://wa.me/2347066977592?text=Hello%20Triple%20F%20Beauty%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20beauty%20services.";

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Georgia, "Times New Roman", serif;
          background: #fffaf7;
          color: #2b2020;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,250,247,.96);
          border-bottom: 1px solid #eadbd5;
          backdrop-filter: blur(12px);
        }

        .nav-inner {
          max-width: 1180px;
          margin: auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .logo {
          font-size: 25px;
          font-weight: bold;
          color: #7c2638;
        }

        .logo span {
          display: block;
          font-size: 11px;
          letter-spacing: 3px;
          color: #a67852;
          margin-top: 3px;
        }

        .links {
          display: flex;
          gap: 25px;
          align-items: center;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .links a:hover {
          color: #8a3045;
        }

        .btn {
          display: inline-block;
          padding: 13px 22px;
          border-radius: 30px;
          background: #7c2638;
          color: white;
          border: none;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-weight: bold;
          transition: .25s;
        }

        .btn:hover {
          background: #5f1d2c;
          transform: translateY(-2px);
        }

        .hero {
          min-height: 680px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(42,20,24,.83), rgba(42,20,24,.35)),
            url("https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=85")
            center/cover;
          color: white;
        }

        .hero-content {
          max-width: 1180px;
          width: 100%;
          margin: auto;
          padding: 80px 24px;
        }

        .eyebrow {
          color: #e9c79f;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-family: Arial, sans-serif;
          font-size: 12px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(48px, 7vw, 86px);
          line-height: .98;
          max-width: 800px;
          margin-bottom: 25px;
        }

        .hero p {
          max-width: 650px;
          font-family: Arial, sans-serif;
          font-size: 18px;
          line-height: 1.7;
          color: #f9eeee;
          margin-bottom: 32px;
        }

        .location {
          margin-top: 22px;
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #ead3c6;
        }

        section {
          padding: 90px 24px;
        }

        .container {
          max-width: 1180px;
          margin: auto;
        }

        .section-title {
          font-size: clamp(34px, 5vw, 52px);
          color: #672234;
          margin-bottom: 18px;
        }

        .section-text {
          font-family: Arial, sans-serif;
          color: #66575a;
          line-height: 1.8;
          max-width: 680px;
        }

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 25px;
        }

        .services {
          background: #f7eeeb;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-top: 45px;
        }

        .card {
          background: white;
          padding: 28px 22px;
          border-radius: 20px;
          border: 1px solid #eadbd5;
          transition: .3s;
        }

        .card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 40px rgba(70,30,35,.1);
        }

        .icon {
          font-size: 38px;
          margin-bottom: 20px;
        }

        .card h3 {
          color: #74263a;
          margin-bottom: 12px;
          font-size: 21px;
        }

        .card p {
          font-family: Arial, sans-serif;
          color: #6c5c60;
          line-height: 1.7;
          font-size: 14px;
        }

        .experience {
          background: #72283b;
          color: white;
          text-align: center;
        }

        .experience .section-title {
          color: white;
        }

        .experience .section-text {
          color: #f3dddd;
          margin: auto auto 30px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 40px;
        }

        .gallery img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          border-radius: 18px;
          transition: .3s;
        }

        .gallery img:hover {
          transform: scale(1.02);
        }

        .contact {
          background: #f7eeeb;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .contact-item {
          margin: 25px 0;
          font-family: Arial, sans-serif;
        }

        .contact-item strong {
          display: block;
          color: #76283c;
          margin-bottom: 5px;
        }

        form {
          background: white;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #eadbd5;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border: 1px solid #ddccc6;
          border-radius: 10px;
          font-family: Arial, sans-serif;
          background: #fffaf7;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        footer {
          background: #241519;
          color: #eadbdd;
          padding: 55px 24px;
          text-align: center;
        }

        footer .logo {
          color: white;
        }

        .footer-info {
          font-family: Arial, sans-serif;
          line-height: 2;
          margin: 20px 0;
          font-size: 14px;
        }

        .whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 200;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25d366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          font-weight: bold;
          box-shadow: 0 8px 25px rgba(0,0,0,.2);
        }

        @media (max-width: 900px) {
          .links {
            display: none;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .about,
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero {
            min-height: 600px;
          }

          section {
            padding: 65px 18px;
          }

          .cards,
          .gallery {
            grid-template-columns: 1fr;
          }

          .gallery img {
            height: 300px;
          }

          .nav-inner {
            padding: 15px 18px;
          }

          .nav .btn {
            padding: 10px 14px;
            font-size: 12px;
          }
        }
      `}</style>

      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            Triple F Beauty
            <span>BEAUTY & STYLE</span>
          </a>

          <nav className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn" href={whatsapp}>
            Book Appointment
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">Triple F Beauty • Lagos</div>
            <h1>Beauty That Makes You Feel Unforgettable.</h1>
            <p>
              Professional beauty services, elegant gele styling, stunning
              makeovers, nail care, pedicures and quality beauty equipment —
              all in one place.
            </p>
            <a className="btn" href={whatsapp}>
              Book an Appointment
            </a>
            <div className="location">📍 Ojodu Berger, Lagos, Nigeria</div>
          </div>
        </section>

        <section id="about">
          <div className="container about">
            <div>
              <div className="eyebrow">About Triple F Beauty</div>
              <h2 className="section-title">Where Beauty Meets Confidence.</h2>
              <p className="section-text">
                Triple F Beauty is a beauty and fashion brand dedicated to
                helping you look and feel your best. From beautiful nails and
                elegant gele styling to makeovers, pedicures and quality
                beauty equipment, we bring professional beauty care together
                under one brand.
              </p>
              <br />
              <a className="btn" href="#services">
                Explore Services
              </a>
            </div>

            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty styling"
            />
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="eyebrow">What We Offer</div>
            <h2 className="section-title">Our Beauty Services</h2>
            <p className="section-text">
              Everything you need to look polished, confident and beautiful.
            </p>

            <div className="cards">
              {services.map((service) => (
                <div className="card" key={service.title}>
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="container">
            <div className="eyebrow">Your Moment</div>
            <h2 className="section-title">Your Beauty. Your Style. Your Moment.</h2>
            <p className="section-text">
              Perfect for weddings, birthdays, parties, photoshoots, special
              occasions and everyday self-care.
            </p>
            <a className="btn" href={whatsapp}>
              Book Your Beauty Session
            </a>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="eyebrow">Our Work</div>
            <h2 className="section-title">Beauty Gallery</h2>
            <p className="section-text">
              A glimpse of the beauty, elegance and style Triple F Beauty
              represents.
            </p>

            <div className="gallery">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85"
                alt="Nail beauty"
              />
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85"
                alt="Makeup beauty"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
                alt="Beauty styling"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">Get In Touch</div>
              <h2 className="section-title">Let's Create Your Look.</h2>
              <p className="section-text">
                Ready for your next beauty session? Contact Triple F Beauty
                today.
              </p>

              <div className="contact-item">
                <strong>📍 Address</strong>
                Ojodu Berger, Lagos, Nigeria
              </div>

              <div className="contact-item">
                <strong>📞 Phone</strong>
                <a href="tel:07066977592">07066977592</a>
              </div>

              <div className="contact-item">
                <strong>✉️ Email</strong>
                <a href="mailto:iyaibejif3@gmail.com">
                  iyaibejif3@gmail.com
                </a>
              </div>

              <a className="btn" href={whatsapp}>
                Chat on WhatsApp
              </a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsapp, "_blank");
              }}
            >
              <h3 style={{ marginBottom: "20px", color: "#72283b" }}>
                Make an Enquiry
              </h3>

              <input placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" />
              <select required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
              <textarea placeholder="Tell us what you need..." />
              <button className="btn" type="submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        className="whatsapp"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Triple F Beauty on WhatsApp"
      >
        WA
      </a>

      <footer>
        <div className="logo">
          Triple F Beauty
          <span>BEAUTY & STYLE</span>
        </div>

        <div className="footer-info">
          Professional beauty services and quality beauty essentials in
          Ojodu Berger, Lagos.
          <br />
          07066977592 • iyaibejif3@gmail.com
          <br />
          © 2026 Triple F Beauty. All rights reserved.
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
