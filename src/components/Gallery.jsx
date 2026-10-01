import './Gallery.css';

import auliImage from '../assets/auli.jpg';
import rishikeshImage from '../assets/rishikesh.jpg';
import mussoorieImage from '../assets/mussoorie.jpg';
import choptaImage from '../assets/chopta.jpg';
import nanitalImage from '../assets/nanital.jpg';
import valleyFlowersImage from '../assets/valley-of-flowers.jpg';

function Gallery() {

  const galleryImages = [
    {
      image: auliImage,
      title: "Auli",
      category: "Adventure",
    },
    {
      image: rishikeshImage,
      title: "Rishikesh",
      category: "River & Yoga",
    },
    {
      image: mussoorieImage,
      title: "Mussoorie",
      category: "Hills",
    },
    {
      image: choptaImage,
      title: "Chopta",
      category: "Trekking",
    },
    {
      image: nanitalImage,
      title: "Nanital",
      category: "Lakes",
    },
    {
      image: valleyFlowersImage,
      title: "Valley of Flowers",
      category: "Nature",
    },
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="container">

        <div className="section-heading">
          <p>EXPLORE THROUGH OUR LENS</p>

          <h2>Moments From Uttarakhand</h2>

          <span>
            Discover the beauty of the Himalayas through unforgettable moments.
          </span>
        </div>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <div className="gallery-item" key={index}>

              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">

                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <i className="bi bi-arrow-up-right"></i>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;