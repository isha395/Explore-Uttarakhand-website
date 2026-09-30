import './Packages.css';
function Packages( { onExplore }) {
    const packages = [
        {
            title: "Weekend Escape",
            duration: "3D/2N",
            location: "Mussoorie",
            price: "₹6,999",
            icon: "bi-building",
        },
        {
            title: "Adventure Trip",
            duration: "4D/3N",
            location: "Rishikesh",
            price: "₹8,999",
            icon: "bi-compass",
        },
        {
            title: "Spiritual Journey",
            duration: "6D/5N",
            location: "Kedarnath • Badrinath",
            price: "₹14,999",
            icon: "bi-stars",
        },
        {
            title: "Himalayan Explorer",
            duration: "5D/4N",
            location: "Auli • Chopta",
            price: "₹11,999",
            icon: "bi-tree",
        }
    ];

    return (
        <section className="packages" id="packages">
            <div className="container">

                <div className="section-heading">
                    <p>TRAVEL PACKAGES</p>
                    <h2>Choose Your Uttarakhand Journey</h2>
                    <span>
                        Carefully planned experiences for an unforgettable Himalayan escape.
                    </span>
                </div>

                <div className="row g-4">

                    {packages.map((pkg, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>

                            <div className="package-card">

                                <div className="package-icon">
                                    <i className={`bi ${pkg.icon}`}></i>
                                </div>

                                <h3>{pkg.title}</h3>

                                <p className="package-duration">
                                    <i className="bi bi-calendar3"></i>
                                    {pkg.duration}
                                </p>

                                <p className="package-location">
                                    <i className="bi bi-geo-alt"></i>
                                    {pkg.location}
                                </p>

                                <div className="package-bottom">

                                    <div>
                                        <small>Starting from</small>
                                        <strong>{pkg.price}</strong>
                                    </div>

                                    <a
                                        href="#package-details"
                                        className="package-btn"
                                        onClick={() => onExplore(pkg.title)}
                                        >
                                        Explore
                                        <i className="bi bi-arrow-right"></i>
                                        </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Packages;