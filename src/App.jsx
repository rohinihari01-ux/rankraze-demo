
import "./App.css";
import Footer from "./Footer";
import "./Footer.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
         
          
<div className="logo">
  <img
    src="/image/rankraze-logo.png"
   
  />
</div>

        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Awards</a>

          <a href="#">Services⌄</a>
          <a href="#">Portfolio⌄</a>
          <a href="#">Case Studies</a>
          <a href="#">Blogs</a>
          <a href="#">Careers⌄</a>
          <a href="#">Geographics⌄</a>
          <a href="#">CSR Activities</a>
          <a href="#">Contact Us</a>
        </div>

        <button className="started-btn">Get Started</button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="award">
            India's Most Trusted SEO Agencies 2026
          </div>

          <h3>A ROI Driven</h3>

          <h1>
            Digital Marketing <span>Agency</span>
            <br />
            <span>in Chennai</span>
          </h1>

          <p className="description">
            RankRaze is a digital marketing company in Chennai
            helping businesses grow through SEO, Google Ads,
            social media marketing and branding. With 10+ years
            of experience, we have generated 233K+ leads for
            2,000+ brands across industries.
          </p>

          {/* RECOGNITION */}
          <div className="recognition">
            <p>RECOGNIZED BY</p>

            <div className="brand-logos">
              <div className="toi">TOI</div>

              <div className="silicon">
                silicon<span>india</span>
              </div>

              <div className="ist">
                <b>IST</b>
                <small>indianstartuptimes</small>
              </div>

              <div className="ecell">
                🚀
                <small>E-CELL IIT MADRAS</small>
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Our Services
            </button>

            <button className="secondary-btn">
              View Our Case Study
            </button>
          </div>

        </div>

        {/* RIGHT CONSULTATION FORM */}
        <div className="form-card">

          <h2>Let's Grow Your Business Online</h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your form is ready.");
          }}>

            <label>COMPANY NAME <span>*</span></label>

            <div className="input-box">
              <span>▤</span>
              <input
                type="text"
                placeholder="Your Company Name"
                required
              />
            </div>

            <label>PHONE NUMBER <span>*</span></label>

            <div className="input-box">
              <span>♧</span>
              <input
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>

            <label>EMAIL ADDRESS <span>*</span></label>

            <div className="input-box">
              <span>✉</span>
              <input
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <label>
              TELL SOMETHING
              <small> (optional)</small>
            </label>

            <div className="input-box message-box">
              <span>▢</span>
              <textarea
                placeholder="Tell us about your business goals..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Get Free Consultation ↗
            </button>

          </form>

          <p className="secure">
            100% Secure & Confidential. Instant response.
          </p>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}
      <a href="#" className="whatsapp">
        <span>☎</span>
      </a>

      {/* ONLINE STATUS */}
      <div className="online-box">
        Online
      </div>
   <Footer />
    </>
  );
}

export default App;
