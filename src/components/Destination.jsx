import './Destination.css';
function Destination() {
    const destinations = [
        {
            name: "Auli",
            category: "Snow • Advanture", 
            image: "/src/assets/auli.jpg"
        },
        { 
            name: "Rishikesh",
            category: "Advanture • Yoga",
            image: "/src/assets/rishikesh.jpg"
        },
        {
            name: "Mussoorie",
            category: "Hills • Nature",
            image: "/src/assets/mussoorie.jpg",
        },
        {
            name: "Chopta",
            category: "Trekking • Mountains",
            image: "/src/assets/chopta.jpg",
        },
        {
            name: "valley of Flowers",
            category: "Trekking • Nature",
            image :"/src/assets/valley-of-flowers.jpg"
        },
        { 
            name: "Nanital",
            category: "Lake • Nature",
            image: "/src/assets/nanital.jpg"
        }
    ];
    return (
        <section className="destinations" id="destinations">
            <div className="container">
                <div className="section-heading">
                    <p> EXPLORE UTTARAKHAND </p>
                    <h2>Popular Destinations </h2>
                    <span>Find your perfect escape in the heart of the Himalayas.</span>
                </div>
                <div className="row g-4">
                    {destinations.map((destination,index) =>  (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="destination-card">
                                <img src={destination.image}
                                alt={destination.name}/>
                                <div className="destination-info">
                                    <h3>{destination.name}</h3>
                                    <p>{destination.category}</p>
                                    <a href="#contact" className="explore-btn">Explore</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Destination;