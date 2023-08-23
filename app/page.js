import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

    <div>
      <div id="about" className="about-area pt-100 pb-70">
        <div className="container">
            <div className="row">
            
                <div className="col-xl-7 col-lg-7">
                    <div className="about-title-section mb-30">
                        <h3>Welcome To Our Sikkha</h3>
                        <p>Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temin cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure repreh nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occcu idatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Horem ipsum dolor sit amet consectetur adipisicing elit,</p>
                        <button className="theme-btn blue-bg-border mt-20"><span className="btn-text">admit now</span></button>
                    </div>
                </div>
                
                <div className="col-xl-5 col-lg-5">
                    <div className="notice-title-section mb-30">
                        <h3>Notice Board</h3>
                    </div>
                    <div class="widget mb-40 widget-padding white-bg">
                        <div class="sidebar-rc-post">
                            <ul>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb01.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb02.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb03.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb04.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-lg-4">
                    <div className=" mb-30">
                        <h3>News & Events</h3>
                    </div>
                    <div class="widget mb-40 widget-padding white-bg">
                        <div class="sidebar-rc-post">
                            <ul>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb01.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb02.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb03.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb04.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                    <div className=" mb-30">
                        <h3>News & Events</h3>
                    </div>
                    <div class="widget mb-40 widget-padding white-bg">
                        <div class="sidebar-rc-post">
                            <ul>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb01.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb02.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb03.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb04.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4">
                    <div className=" mb-30">
                        <h3>News & Events</h3>
                    </div>
                    <div class="widget mb-40 widget-padding white-bg">
                        <div class="sidebar-rc-post">
                            <ul>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb01.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb02.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex mb-20">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb03.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar-rc-post-main-area d-flex">
                                        <div class="rc-post-thumb">
                                            <a href="course_details.html">
                                                <img src="img/courses/rcourses_thumb04.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="rc-post-content">
                                            <h4>
                                                <a href="course_details.html">How to design mobile apps with full resposibe layout</a>
                                            </h4>
                                            <div class="widget-advisors-name">
                                                <span>Advisor : <span class="f-500">Marcelo</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row pt-65">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="feature-wrapper mb-30">
                        <div className="feature-title-heading">
                            <h3>Scholarship Facility</h3>
                            <span>01</span>
                        </div>
                        <div className="feature-text">
                            <p>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="feature-wrapper mb-30">
                        <div className="feature-title-heading">
                            <h3>Advance Advisor</h3>
                            <span>02</span>
                        </div>
                        <div className="feature-text">
                            <p>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="feature-wrapper mb-30">
                        <div className="feature-title-heading">
                            <h3>Sports & Gaming</h3>
                            <span>03</span>
                        </div>
                        <div className="feature-text">
                            <p>Sorem ipsum dolor sitcon sectet adipis icing elit sed do eiusmod tems. incididune.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* Courses */}
      <div id="courses" className="courses-area courses-bg-height pt-100 pb-70" >
        <div className="container">
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div className="section-title mb-50 text-center">
                        <div className="section-title-heading mb-20">
                            <h1 className="white-color">Our Latest Courses</h1>
                        </div>
                        <div className="section-title-para">
                            <p className="white-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="courses-list">
                <div className="row courses-active">
                  
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}
