
import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  return (
    <section id="contact-page" className="pt-90 pb-120 gray-bg" style={{
      width: "1250px",
      height: "auto",
      marginBottom: "20px",
      marginTop: "20px",
    }}>
      <div>
      <div className="bg-gray-100 py-2">
          <h1 class="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact
            <hr
              class="border-t-2 border-red-700  mb-2 py-2"
              style={{ width: "10%", margin: "15px auto" }}
            />
          </h1>
        </div>
        <div className="row">

          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-7">

            <div className="col-lg-7" >

              <div className="contact-from mt-10" style={{ paddingTop: "5px", }}>
                <div className="section-title">
                  <h2>Get In Touch</h2>
                </div>
                <div className="main-form pt-45">
                  <form
                    id="contact-form"
                    action="#"
                    method="post"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            data-error="Name is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            data-error="Valid email is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            data-error="Subject is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            data-error="Phone is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            data-error="Please, leave us a message."
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <p className="form-message"></p>
                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>


            <div className="rounded overflow-hidden shadow-none">

              <div className="px-5 mt-10 bg-gray-100" >

                <div className="contact-address-container">
                  <ul>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                        <FontAwesomeIcon icon={faHome} />
                        </div>
                        <div className="cont">
                          <p>
                            <strong>Physical Address</strong> : Nairobi-Kenya.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="cont">
                          <p>
                            <strong>Telephone Contacts</strong> : +254 *********** ||
                            +254 ***********
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="cont">
                          <p>
                            <strong>Email Address : </strong>
                            <a href="mailto:info@csk.edu" style={{ color: "blue" }}>
                              <u>admin@gmail.com</u>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;

