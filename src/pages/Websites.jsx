import React from "react";
import { websites } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Websites = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Websites
        </span>
      </h1>
      <div className="mt-5 flex flex-col text-slate-500">
        <p>These are some of my most recent websites</p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {websites.map((website) => (
          <div className="lg:w-[400] w-full" key={website.name}>
            <div className="">
              <img
                src={website.image}
                alt="website Icon"
                className="w-1/2 h-1/2 object-contain rounded-3xl"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {website.name}
              </h4>
              <p className="mt-2 text-slate-500">{website.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Websites;
