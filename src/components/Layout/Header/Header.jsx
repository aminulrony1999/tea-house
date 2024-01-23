import React from "react";
import banner from "../../../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { MdArrowOutward } from "react-icons/md";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="my-20">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div>
            <h1 className="text-7xl font-extrabold">
              It's good <br /> tea time at The <br /> Tea House
            </h1>
            <p className="py-6">
              Tea and Botanical Solutions Supplier Give Optimum Satisfaction To
              Your Taste Buds.
            </p>
            <button className="btn btn-primary border-none bg-gradient-to-r from-gradient-start to-gradient-end">
              Explore More
              <MdArrowOutward />
            </button>
          </div>
          <div>
            <img src={banner} />
            <div className="flex items-center drop-shadow-lg gap-3 bg-white p-5 w-60 -mt-16">
              <FontAwesomeIcon
                className="text-3xl text-[#FFF082]"
                icon={faStar}
              />
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
