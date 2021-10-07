import React from 'react'

const Home = () => {
    return (
        <div class="stretched">
           <div id="wrapper" class="clearfix">

{/* <!-- Header
============================================= -->
 */}<header id="header" class="transparent-header" data-sticky-class="not-dark">
    <div id="header-wrap">
        <div class="container">
            <div class="header-row">

                {/* <!-- Logo
                ============================================= -->
                 */}<div id="logo">
                    <a href="index.html" class="standard-logo" data-dark-logo="asset/img/logo-filvelop.svg"><img src="asset/img/logo-filvelop.svg" alt="Filvelop Logo"/></a>
                    <a href="index.html" class="retina-logo" data-dark-logo="asset/img/logo-filvelop.svg"><img src="asset/img/logo-filvelop.svg" alt="Filvelop Logo"/></a>
                </div>{/* <!-- #logo end --> */}

                <div class="header-misc">
                    <a href="signup.html" class="button button-orange rounded-pill ls0 font-weight-medium my-0 ml-2 d-none d-sm-flex dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sign Up</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="signup.html">Sign Up</a>
                        <a class="dropdown-item" href="dashboard.html">Dashboard</a>
                    </div>
                   {/*  <!-- Top Search
                    ============================================= -->
                    */} <div id="top-search" class="header-misc-icon">
                        <a href="#" id="top-search-trigger"><i class="icon-line-search"></i><i class="icon-line-cross"></i></a>
                    </div>{/* <!-- #top-search end --> */}
                </div>

                <div id="primary-menu-trigger">
                    <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                </div>

                {/* <!-- Primary Navigation
                ============================================= -->
                 */}<nav class="primary-menu">

                    <ul class="menu-container">
                        <li class="menu-item">
                            <a class="menu-link" href="about.html"><div>About</div></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="discussion-forum.html"><div>Discussion</div></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="happenings.html"><div>Happenings</div></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="colleges.html"><div>Colleges</div></a>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="exam-listing.html"><div>Exams</div></a>
                            <ul class="sub-menu-container">
                                <li class="menu-item">
                                    <a class="menu-link" href="exam-details.html"><div>Exam Details</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-window.html" target="_blank"><div>Test Window</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-submission.html" target="_blank"><div>Test Submission</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-analysis.html" target="_blank"><div>Test Analysis</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="solutions.html" target="_blank"><div>Solutions</div></a>
                                </li>
                                <li class="menu-item">
                                    <a class="menu-link" href="test-resources.html"><div>Test Resources</div></a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a class="menu-link" href="login.html"><div>Login</div></a>
                        </li>
                    </ul>

                </nav>{/* <!-- #primary-menu end --> */}

                <form class="top-search-form" action="search.html" method="get">
                    <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off"/>
                </form>

            </div>
        </div>
    </div>
    <div class="header-wrap-clone"></div>
</header>{/* <!-- #header end --> */}

<section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
    <div class="slider-inner">

        <div class="swiper-container swiper-parent">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="container">
                        <div class="slider-caption">
                            <div class="row d-flex align-items-center">
                                <div class="col-md-6">
                                    <a href="#"  class="button button-light button-circle">Helped 1000+ Students</a>
                                    <h2  data-delay="200">lorem <span>Ipsum</span><br /> dolor sit amet</h2>
                                    <p class="d-none d-sm-block" data-delay="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in egestas mi egestas quam. Lectus eget viverra fermentum elit, tortor nec, eleifend. Egestas consequat donec curabitur amet.</p>
                                    <a href="#" class="button button-circle button-orange mt-4" data-delay="600">Join Now!</a>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative text-center">
                                        <img src="asset/img/banner-girl.png"  data-delay="100" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide-bg" style={{backgroundImage: `url(${'banner-bg.jpg'})`, backgroundPosition: 'center top'}}></div>
                </div>
            </div>
        </div>

        <a href="#" data-scrollto="#content" data-offset="100" class="one-page-arrow dark"><i class="icon-line-arrow-down animated fadeInDown"></i></a>

    </div>
</section>

{/* <!-- Content
============================================= --> */}
<section id="content" class="bg-white">
    <div class="content-wrap">
        <section id="timeline-wrapper">
            <div class="container">
                <h1 class="titular-title font-weight-normal center font-secondary font-normal mb-3">What will you get?</h1>
                <div class="row">
                    <div class="timeline-block">
                        <div class="timeline-events">
                            <div class="row event-bg-a align-items-center center-line">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">1</span>
                                    <div class="event-body shadow">
                                        <div class="person-image pull-left ">
                                            <img src="img/mit-id.png" alt="person" />
                                        </div>
                                        <div class="event-content">
                                            <h4 class="text-left">MIT-ID</h4>
                                            <p>Pune, Maharashtra</p>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><small>Established in 1984</small></span>
                                            <div class="d-flex bd-highlight">
                                                <div class="p-2 flex-fill bd-highlight">
                                                    <span class="text-muted text-left" style={{display:'block', margin: 0}}><small>Ownership</small></span>
                                                    <p>Private</p>
                                                </div>
                                                <div class="p-2 flex-fill bd-highlight">
                                                    <span class="text-muted text-left" style={{display:'block', margin: 0}}><small>Median Salary</small></span>
                                                    <p>32 LPA</p>
                                                </div>
                                                <div class="p-2 flex-fill bd-highlight">
                                                    <span class="text-muted text-left" style={{display:'block', margin: 0}}><small>Ranking</small></span>
                                                    <p>1</p>
                                                </div>
                                            </div>
                                            <div class="row text-center">
                                                <div class="col-lg-6 col-md-12"><a href="#" class="button button-border button-circle btn-block">Download Brochure</a></div>
                                                <div class="col-lg-6 col-md-12"><a href="#" class="button button-circle button-orange btn-block">Apply now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of left event <--> */}
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Apply for your target colleges and examinations effortlessly</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><p>Browse through our comprehensive list of colleges and examinations to apply for. We provide on-call/chat support for any queries regarding the application process in real-time.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-b align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Manage and track your progress </h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><p>Filvelop provides a personalized dashboard for the students to view the progress of their application process and their analysis of past performances. The students can access the dashboard at their convenience to check for any updates.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of left event <--> */}
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">2</span>
                                    <div class="event-body shadow">
                                        <img src="img/graph.svg" alt="Graph" class="img-fluid" />
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-c align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">3</span>
                                    <div class="event-body shadow">
                                        <img src="img/chart.svg" alt="Chart" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Attempt previous year question papers with updated evaluations</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: '0'}}><p>Check your performance by solving the previous year's papers of your chosen entrance examinations. The scores will be evaluated based on the current pattern of the exam to give realistic results.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-d align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Get a personalized analysis of your results</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin:0 }}><p>Through rigorous evaluations, we provide a detailed insight into your strengths and weaknesses. The analysis allows you to enhance your performance by focussing on the key areas and improve your test scores.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of left event <--> */}
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">4</span>
                                    <div class="event-body shadow">
                                        <img src="img/marks.svg" alt="Marks" class="img-fluid" />
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-a align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">5</span>
                                    <div class="event-body bg-transparent border-0">
                                        <img src="img/connections.png" alt="Connections" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Connect with peers and career counselors</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><p>Find a supportive and healthy community of aspirants like you to share study strategies, tips, and experiences. Our panel of career counsellors are available to guide you and answer all your career related queries.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-b align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Multipurpose integrated wallet for all payments</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><p>Wallet amount can be used across all transactions in the website and convert rewards into wallet balance.</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of left event <--> */}
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">6</span>
                                    <div class="event-body shadow">
                                        <img src="img/wallet.svg" alt="Wallet" class="img-fluid" />
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                            <div class="row event-bg-c align-items-center">
                                <div class="event l-event col-md-6 col-sm-6 col-xs-8 "><span class="thumb">7</span>
                                    <div class="event-body bg-transparent border-0">
                                        <img src="img/connections.png" alt="Connections" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="event r-event col-md-6 col-sm-6 col-xs-8 ">
                                    <div class="event-body bg-transparent border-0">
                                        <div class="event-content">
                                            <h3 class="text-left">Do not miss out any notification.</h3>
                                            <span class="text-muted text-left" style={{display:'block', margin: 0}}><p>Keep posted with all the updates in time and rest assured that you don’t miss an opportunity)</p></span>
                                        </div>
                                    </div>
                                </div>{/* <!-- end of right event <--> */}
                            </div>
                            <div class="clearfix"></div>
                        </div>{/* <!-- end of timeline events -->
  */}                       <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>

        <div class="section topmargin-sm footer-stick bg-light pt-5">
            <div class="container">
             
                <h1 class="titular-title font-weight-normal center font-secondary font-normal mb-5">Testimonials</h1>
                <div class="row mt-4 col-mb-50">

                    <div class="col-md-6">
                        <div class="slider-wrap">
                            <div id="card-slider" class="slider">
                              <div class="slider-item">
                                  <div class="animation-card_image">
                                      <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
                                  </div>
                                  <div class="animation-card_content">
                                      <h4 class="animation-card_content_title title-2">Charlize Theron 1</h4>
                                      <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                                      <p class="animation-card_content_city">New York, NY</p>
                                  </div>
                              </div>
                              <div class="slider-item">
                                  <div class="animation-card_image">
                                      <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
                                  </div>
                                  <div class="animation-card_content">
                                      <h4 class="animation-card_content_title title-2">Charlize Theron 2</h4>
                                      <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                                      <p class="animation-card_content_city">New York, NY</p>
                                  </div>
                              </div>
                              <div class="slider-item">
                                  <div class="animation-card_image">
                                      <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
                                  </div>
                                  <div class="animation-card_content">
                                      <h4 class="animation-card_content_title title-2">Charlize Theron 3</h4>
                                      <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                                      <p class="animation-card_content_city">New York, NY</p>
                                  </div>
                              </div>
                              <div class="slider-item">
                                  <div class="animation-card_image">
                                      <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
                                  </div>
                                  <div class="animation-card_content">
                                      <h4 class="animation-card_content_title title-2">Charlize Theron 4</h4>
                                      <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                                      <p class="animation-card_content_city">New York, NY</p>
                                  </div>
                              </div>
                              <div class="slider-item">
                                  <div class="animation-card_image">
                                      <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
                                  </div>
                                  <div class="animation-card_content">
                                      <h4 class="animation-card_content_title title-2">Charlize Theron 5</h4>
                                      <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
                                      <p class="animation-card_content_city">New York, NY</p>
                                  </div>
                              </div>
                          </div>
                          </div>
                        {/* <!--<a href="#" class="button button-border button-dark button-rounded button-large ml-0 topmargin-sm">Learn more</a>--> */}
                    </div>

                    <div class="col-md-5 offset-md-1 center">
                        <img data-animate="fadeInRight" src="img/india-map.png" alt="India map" class="img-fluid"/>
                    </div>

                </div>

            </div>
        </div>
    </div>
