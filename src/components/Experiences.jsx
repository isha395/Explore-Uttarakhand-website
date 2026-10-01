import { useState } from 'react';
import './Experiences.css';
import ExperienceDetails from './ExperienceDetails';
import trekkingImage from '../assets/trekking.jpg';
import campingImage from '../assets/camping.jpg';
import raftingImage from '../assets/river-rafting.jpg';
import yogaImage from '../assets/yoga.jpg';
import spiritualImage from '../assets/spritual.jpg';
import snowImage from '../assets/snow-advanture.jpg';

function Experiences() {

  const experiences = [
    {
      icon: "bi-person-walking",
      title: "Trekking",
      image: trekkingImage,
      description: "Walk through beautiful Himalayan trails and discover breathtaking views.",
      details: "Explore the stunning Himalayan trails of Uttarakhand with scenic mountain views, peaceful forests and unforgettable trekking experiences."
    },
    {
      icon: "bi-house",
      title: "Camping",
      image: campingImage,
      description: "Spend peaceful nights surrounded by mountains, forests and stars.",
      details: "Enjoy peaceful nights under the stars, surrounded by beautiful mountains and forests. Experience bonfires, nature walks and unforgettable Himalayan camping."
    },
    {
      icon: "bi-water",
      title: "River Rafting",
      image: raftingImage,
      description: "Experience thrilling river adventures through the Himalayan waters.",
      details: "Feel the excitement of rafting through the Himalayan rivers. Rishikesh offers thrilling rapids, beautiful landscapes and an unforgettable adventure."
    },
    {
      icon: "bi-heart-pulse",
      title: "Yoga & Wellness",
      image: yogaImage,
      description: "Relax your mind and body with yoga and wellness experiences.",
      details: "Refresh your mind and body with peaceful yoga sessions, meditation and wellness experiences surrounded by the natural beauty of Uttarakhand."
    },
    {
      icon: "bi-stars",
      title: "Spiritual Journey",
      image: spiritualImage,
      description: "Explore sacred temples and peaceful spiritual destinations.",
      details: "Discover the spiritual side of Uttarakhand by visiting sacred temples, peaceful valleys and famous pilgrimage destinations such as Kedarnath and Badrinath."
    },
    {
      icon: "bi-snow",
      title: "Snow Adventure",
      image: snowImage,
      description: "Enjoy snow activities and winter adventures in the mountains.",
      details: "Experience the magic of winter in the Himalayas with snow-covered landscapes, skiing, snow activities and exciting mountain adventures in places like Auli."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedExperience,setSelectedExperience] = useState(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };
  if (selectedExperience) {
    return (
      <ExperienceDetails
        experience={selectedExperience}
        onBack={() => setSelectedExperience(null)}
      />
    );
  }
  return (
    <section className="experiences" id="experiences">

      <div className="container">

        <div className="section-heading">
          <p>EXPERIENCE UTTARAKHAND</p>

          <h2>Adventure Beyond Boundaries</h2>

          <span>
            Create unforgettable memories with experiences for every traveler.
          </span>
        </div>

        <div className="experience-carousel">

          <button
            className="carousel-arrow left-arrow"
            onClick={previousSlide}
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <div className="experience-track">

            {experiences.map((experience, index) => {

              const position =
                (index - activeIndex + experiences.length) %
                experiences.length;

              return (
                <div
                  className={`experience-card position-${position}`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                <img src={experience.image}alt={experience.title} className="experience-card-image"/>
                  <div className="experience-icon">
                    <i className={`bi ${experience.icon}`}></i>
                  </div>

                  <h3>{experience.title}</h3>

                  <p>{experience.description}</p>

                  <button
                  className="explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedExperience(experience);
                  }}
                >
                  Explore
                  <i className="bi bi-arrow-right"></i>
                </button>

                </div>
              );
            })}

          </div>

          <button
            className="carousel-arrow right-arrow"
            onClick={nextSlide}
          >
            <i className="bi bi-arrow-right"></i>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Experiences;