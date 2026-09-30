import "./PackageDetails.css";

function PackageDetails({ selectedPackage, onBack }) {

    const packages = {
        "Weekend Escape": {
            location: "Mussoorie",
            duration: "3 Days / 2 Nights",
            price: "₹6,999",
            images: ["/src/assets/Mussoorie.jpg",
                "/src/assets/dehradun.jpg"],
            description:
                "Enjoy a peaceful getaway to the beautiful hills of Mussoorie, surrounded by scenic mountain views and refreshing nature.",
            highlights: [
                "Explore Mall Road",
                "Visit Kempty Falls",
                "Mountain sightseeing",
                "Beautiful sunset views"
            ],
            itinerary: [
                "Day 1 – Arrival in Mussoorie & local sightseeing",
                "Day 2 – Kempty Falls & nearby attractions",
                "Day 3 – Breakfast, sightseeing & departure"
            ]
        },

        "Adventure Trip": {
            location: "Rishikesh",
            duration: "4 Days / 3 Nights",
            price: "₹8,999",
            images: ["/src/assets/rishikesh.jpg",
                "/src/assets/rishikesh2.jpg"],
            description:
                "Experience the adventure and natural beauty of Rishikesh with exciting activities, riverside views and peaceful surroundings.",
            highlights: [
                "River rafting",
                "Camping experience",
                "Explore Laxman Jhula",
                "Ganga riverside views"
            ],
            itinerary: [
                "Day 1 – Arrival & riverside exploration",
                "Day 2 – River rafting & adventure activities",
                "Day 3 – Camping & local sightseeing",
                "Day 4 – Breakfast & departure"
            ]
        },

        "Spiritual Journey": {
            location: "Kedarnath • Badrinath",
            duration: "6 Days / 5 Nights",
            price: "₹14,999",
            images: ["/src/assets/badrinath.jpg",
                "/src/assets/kedarnath.jpg"],
            description:
                "Experience a peaceful spiritual journey through the sacred destinations of Kedarnath and Badrinath surrounded by the Himalayas.",
            highlights: [
                "Kedarnath Temple",
                "Badrinath Temple",
                "Himalayan scenery",
                "Peaceful spiritual experience"
            ],
            itinerary: [
                "Day 1 – Arrival & overnight stay",
                "Day 2 – Journey towards Kedarnath",
                "Day 3 – Kedarnath Temple visit",
                "Day 4 – Journey towards Badrinath",
                "Day 5 – Badrinath Temple visit",
                "Day 6 – Return journey"
            ]
        },

        "Himalayan Explorer": {
            location: "Auli • Chopta",
            duration: "5 Days / 4 Nights",
            price: "₹11,999",
            images: [
                "/src/assets/auli.jpg",
                "/src/assets/chopta.jpg"
            ],
            description:
                "Explore the breathtaking Himalayan landscapes of Auli and Chopta with scenic views, peaceful trails and unforgettable mountain experiences.",
            highlights: [
                "Explore Auli",
                "Visit Chopta",
                "Mountain sightseeing",
                "Nature walks & photography"
            ],
            itinerary: [
                "Day 1 – Arrival & local exploration",
                "Day 2 – Explore Auli",
                "Day 3 – Travel towards Chopta",
                "Day 4 – Nature walk & sightseeing",
                "Day 5 – Breakfast & departure"
            ]
        }
    };

    if (selectedPackage) {
        const pkg = packages[selectedPackage];

        return (
            <section className="package-details" id="package-details">

                <div className="container">

                    <button className="back-btn" onClick={onBack}>
                    <i className="bi bi-arrow-left"></i>
                    Back to Packages
                </button>

                    <div className="package-detail-box">

                        {pkg.images ? (
                            <div className="detail-images">
                                {pkg.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={selectedPackage}
                                    />
                                ))}
                            </div>
                        ) : pkg.image ? (
                            <img
                                className="detail-main-image"
                                src={pkg.image}
                                alt={selectedPackage}
                            />
                        ) : null}

                        <div className="detail-content">

                            <p className="detail-label">
                                UTTARAKHAND EXPERIENCE
                            </p>

                            <h1>{selectedPackage}</h1>

                            <div className="detail-info">

                                <span>
                                    <i className="bi bi-geo-alt"></i>
                                    {pkg.location}
                                </span>

                                <span>
                                    <i className="bi bi-calendar3"></i>
                                    {pkg.duration}
                                </span>

                                <span>
                                    <i className="bi bi-currency-rupee"></i>
                                    {pkg.price}
                                </span>

                            </div>

                            <p className="detail-description">
                                {pkg.description}
                            </p>

                            <h2>Trip Highlights</h2>

                            <div className="highlights">
                                {pkg.highlights.map((item, index) => (
                                    <div key={index}>
                                        <i className="bi bi-check-circle-fill"></i>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <h2>Itinerary</h2>

                            <div className="itinerary">
                                {pkg.itinerary.map((item, index) => (
                                    <div key={index}>
                                        <span>{index + 1}</span>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="plan-btn">
                                Plan Your Trip
                                <i className="bi bi-arrow-right"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </section>
        );
    }

    return null;
}

export default PackageDetails;

