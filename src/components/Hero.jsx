import './Hero.css';
function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <p className="hero-subtitle">
                    WELCOME TO UTTARAKHAND
                </p>
                <h1>
                    Discover the <br />
                    Land of Gods
                </h1>
                <p className="hero-description">
                    Explore breathtaking mountains, peaceful valleys, spritual destinations and unforgatable advantures.
                </p>
                <div className="hero-buttons">
                    <a href="#destinations" className="btn btn-primary">
                        Explore Destinations
                    </a>
                    <a href="#contact" className="btn btn-outline-light">
                        Plan Your Trip
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Hero;