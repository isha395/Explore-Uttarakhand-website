import './Destination.css';
import './Destination.css';

import auliImage from '../assets/auli.jpg';
import rishikeshImage from '../assets/rishikesh.jpg';
import mussoorieImage from '../assets/mussoorie.jpg';
import choptaImage from '../assets/chopta.jpg';
import valleyFlowersImage from '../assets/valley-of-flowers.jpg';
import nanitalImage from '../assets/nanital.jpg';
function Destination() {
    const destinations = [
        {
            name: "Auli",
            category: "Snow • Advanture", 
            image: auliImage
        },
        { 
            name: "Rishikesh",
            category: "Advanture • Yoga",
            image: rishikeshImage
        },
        {
            name: "Mussoorie",
            category: "Hills • Nature",
            image: mussoorieImage
        },
        {
            name: "Chopta",
            category: "Trekking • Mountains",
            image: choptaImage
        },
        {
            name: "valley of Flowers",
            category: "Trekking • Nature",
            image : valleyFlowersImage
        },
        { 
            name: "Nanital",
            category: "Lake • Nature",
            image: nanitalImage
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