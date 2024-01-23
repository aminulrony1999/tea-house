import React from "react";
import banner from "../../../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-7xl font-extrabold">
              It's good <br /> tea time at The <br /> Tea House
            </h1>
            <p className="py-6">
              Tea and Botanical Solutions Supplier Give Optimum Satisfaction To
              Your Taste Buds.
            </p>
            <button className="btn btn-primary border-none bg-gradient-to-r from-gradient-start to-gradient-end">Explore More</button>
          </div>
          <div>
            <img src={banner} className="max-w-sm" />
            <div className="flex items-center drop-shadow-lg gap-3 bg-white p-5 w-60 -mt-16">
            <FontAwesomeIcon className="text-3xl text-[#FFF082]" icon={faStar} />
              <div>
                <h3 className="text-3xl">5.00</h3>
                <p>Trust Pilot Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
