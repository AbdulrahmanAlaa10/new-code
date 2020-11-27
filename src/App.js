import React from 'react'
import "./App.css";
import * as emailjs from "emailjs-com";

export default function App() {
     function sendEmail(e) {
          e.preventDefault();
      
          emailjs.sendForm('service_ydbhfkm', 'template_nvi7wku', e.target, 'user_ij3kwOIkZW04EkmSokTrN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }
  
     return (
          <div>

     <section class="preloader">
          <div class="spinner">

               <span class="spinner-rotate"></span>
               
          </div>
     </section>



     <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div class="container">

          <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                    <img src="img/127912030_177965543970134_6775963719694765914_n.png" />
                    <a href="#" class="navbar-brand">X-TEAM</a>
               </div>

               <div class="collapse navbar-collapse mr-auto">
                    <ul class="nav navbar-nav navbar-nav-first">
                         <li><a href="#top" class="smoothScroll">Home</a></li>
                         <li><a href="#feature" class="smoothScroll">feature</a></li>
                         <li><a href="#about" class="smoothScroll">About</a></li>
                         <li><a href="#courses" class="smoothScroll">Courses</a></li>
                         <li><a href="#contact" class="smoothScroll">Contact</a></li>
                         <li><a href="#"><i class="fa fa-phone-square" aria-hidden="true" style={{color:"green"}}></i> +20 106 318 3700</a></li>

                    </ul>

               </div>

          </div>
     </section>



     <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner" role="listbox">
  <div class="item active">
     <img src="/images/slider-image3.jpg" alt="..." />
     <div class="carousel-caption">
     </div>
     </div>
     <div class="item">
     <img src="/images/slider-image2.jpg" alt="..." />
     <div class="carousel-caption">
     </div>
     </div>
     <div class="item">
     <img src="/images/slider-image1.jpg" alt="..." />
     <div class="carousel-caption">
     </div>
     </div>
  </div>
  <div className="words">
          <h1>WelCome EveryOne In 
          <br /> 
          X-TEAM Lets Go.!
          </h1>
     </div>

  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

     <section id="feature">
          <div class="container">
               <div class="row">

                    <div class="col-md-4 col-sm-4">
                         <div class="feature-thumb">
                              <span>01</span>
                              <h3>Clean Code</h3>
                              <p>You will learn How to write Clean Code and why to write Clean Code.</p>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="feature-thumb">
                              <span>02</span>
                              <h3>Responsive Design</h3>
                              <p>You will learn Bootstrap4 and Responsive Design Media Query and Grid System.</p>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="feature-thumb">
                              <span>03</span>
                              <h3>Latest Technology</h3>
                              <p>You will make any website in 7 months by latest technology like ReactJs.</p>
                         </div>
                    </div>

               </div>
          </div>
     </section>



     <section class="tabs-content" id="blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                            <h1>Some Information about X-TEAM</h1>
                            <p>After seven months, you will be able to create an integrated website.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="wrapper">
                        <div class="col-md-6">
                            <ul class="tabs clearfix" data-tabgroup="first-tab-group">
                                <li><a href="#tab1" class="active">
                                    Front-End Developer In 3 Months
                                    <ul class="info-post">
                                        <li><i class="fa fa-user"></i>Abdulrahman</li>
                                        <li><i class="fa fa-calendar"></i>1December2020</li>
                                        <li><i class="fa fa-wechat"></i>120 Student+</li>
                                    </ul>
                                </a></li>
                                <li><a href="#tab2">
                                   Back-End Developer In 3 Months
                                    <ul class="info-post">
                                        <li><i class="fa fa-user"></i>Mohamed</li>
                                        <li><i class="fa fa-calendar"></i>1 february 2021</li>
                                        <li><i class="fa fa-wechat"></i>120 +</li>
                                    </ul>
                                </a></li>
                                <li><a href="#tab3">
                                    Full Stack Developer
                                    <ul class="info-post">
                                        <li><i class="fa fa-like"></i>100%</li>
                                        <li><i class="fa fa-calendar"></i>1 Jnue 2021</li>
                                        <li><i class="fa fa-dollar"></i>100$</li>
                                    </ul>
                                </a></li>

                                <li><a href="#tab4">
                                   Subscription to this course Contact with 
                                    <ul class="info-post">
                                        <li><i class="fa fa-user"></i>Ahemd El-helaly</li>
                                        <li><i class="fa fa-calendar"></i>AnyTime</li>
                                    </ul>
                                </a></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <div id="first-tab-group" class="tabgroup">
                                <div id="tab1">
                                    <img src="img/127912030_177965543970134_6775963719694765914_n.png" alt="" />
                                    <div class="text-content">
                                        <h4>Front-End Developer In 3 Months</h4>
                                        <ul class="info-post">
                                             <li><i class="fa fa-user"></i>Abdulrahman</li>
                                             <li><i class="fa fa-calendar"></i>1 December 2020</li>
                                             <li><i class="fa fa-wechat"></i>120 ++</li>
                                        </ul>
                                        <p>You will learn HTML, HTML5, CSS, CSS3, BOOTSTRAP4, JavaScript, ReactJs, Redux, Hooks, Git, Netfliy, Vercal, How to upload Your Website.</p>
                                        <div class="primary-button"><a href="#contact-us">Continue Reading</a></div>
                                    </div>
                                </div>
                                <div id="tab2">
                                    <img src="img/128204758_409727993540904_4465208236546276158_n.png" alt="" />
                                    <div class="text-content">
                                        <h4>Back-End Developer In 3 Months</h4>                                        
                                        <ul class="info-post">
                                             <li><i class="fa fa-user"></i>Mohamed</li>
                                             <li><i class="fa fa-calendar"></i>1 february 2021</li>
                                             <li><i class="fa fa-wechat"></i>120 +</li>
                                        </ul>
                                        <p>You will learn PHP, Laravel, Wordpress, MySql, OOP, Design Pattern, Valaidtion.</p>
                                        <div class="primary-button"><a href="#contact-us">Continue Reading</a></div>
                                    </div>
                                </div>
                                <div id="tab3">
                                    <img src="img/pexels-ricardo-esquivel-1964471.jpg" alt="" />
                                    <div class="text-content">
                                        <h4>Full Stack Developer</h4>                                 
                                        <ul class="info-post">
                                             <li><i class="fa fa-like"></i>100%</li>
                                             <li><i class="fa fa-calendar"></i>1 Jnue 2021</li>
                                             <li><i class="fa fa-dollar"></i>100$</li>
                                        </ul>
                                        <p>You will make any website in 7 months and Upload Your Website fro Free Host.</p>
                                        <div class="primary-button"><a href="#contact-us">Continue Reading</a></div>
                                    </div>
                                </div>
                                <div id="tab4">
                                <img src="img/pexels-olya-kobruseva-5417674.jpg" alt="" />
                                    <div class="text-content">
                                        <h4> Subscription to this course Contact with</h4>                                        
                                        <ul class="info-post">
                                             <li><i class="fa fa-user"></i>Ahemd El-helaly</li>
                                             <li><i class="fa fa-calendar"></i>AnyTime</li>
                                        </ul>
                                        <p>Talking with M. Ahmed El-helaly To know everything about this course ----- +201063183700</p>
                                        <div class="primary-button"><a href="#contact-us">Continue Reading</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



     <section id="about">
          <div class="container">
               <div class="row">

                    <div class="col-md-6 col-sm-12">
                         <div class="about-info">
                              <h2>Start your journey to a better life with online practical courses</h2>

                              <figure>
                                   <span><i class="fa fa-users"></i></span>
                                   <figcaption>
                                        <h3>Professional Trainers</h3>
                                        <p>We will give you all our experience so that you can work in less than a year, We will be careful to prepare you for that.</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i class="fa fa-certificate"></i></span>
                                   <figcaption>
                                        <h3>International Certifications</h3>
                                        <p>You will receive an udemy certified certificate in order for your CV to be eligible for admission to most companies.</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i class="fa fa-bar-chart-o"></i></span>
                                   <figcaption>
                                        <h3>100$ for 7 months</h3>
                                        <p>You will make any website in 7 months and Upload Your Website fro Free Host.</p>
                                   </figcaption>
                              </figure>
                         </div>
                    </div>

                    <div class="col-md-offset-1 col-md-4 col-sm-12">
                         <div class="entry-form">
                         <form onSubmit={sendEmail}>
                                   <h2>SendMessage today</h2>
                              <div className="row pt-5 mx-auto">
                                   <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="email" className="backk form-control" placeholder="Email Address" name="email" />
                                   </div>
                                   <div className="col-8 form-group pt-2 mx-auto">
                                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                   </div>
                                   <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" className="btn btn-info btn-block" style={{marginBottom:"20px"}} name="Send Message"></input>
                                   </div>
                              </div>
                         </form>
                         </div>
                    </div>

               </div>
          </div>
     </section>

     <div>
          <div id="courses" className="hhh">
            <div className="container"> 
               <video controls loop autoPlay muted width="100%">
                    <source src="/videos/WhatsApp Video 2020-11-23 at 7.28.34 PM.mp4" />
               </video>
            </div>
          </div>
     </div>

     <section id="contact">
          <div class="container">
               <div class="row">

                    <div class="col-md-6 col-sm-12">
                         <form id="contact-form" role="form" onSubmit={sendEmail}>
                              <div class="section-title">
                                   <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                              </div>

                              <div class="col-md-12 col-sm-12">
                                   <input type="text" className="form-control" placeholder="Enter full name" name="name" required />

                                   <input type="email" className="form-control" placeholder="Enter Email Address" name="email" required />
 
                                   <input type="text" className="form-control" placeholder="00x xxxxxxxxxxx" name="phone" required />

                                   <input type="text" className="form-control" placeholder="country" name="country" />
                                   <textarea className="form-control" id="" cols="30" rows="8" placeholder="Tell us about your message" name="message"></textarea>

                              </div>

                              <div class="col-md-4 col-sm-12">
                              <input type="submit" className="form-control" name="Send Message" value="Send Message"></input>
                              </div>

                         </form>
                    </div>

                    <div class="col-md-6 col-sm-12">
                         <div class="contact-image">
                              <img src="images/slider-image3.jpg" class="img-responsive" alt="Smiling Two Girls" />
                         </div>
                    </div>

               </div>
          </div>
     </section>       


     <footer id="footer">
          <div class="container">
               <div class="row">

                    <div class="col-md-4 col-sm-6">
                         <div class="footer-info">
                              <div class="section-title">
                                   <h2>Headquarter</h2>
                              </div>
                              <address>
                                   <p>Alexandria Street 69<br /></p>
                              </address>

                              <ul class="social-icon">
                                   <li><a href="https://www.facebook.com/XTEAM0000/" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                   <li><a href="https://www.instagram.com/abdulrahman_alaa10/" target="_blank" class="fa fa-instagram"></a></li>

                              </ul>

                              <div class="copyright-text"> 
                                   <p>Copyright &copy; 2020 X-TEAM</p>
                                   
                                   <p>Design By: Abdulrahman</p>
                              </div>

                         </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                         <div class="footer-info">
                              <div class="section-title">
                                   <h2>Contact Info</h2>
                              </div>
                              <address>
                                   <p>+20 106 318 3700</p>
                                   <p><a href="mailto:youremail.co">x.team0103@gmail.com</a></p>
                              </address>

                              <div class="footer_menu">
                                   <h2>Quick Links</h2>
                                   <ul>
                                        <li><a href="https://www.facebook.com/XTEAM0000/" target="_blank" class="fa fa-facebook-square">Facebook</a></li>
                                        <li><a href="https://www.instagram.com/abdulrahman_alaa10/" target="_blank" class="fa fa-instagram">Instagram</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-12">
                         <div class="footer-info newsletter-form">

                              <div>
                                   <div class="col-md-4 col-sm-12">
                                   <div class="back-to-top">
                                        <a href="#top">
                                             <i class="fa fa-angle-up"></i>
                                             back to top
                                        </a>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
          </div>
          </div>
     </footer>


 
          </div>
     )
}
