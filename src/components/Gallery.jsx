import './Gallery.css';
function Gallery() {

  const galleryImages = [
    {
      image: "/src/assets/auli.jpg",
      title: "Auli",
      category: "Adventure",
    },
    {
      image: "/src/assets/rishikesh.jpg",
      title: "Rishikesh",
      category: "River & Yoga",
    },
    {
      image: "/src/assets/mussoorie.jpg",
      title: "Mussoorie",
      category: "Hills",
    },
    {
      image: "/src/assets/chopta.jpg",
      title: "Chopta",
      category: "Trekking",
    },
    {
      image: "/src/assets/nanital.jpg",
      title: "Nanital",
      category: "Lakes",
    },
    {
      image: "/src/assets/valley-of-flowers.jpg",
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