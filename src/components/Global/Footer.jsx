import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright" style={{color: "#0F2C67"}}>Copyright &copy; Zona Literasi 2022</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i class="fa-brands fa-twitter fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i class="fa-brands fa-facebook fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i class="fa-brands fa-instagram-square fa-3x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <i class="fa-brands fa-whatsapp fa-2x" style={{color: "#325288"}}></i>
              </li>
              <li className="list-inline-item">
              <i class="fa-regular fa-envelope fa-2x" style={{color: "#325288"}}></i>
              </li>
              <br/>
              <li className="list-inline-item" >
                <a href="#something" style={{color: "#35589A"}}>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;