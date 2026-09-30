import './ExperienceDetails.css';

function ExperienceDetails({ experience, onBack }) {

  return (
    <section className="experience-details">

      <div className="experience-details-container">

        <button className="back-btn" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Back
        </button>

        <div className="experience-details-content">

          <img
            src={experience.image}
            alt={experience.title}
            className="experience-details-image"
          />

          <div className="experience-details-icon">
            <i className={`bi ${experience.icon}`}></i>
          </div>

          <h1>{experience.title}</h1>

          <p className="experience-details-description">
            {experience.description}
          </p>

          <p className="experience-details-text">
            {experience.details}
          </p>

          <div className="experience-info">

            <div>
              <i className="bi bi-geo-alt"></i>
              <span>Uttarakhand, India</span>
            </div>

            <div>
              <i className="bi bi-heart"></i>
              <span>Perfect for Travelers</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ExperienceDetails;