</section>{/* <!-- #content end --> */}

{/* <!-- Footer
============================================= --> */}
<footer id="footer" class="dark">
    <div class="container clearfix">

        <div class="promo promo-border p-4 p-lg-5 p-md-4 p-sm-3">
            <div class="row align-items-center">
                <div class="col-12 col-lg">
                    <h3>Experience the India’s First of its <span>kind Automated</span> Entrance Applications Platform</h3>
                </div>
                <div class="col-12 col-lg-auto mt-4 mt-lg-0">
                    <a href="#" class="button button-circle button-orange button-large button-rounded m-0">Register Now</a>
                </div>
            </div>
        </div>

        {/* <!-- Footer Widgets
        ============================================= -->
         */}<div class="footer-widgets-wrap">

            <div class="row">

                <div class="col-lg-3">

                    <div class="row">
                        <div class="col-md-4 col-lg-12">
                            <div class="widget clearfix">

                                <img src="asset/img/logo-filvelop.svg" alt="Image" class="Filvelop Logo"/>

                                {/* <!--<p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards.</p>

                                <div style="background: url('images/world-map.png') no-repeat center center; background-size: 100%;">
                                    <address>
                                        <strong>Headquarters:</strong><br>
                                        795 Folsom Ave, Suite 600<br>
                                        San Francisco, CA 94107<br>
                                    </address>
                                    <abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br>
                                    <abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br>
                                    <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
                                </div>-->
 */}
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-lg-9">

                    <div class="row col-mb-50">
                        <div class="col-md-3">

                            <div class="widget widget_links clearfix">

                                <h4>Services</h4>

                                <ul>
                                    <li><a href="discussion-forum.html">Discussion</a></li>
                                    <li><a href="happenings.html">Happenings</a></li>
                                    <li><a href="colleges.html">Colleges</a></li>
                                    <li><a href="exam-listing.html">Exams</a></li>
                                </ul>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="widget widget_links clearfix">

                                <h4>Company</h4>

                                <ul>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Licensing</a></li>
                                </ul>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="widget widget_links clearfix">

                                <h4>Support</h4>

                                <ul>
                                    <li><a href="#">Getting Started</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Suggest a Feature</a></li>
                                    <li><a href="#">Report a bug</a></li>
                                </ul>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="widget widget_links clearfix">

                                <h4>Follow Us</h4>

                                <div class="d-flex flex-row">
                                    <a href="#" class="social-icon si-small si-borderless si-facebook">
                                        <i class="icon-facebook"></i>
                                        <i class="icon-facebook"></i>
                                    </a>
                                    <a href="#" class="social-icon si-small si-borderless si-linkedin">
                                        <i class="icon-linkedin"></i>
                                        <i class="icon-linkedin"></i>
                                    </a>
                                    <a href="#" class="social-icon si-small si-borderless si-twitter">
                                        <i class="icon-twitter"></i>
                                        <i class="icon-twitter"></i>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>{/* <!-- .footer-widgets-wrap end --> */}

    </div>

    {/* <!-- Copyrights
    ============================================= -->
     */}<div id="copyrights">

        <div class="container text-center text-uppercase">

            © 2021 Filvelop. All rights reserved.

        </div>

    </div>{/* <!-- #copyrights end --> */}
</footer>{/* <!-- #footer end --> */}

</div>{/* <!-- #wrapper end --> */}

{/* <!-- Go To Top
============================================= -->
 */}<div id="gotoTop" class="icon-angle-up"></div>

        </div>
    )
}

export default Home
