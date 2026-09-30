import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">

                <a className="navbar-brand fw-bold" href="#home">
                    Explore Uttarakhand
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#hero">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#destinations">Destination</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#experiences">Experiences</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#packages">Packages</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;