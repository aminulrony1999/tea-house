import React from "react";
import tea1 from "../../assets/images/tea-1.png";
import tea2 from "../../assets/images/tea-2.png";
import tea3 from "../../assets/images/tea-3.png";
import tea4 from "../../assets/images/tea-4.png";
const Main = () => {
  return (
    <div className="container mx-auto">
      <section className="text-center my-24">
        <h2 className="text-5xl font-extrabold mb-5">Our Featured Products</h2>
        <p className="text-base font-medium lg:max-w-3xl mx-auto mb-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        {/* Feature tea Card Container */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* First Card */}
          <div className="card p-6 bg-[#F4F4F4]">
            <figure className="px-10 pt-10">
              <img src={tea1} alt="tea1" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Milk Tea</h2>
              <p className="text-base font- text-[#777]">
                Creamer could be replaced by fresh milk
              </p>
            </div>
          </div>
          {/* Second Card */}
          <div className="card p-6 bg-[#F4F4F4]">
            <figure className="px-10 pt-10">
              <img src={tea2} alt="tea2" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Black Tea</h2>
              <p className="text-base font- text-[#777]">
                Creamer could be replaced by fresh milk
              </p>
            </div>
          </div>
          {/* Third Card */}
          <div className="card p-6 bg-[#F4F4F4]">
            <figure className="px-10 pt-10">
              <img src={tea3} alt="tea3" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Lemon Tea</h2>
              <p className="text-base font- text-[#777]">
                Creamer could be replaced by fresh milk
              </p>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="card p-6 bg-[#F4F4F4]">
            <figure className="px-10 pt-10">
              <img src={tea4} alt="tea4" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Green Tea</h2>
              <p className="text-base font- text-[#777]">
                Creamer could be replaced by fresh milk
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
