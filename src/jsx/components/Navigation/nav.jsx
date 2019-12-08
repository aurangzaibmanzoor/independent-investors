import React from 'react';
const Nav = () => {
    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg bg-white" style={{overflowY: "hidden"}} id="header">
                <a className="navbar-brand" href="#"><img src="./img/logo.png" alt="Logo Image" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars text-dark"></span>
                </button>
                <div className="call text-white d-lg-none">
                    <i className="fas fa-phone-volume"></i>
                    <p>+44 203 695 1157</p>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">TESTIMONIALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">WHAT WE OFFER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
                <div className="call text-white d-lg-block nav-media">
                    <i className="fas fa-phone-volume ml-3"></i>
                    <p className="text-white ml-2 d-inline">+44 203 695 1157</p>
                </div>
            </nav>
        </header>
    )
}
export default Nav;