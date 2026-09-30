import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact-box">

          <div className="contact-content">
            <p>PLAN YOUR JOURNEY</p>

            <h2>Ready to Explore Uttarakhand?</h2>

            <span>
              Let us help you create an unforgettable Himalayan experience.
            </span>
          </div>

          <form className="contact-form">

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <select name="destination" required>
                <option value="">Choose Destination</option>
                <option value="Auli">Auli</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Mussoorie">Mussoorie</option>
                <option value="Chopta">Chopta</option>
                <option value="Valley of Flowers">Valley of Flowers</option>
                <option value="Nanital">Nanital</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your trip..."
                rows="4"
                required></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Enquiry
              <i className="bi bi-arrow-right"></i>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;