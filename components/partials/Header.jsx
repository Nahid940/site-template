import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    
<header id="home">
    <div className="header-area">
        <div className="header-top primary-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="header-contact-info d-flex">
                            <div className="header-contact header-contact-phone">
                                <span className="ti-headphone"></span>
                                <p className="phone-number">+0123456789</p>
                            </div>
                            <div className="header-contact header-contact-email">
                                <span className="ti-email"></span>
                                <p className="email-name">support@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="header-social-icon-list">
                            <ul>
                                <li><a href="#"><span className="ti-facebook"></span></a></li>
                                <li><a href="#"><span className="ti-twitter-alt"></span></a></li>
                                <li><a href="#"><span className="ti-dribbble"></span></a></li>
                                <li><a href="#"><span className="ti-google"></span></a></li>
                                <li><a href="#"><span className="ti-pinterest"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-bottom-area header-sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                        <div className="logo">
                            <a href="index.html">
                                <img src="img/logo/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-6 col-6">
                        <div className="header-bottom-icon f-right">
                            <ul>
                                <li className="toggle-search-icon"><a href="#"><span className="ti-search"></span>
                                        <div className="toggle-search-box">
                                            <form action="#" id="searchbox">
                                                <input placeholder="Search" type="text"/>
                                                <button className="button-search"><span className="ti-search"></span></button>
                                            </form>
                                        </div>
                                    </a>
                                </li>
                                <li className="shopping-cart"><a href="#"><span className="ti-shopping-cart"></span>
                                        <span className="shopping-counter">0</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Navbar/>
                    </div>
                    <div className="col-12">
                        <div className="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header
