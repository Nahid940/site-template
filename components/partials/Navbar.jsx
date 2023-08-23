import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="main-menu f-right">
        <nav id="mobile-menu">
            <ul>
                <li>
                    <a href="#home">Home</a>
                    <ul className="submenu">
                        <li>
                            <a href="index.html">Home style 1</a>
                        </li>
                        <li>
                            <a href="index_2.html">Home style 2</a>
                        </li>
                        <li>
                            <a href="index_3.html">Home style 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#about">PAGES</a>
                    <ul className="submenu">
                        <li>
                            <a href="about_us.html">About Us</a>
                        </li>
                        <li>
                            <a href="advisors.html">Advisors</a>
                        </li>
                        <li>
                            <a href="advisors_details.html">Advisors Details</a>
                        </li>
                        <li>
                            <a href="faq.html">FAQ</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#about">ELEMENTS</a>
                    <ul className="submenu">
                        <li>
                            <a href="events_01.html">Events 01</a>
                        </li>
                        <li>
                            <a href="events_02.html">Events 02</a>
                        </li>
                        <li>
                            <a href="event_details.html">Events Details</a>
                        </li>
                        <li>
                            <a href="shop_pages.html">Shop</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="course_01.html">Courses</a>
                    <ul className="submenu">
                        <li>
                            <a href="course_01.html">Courses 01</a>
                        </li>
                        <li>
                            <a href="course_02.html">Courses 02</a>
                        </li>
                        <li>
                            <a href="course_03.html">Courses 03</a>
                        </li>
                        <li>
                            <a href="course_details.html">Course Details</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="events_01.html">NEWS</a>
                    <ul className="submenu">
                        <li>
                            <a href="grid_news.html">Blog 3 Column</a>
                        </li>
                        <li>
                            <a href="standard_blog.html">Blog Sidebar</a>
                        </li>
                        <li>
                            <a href="news_details.html">Blog Details</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="contact_us.html">CONTACT</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar