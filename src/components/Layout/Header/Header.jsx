import React from "react";
import banner from "../../../assets/images/banner.png";
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
            <button className="btn btn-primary">Explore More</button>
          </div>
          <div>
          <img src={banner} className="max-w-sm rounded-lg" />
          <div>
            <div>
                <h3 className="text-3xl">
                    5.00
                </h3>
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
