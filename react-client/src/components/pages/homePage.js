import React, { useState } from "react";

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
              <div className="intro-lead-in">
                Empowering you to take the next step post secondary education
              </div>
            </div>
          </div>
        </header>
        
        {/* Values */}
        
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">
                  Understand, Empower, Reinforce
                </h2>
                <p className="squiggle">~</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-12 text-center">
                <p className="text-muted">
                  Choosing the next step for an SEN child post secondary
                  education is an important and sensitive time. However, making
                  this choice is far from easy. Are you confused about which
                  step to take? Does your research only turn up a small number
                  of branded establishments? Exhausted by EHCP bureaucracy and
                  worried about your child’s future?
                </p>
                <p className="text-muted">
                  Let me empower you with a greater breadth of awareness. Over
                  the course of 3 consultations, I will provide independent
                  advice highlighting courses, options and establishments which
                  fit the unique needs of your child. Providing you with a
                  greater sense of control and confidence about your child’s
                  next step.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About */}
        
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
                <a
                  href="#portfolioModal1"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <div>
                    <div className="portfolio-hover-content"></div>
                  </div>
                  <img
                    src="https://i.postimg.cc/MT2rM3jv/Picture1.jpg"
                    className="img-responsive"
                    alt
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 portfolio-item">
                <p className="text-muted">
                  
                  I’m Jason, a qualified English Teacher with a proven record of
                  helping SEN students succeed.
                </p>

                <p className="text-muted">
                  Growing up having a brother with SEN, I can remember my
                  parent’s agony caused by the heavy burden of decision making
                  and EHCP paperwork. Having known I always wanted to be a
                  teacher from a young age, alongside my childhood experience
                  looking after my brother, I sought a career in SEN Education –
                  first becoming an SEN Teaching Assistant before qualifying as
                  a Teacher.
                </p>
                <p className="text-muted">
                  Knowing the difficult challenges a parent of an SEN child must
                  overcome to achieve success, my mission is to help eliminate
                  confusion, instill confidence and illuminate potential
                  pathways for parents who are beginning to decide what is best
                  for their SEN child, as they approach the end of compulsory
                  education. I endeavor to help provide children with SEN the
                  opportunity to succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services */}
        
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">
                  My services
                  <br />
                  <p className="squiggle">~</p>
                </h2>

                <h3 className="section-heading">SEN Next Step Package</h3>

                <h3 className="text-muted">
                  My aim over the course of 3 consultations will be to
                  understand your child’s needs, empower you with information
                  and help to reinforce your decision for your SEN child. Each
                  consultation will last 1 hour online.
                  <br /> <br />
                  <i>
                    <b>Request a free 30-minute consultation.</b>
                  </i>
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
                        <p className="text-muted">
                          Your child will be at the heart of this conversation.
                          Their interests, abilities, limitations, EHCP
                          requirements and desires alongside your thoughts and
                          worries should you wish to disclose. This will enable
                          my research to be guided appropriately.
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
                        <p className="text-muted">
                          During this consultation, I will present the options,
                          both academically & vocationally, to you and discuss
                          the best next step for your SEN child. The advantages
                          and disadvantages for all options will be highlighted,
                          empowering you to make the best, informed decision.
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
                        <p className="text-muted">
                          This consultation will be dedicated to a topic of your
                          choice and will depend on our previous conversation.
                          This includes one of the following: <br />
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
        
        {/* Other services */}
        
        <section id="team" className="bg-light-gray">
          <div className="container">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Other services</h2>
              <p className="squiggle">~</p>
            </div>

            <div className="row">
              <p className="text-muted">
                <span
                  class="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
                Private English Tuition for neurotypical students <br />
                <br />
                <span
                  class="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
                Private English Tuition for SEN students <br />
                <br />
                <span
                  class="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
                CV or Cover Letter creation <br />
                <br />
                <span
                  class="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                ></span>
                Course application advice and guidance <br />
                <br />
                <i>
                  Each service is charged at an hourly rate – please contact me
                  for further details
                </i>
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        
        <section id="testimonials" className="bg-light-gray">
          <div className="container">
            <h2 className="section-heading">What my clients say...</h2>

            <div className="jumbotron text-center blue-grey lighten-5">
             
              <h2 className="card-title h2">David, Bristol</h2>
              
             
              <div className="row d-flex justify-content-center">
             
                <div className="col-xl-7 pb-2">
                  <p className="card-text">
                    <i class="fas fa-quote-left"></i> While at Bristol Free
                    School, Jason supported my son, Brendan (Year 8 - 9) who has
                    autism. Jason was an excellent teacher - he successfully
                    trod that very fine line between being friendly and
                    supportive, while also holding students to account for their
                    work. Brendan has the greatest respect for Jason, who
                    encouraged him to deliver work that significantly exceeded
                    the targets set and expected from him. Jason has continued
                    to tutor Brendan since leading BFS, so we are grateful to
                    continue to benefit from Jason's talent for teaching.{" "}
                    <i class="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
