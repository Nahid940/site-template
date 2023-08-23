import React from 'react'

function Footer() {
  return (
    <footer id="Contact">
        <div className="footer-area primary-bg pt-150">
            <div className="container">
                <div className="footer-top pb-35">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-logo">
                                    <img src="img/logo/logo_2.png" alt=""/>
                                </div>
                                <div className="footer-para">
                                    <p>Sorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercition ullamco laboris nisi </p>
                                </div>
                                <div className="footer-socila-icon">
                                    <span>Follow Us</span>
                                    <div className="footer-social-icon-list">
                                        <ul>
                                            <li><a href="#"><span className="ti-facebook"></span></a></li>
                                            <li><a href="#"><span className="ti-twitter-alt"></span></a></li>
                                            <li><a href="#"><span className="ti-dribbble"></span></a></li>
                                            <li><a href="#"><span className="ti-google"></span></a></li>
                                            <li><a href="#"><span className="ti-pinterest"></span></a></li>
                                            <li><a href="#"><span className="ti-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-heading">
                                    <h1>Quick Links</h1>
                                </div>
                                <div className="footer-menu clearfix">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Condition</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Consultation</a></li>
                                        <li><a href="#">Team Member</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Who we are</a></li>
                                        <li><a href="#">Get a Quote</a></li>
                                        <li><a href="#">Recent Post</a></li>
                                        <li><a href="#">Who we are</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 d-lg-none d-xl-block col-md-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-heading">
                                    <h1>Recent Post</h1>
                                </div>
                                <div className="recent-post d-flex mb-25">
                                    <div className="recent-post-thumb">
                                        <img src="img/post/recent_post1.jpg" alt=""/>
                                    </div>
                                    <div className="recent-post-text">
                                        <p>Neque porro quisquam est qui dolorem ipsum</p>
                                        <div className="footer-time">
                                            <span className="ti-time"></span>
                                            <span className="footer-published-time">05 May 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-post d-flex">
                                    <div className="recent-post-thumb">
                                        <img src="img/post/recent_post1.jpg" alt=""/>
                                    </div>
                                    <div className="recent-post-text">
                                        <p>Neque porro quisquam est qui dolorem ipsum</p>
                                        <div className="footer-time">
                                            <span className="ti-time"></span>
                                            <span className="footer-published-time">05 May 2018</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4  col-md-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-heading">
                                    <h1>Contact Us</h1>
                                </div>
                                <div className="footer-contact-list">
                                    <div className="single-footer-contact-info">
                                        <span className="ti-headphone "></span>
                                        <span className="footer-contact-list-text">+003 (1234) 7894</span>
                                    </div>
                                    <div className="single-footer-contact-info">
                                        <span className="ti-email "></span>
                                        <span className="footer-contact-list-text">youremail@gmail.com</span>
                                    </div>
                                    <div className="single-footer-contact-info">
                                        <span className="ti-location-pin"></span>
                                        <span className="footer-contact-list-text">123 New Street, 6th Floor, New York</span>
                                    </div>
                                </div>
                                <div className="opening-time">
                                    <span>Opening Hour</span>
                                    <span className="opening-date">
                                        Sun - Sat : 10:00 am - 05:00 pm
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <span><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer