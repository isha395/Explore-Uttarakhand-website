import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-5 col-md-6">
            <h3>Explore Uttarakhand</h3>
            <p>
              Discover the beauty of the Himalayas, from peaceful valleys
              to adventurous mountain escapes.
            </p>

            <div className="footer-social">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#experiences">Experiences</a>
            <a href="#packages">Packages</a>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4>Contact</h4>
            <p>
              <i className="bi bi-geo-alt"></i> Dehradun, Uttarakhand
            </p>
            <p>
              <i className="bi bi-envelope"></i> hello@exploreuttarakhand.com
            </p>
            <p>
              <i className="bi bi-telephone"></i> +91 98765 43210
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Explore Uttarakhand. All rights reserved.</p>
          <span>Made with ❤️ for the Himalayas</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;