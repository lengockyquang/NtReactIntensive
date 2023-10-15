import React from 'react'

function Footer() {
    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>
                <p className="text-muted">© quanglengocky</p>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>FIREARMS</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pistols</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shotguns</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Rifles</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">User Manuals</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dealer Locator</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Customer Service</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Order History</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Company</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Galleries</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Team Beretta</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Affiliate Program</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer