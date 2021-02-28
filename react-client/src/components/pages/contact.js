import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2i5tl1",
        "template_w4aei4u",
        e.target,
        "user_XbZDG9YL8fBorlrniAkuf"
      )
      .then(
        (result) => {
          console.log("Submited OK, message: " + result.text);
        },
        (error) => {
          console.log("Error, email not sent, message: " + error.text);
        }
      );

    alert("Success! Your message has been sent.");
    document.getElementById("contactForm").reset();
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div id="contactus" className="col-lg-12 text-center">
            <h2 className="section-heading">Contact</h2>
            <h3>
              <i>
                <b>Request a free 30-minute consultation</b>
              </i>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              className="contact-form"
              name="sentMessage"
              id="contactForm"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name *"
                      id="name"
                      name="user_name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      id="email"
                      name="user_email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone *"
                      id="phone"
                      name="contact_number"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message *"
                      id="message"
                      name="message"
                      required
                      data-validation-required-message="Please enter a message."
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="clearfix" />
                <div id="success-div" className="col-lg-12 text-center">
                  <div id="success" />
                  <button id="submit-button" type="submit" value="Send" className="btn btn-xl">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
