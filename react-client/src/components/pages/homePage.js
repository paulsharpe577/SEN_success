import React, { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Understand, empower, reinforce.
      <div>
      
  {/* Header */}
  <header>
    <div className="container">
      <div className="intro-text">
        <div className="intro-heading">SEN Success</div>
        <div className="intro-lead-in">Empowering you to take the next step post secondary education</div>
      </div>
    </div>
  </header>
  
  {/* Values */}
<section id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading">Understand, Empower, Reinforce</h2>
        <p className="squiggle">~</p>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-lg-12 text-center">

        <p className="text-muted">
          Choosing the next step for an SEN child post secondary education is an
          important and sensitive time. However, making this choice is far from
          easy. Are you confused about which step to take? Does your research
          only turn up a small number of branded establishments? Exhausted by
          EHCP bureaucracy and worried about your child’s future?{" "}
        </p>
        <p className="text-muted">
          Let me empower you with a greater breadth of awareness. Over the
          course of 3 consultations, I will provide independent advice
          highlighting courses, options and establishments which fit the unique
          needs of your child. Providing you with a greater sense of control and
          confidence about your child’s next step.
        </p>
      </div>
    </div>
  </div>
</section>;
  {/* Portfolio Grid Section */}

  <section id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">A bit about me</h2>
          <p className="squiggle">~</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 portfolio-item">
          <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
            <div>
              <div className="portfolio-hover-content">
              
              </div>
            </div>
            <img src="https://i.postimg.cc/MT2rM3jv/Picture1.jpg" className="img-responsive" alt />
          </a>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 portfolio-item">
          <p className="text-muted"> I’m Jason, a qualified English Teacher with a proven record of helping SEN students succeed. </p>

<p className="text-muted">Growing up having a brother with SEN, I can remember my parent’s agony caused by the heavy burden of decision making and EHCP paperwork.
Having known I always wanted to be a teacher from a young age, alongside my childhood experience looking after my brother, I sought a career in SEN Education – first becoming an SEN Teaching Assistant before qualifying as a Teacher. </p>
<p className="text-muted">
 Knowing the difficult challenges a parent of an SEN child must overcome to achieve success, my mission is to help eliminate confusion, instill confidence and illuminate potential pathways for parents who are beginning to decide what is best for their SEN child, as they approach the end of compulsory education. I endeavor to help provide children with SEN the opportunity to succeed.
</p>
        </div>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">My services<br /><p className="squiggle">~</p></h2>
          
           <h3 className="section-heading">SEN Next Step Package</h3>
          
          <h3 className="text-muted">My aim over the course of 3 consultations will be to understand your child’s needs, empower you with information and help to reinforce your decision for your SEN child. 
Each consultation will last 1 hour online.
<br /> <br />
<i><b>Request a free 30-minute consultation.</b></i>

</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image" id="timeline-image1">
                  <h4>
                  <br />1
                  </h4>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                
                  <h4 className="subheading">Understand</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Your child will be at the heart of this conversation. Their interests, abilities, limitations, EHCP requirements and desires alongside your thoughts and worries should you wish to disclose. This will enable my research to be guided appropriately.
</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image" id="timeline-image2">
                   <h4>
                  <br />2
                  </h4>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  
                  <h4 className="subheading">Empower</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">During this consultation, I will present the options, both academically & vocationally, to you and discuss the best next step for your SEN child. The advantages and disadvantages for all options will be highlighted, empowering you to make the best, informed decision.
</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image" id="timeline-image3">
                  <h4>
                  <br />3
                  </h4>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Reinforce</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">This consultation will be dedicated to a topic of your choice and will depend on our previous conversation. This includes one of the following:  <br />
                  <ul>
<li> An extension of Consultation 2</li>
 <li>CV or Cover letter creation</li> 
 <li>Course application advice and guidance</li>
 </ul>
</p>
                </div>
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section 1 */}
  <section id="team" className="bg-light-gray">
    <div className="container">
      <div className="col-lg-12 text-center">
    <h2 className="section-heading">Other services</h2>
    <p className="squiggle">~</p>
       </div>
    
      <div className="row">
      
        <p className="text-muted"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>Private English Tuition for neurotypical students <br /><br />

<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>Private English Tuition for SEN students <br /><br />

<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>CV or Cover Letter creation <br /><br />

<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>Course application advice and guidance <br /><br />

<i>Each service is charged at an hourly rate – please contact me for further details</i> 
 </p>
      </div>
    </div>
  </section>
  
    {/* Team Section 2 */}
  <section id="testimonials" className="bg-light-gray">
    <div className="container">
    
  
  <h2 className="section-heading">What my clients say...</h2>

      
<div className="jumbotron text-center blue-grey lighten-5">
  {/* Title */}
  <h2 className="card-title h2">David, Bristol</h2>
  {/* Subtitle */}
  {/* Grid row */}
  <div className="row d-flex justify-content-center">
    {/* Grid column */}
    <div className="col-xl-7 pb-2">
      <p className="card-text"><i class="fas fa-quote-left"></i>  While at Bristol Free School, Jason supported my son, Brendan (Year 8 - 9) who has autism. Jason was an excellent teacher - he successfully trod that very fine line between being friendly and supportive, while also holding students to account for their work. Brendan has the greatest respect for Jason, who encouraged him to deliver work that significantly exceeded the targets set and expected from him. Jason has continued to tutor Brendan since leading BFS, so we are grateful to continue to benefit from Jason's talent for teaching.  <i class="fas fa-quote-right"></i>
</p>
    </div>
    {/* Grid column */}
  </div>

</div>
    </div>
  </section>
  
  
  
  {/* Portfolio Modals */}
  {/* Use the modals below to showcase details about your portfolio projects! */}
  {/* Portfolio Modal 1 */}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt />
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
              <p>
                <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
              <ul className="list-inline">
                <li>Date: July 2014</li>
                <li>Client: Round Icons</li>
                <li>Category: Graphic Design</li>
              </ul>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 2 */}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              <h2>Project Heading</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0" alt />
              <p><a href="https://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
              <p>You can preview Startup Framework <a href="https://designmodo.com/startup/?u=787">here</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 3 */}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6" alt />
              <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 4 */}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0" alt />
              <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 5 */}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6" alt />
              <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 6 */}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-content">
      <div className="close-modal" data-dismiss="modal">
        <div className="lr">
          <div className="rl">
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="modal-body">
              {/* Project Details Go Here */}
              <h2>Project Name</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img className="img-responsive img-centered" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt />
              <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
              <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
              <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times" /> Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* jQuery Version 1.11.0 */}
  {/* Bootstrap Core JavaScript */}
  {/* Plugin JavaScript */}
  {/* Contact Form JavaScript */}
  <span style={{height: 20, width: 40, minHeight: 20, minWidth: 40, position: 'absolute', opacity: '0.85', zIndex: 8675309, display: 'none', cursor: 'pointer', backgroundImage: 'url(data:image/png'}} />


    
      </div>
    </div>
    
	
    
    
    
  );
}

export default HomePage;
