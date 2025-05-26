import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants/index.js";

const CTA = () => {
  return (
    <div>
      <section className="cta">
        <p className="cta-text">
          Have a project in mind ? <br className="sm:block hidden" />
          Lets build something together !{" "}
        </p>
        <Link className="btn" to="/contact">
          Contact
        </Link>
      </section>
      <div className="social-btns">
        {socialLinks.map((social) => (
          <a target="_blank" href={social.link} className={social.class}>
            <img
              src={social.iconUrl}
              alt="Project Icon"
              className="w-1/2 h-1/2 object-contain z-50"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CTA;
