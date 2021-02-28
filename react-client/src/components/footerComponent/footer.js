import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <footer>
            <div className="container">
              <div className="row"></div>
              <div className="row">
                <div className="col-md-4">
                  <span className="copyright">
                    Copyright © SEN Success 2021
                  </span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li>
                      <a href="https://twitter.com/sen_success">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/sensuccess.uk">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jasongillman88">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </footer>
    );
  }
}

export default Footer;