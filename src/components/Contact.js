import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <contact>
      <head>
        <title>CONTACT</title>
      </head>
      <div>
        <p>Bienvenue</p>
        <p>tetyana.chouteau@gmail.com</p>
        <p>0683276981</p>

        <nav>
          <Link to="/inscription">S'insrire</Link> |{" "}
          <Link to="/connection">Se connecter</Link>
        </nav>
      </div>
    </contact>
  );
}
export default Contact;
