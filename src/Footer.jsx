
function Footer() {
  return (
    <footer className="footer">

      {/* FOOTER MAIN CONTENT */}
      <div className="footer-container">

        {/* COMPANY DETAILS */}
        <div className="footer-about">

          <img
            src="/image/rankraze-logo.png"
            alt="RankRaze"
            className="footer-logo"
          />

          <p>
            We're a full-service creative digital agency
            in Chennai and Bangalore, India and we can
            help your business grow. RankRaze specializes
            in creating engaging digital experiences,
            including website design, branding, digital
            marketing and content marketing.
          </p>

          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank">f</a>
            <a href="https://www.instagram.com/" target="_blank">◎</a>
            <a href="https://www.linkedin.com/" target="_blank">in</a>
            <a href="https://www.youtube.com/" target="_blank">▶</a>
          </div>

        </div>

        {/* SERVICES COLUMN 1 */}
        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">Social Media Marketing</a></li>
            <li><a href="#">SEM Services</a></li>
            <li><a href="#">Content Writing</a></li>
            <li><a href="#">Online Reputation Management</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Ecommerce Website Development</a></li>
            <li><a href="#">Vernacular Marketing</a></li>
            <li><a href="#">Influencer Marketing</a></li>
            <li><a href="#">Sentiment Analysis</a></li>
          </ul>
        </div>

        {/* SERVICES COLUMN 2 */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li><a href="#">Video Marketing</a></li>
            <li><a href="#">Video Production</a></li>
            <li><a href="#">2D and 3D Animation</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Web Hosting</a></li>
            <li><a href="#">Web Analytics</a></li>
            <li><a href="#">Augmented Reality</a></li>
            <li><a href="#">Virtual Reality</a></li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Awards & Recognition</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Articles & News</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* CONTACT INFORMATION */}
      <div className="footer-contact">

        <h2>Need More Help?</h2>
        <p>Our friendly support team is here to help.</p>

        <div className="contact-details">

          <div>
            <h4>Address</h4>
            <p>
              2nd Floor, Karuna Conclave, AD 42 & 45,
              4th Ave, Shanthi Colony, Anna Nagar,
              Chennai, Tamil Nadu 600040
            </p>
          </div>

          <div>
            <h4>Email</h4>
            <a href="mailto:info@rankraze.com">
              info@rankraze.com
            </a>
          </div>

          <div>
            <h4>Call Us</h4>
            <a href="tel:+919962262210">
              +91 99622 62210
            </a>
          </div>

        </div>

      </div>

      {/* OFFICE LOCATIONS */}
      <div className="footer-offices">
        <h2>Our Offices & Branches</h2>

        <div className="office-grid">

          <div>
            <h4>India - Head Office - Chennai</h4>
            <p>
              2nd Floor, Karuna Conclave, AD 42 & 45,
              4th Ave, Shanthi Colony, Anna Nagar,
              Chennai, Tamil Nadu 600040
            </p>
          </div>

          <div>
            <h4>India - Registered Office - Chennai</h4>
            <p>
              Plot No. 264, Door No. F/22, F Block,
              2nd Main Road, Anna Nagar East,
              Chennai, Tamil Nadu 600102
            </p>
          </div>

          <div>
            <h4>India - Corporate Office - Chennai</h4>
            <p>
              #249, 1st Floor, 2nd St, TNHB Colony,
              Periyar Nagar West, Korattur,
              Chennai, Tamil Nadu 600080
            </p>
          </div>

          <div>
            <h4>India - Branch Office - Coimbatore</h4>
            <p>
              Lakshmi Mills, Avinashi Road,
              Lakshmi Mills Junction, Pudur,
              Coimbatore, Tamil Nadu 641037
            </p>
          </div>

          <div>
            <h4>India - Branch Office - Ahmedabad</h4>
            <p>
              Mann Residency, Row House, 402,
              opposite Sarathi, Memnagar,
              Ahmedabad, Gujarat 380052
            </p>
          </div>

          <div>
            <h4>India - Branch Office - Chennai</h4>
            <p>
              W-110, 3rd Avenue, Sabari Towers,
              Anna Nagar, Chennai,
              Tamil Nadu 600040
            </p>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          Copyright © 2026 Rankraze, All rights reserved.
        </p>

        <div>
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
