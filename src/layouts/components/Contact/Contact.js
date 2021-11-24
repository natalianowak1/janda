import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h3>
        Kontakt
        <br />
      </h3>
      <div className="contactBox">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.4422541591!2d18.996752615723974!3d50.24632387944768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce5dd5c40ba7%3A0xfb98835128263e5f!2sPi%C4%99kna%2043%2C%2040-592%20Katowice!5e0!3m2!1spl!2spl!4v1598700710539!5m2!1spl!2spl"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        
        <div className="contactDesc">
          <h2>Dane Konatktowe</h2>
          <br />
          <br />
          <br />
            Kancelaria Radcy Prawnego Agnieszka Janda
            <br />
            ul. Piękna 43/15
            <br />
            40-641 Katowice
            <br />
            <br />
            e-mail: kancelaria@home.pl
            <br />
            <br />
            kom. + 48 790 444 127
            <br />
            <br />
            <br />
            <br />
            <div className="contactDescIcon">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faTwitterSquare} letterSpacing="20px"/>
            <FontAwesomeIcon icon={faInstagramSquare} letterSpacing="20px"/>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
