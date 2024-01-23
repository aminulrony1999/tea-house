import React from "react";
import tea1 from "../../assets/images/tea-1.png";
import tea2 from "../../assets/images/tea-2.png";
import tea3 from "../../assets/images/tea-3.png";
import tea4 from "../../assets/images/tea-4.png";
import fresh1 from "../../assets/images/fresh-1.png";
import fresh2 from "../../assets/images/fresh-2.png";
import clientPic from "../../assets/images/client.png";
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
      {/* Great tea and fresh tea section */}
      <section className="flex gap-14 flex-col lg:flex-row my-24">
        <div className="grid gap-7 flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-xl h-32 bg-gradient-to-r from-[#F00] to-blue-[#FF8938] opacity-10"></div>
          <div className="row-span-2 bg-[#E6A6231A] rounded-lg py-12">
            <img className="mx-auto" src={fresh1} alt="fresh1" />
          </div>
          <div className="row-span-2 rounded-lg py-12 bg-[#5776391A]">
            <img className="mx-auto" src={fresh2} alt="fresh2" />
          </div>
          <div className="rounded-xl h-32 bg-gradient-to-r from-[#000000] to-[#D9D9D9] opacity-10"></div>
        </div>
        <div className="space-y-5 flex-1">
          <h3 className="text-5xl font-extrabold">
            Great Tea, Freshly <br />
            Presented
          </h3>
          <p>
            The meaning of gong cha is chanese is to provide the best tea to
            emperor from all possessions . It represents the highest quality and
            self expectation. Establishing in 2006, Gong cha had been deeply
            appreciated by its custoers because of good words of mouth and
            unique customized service orginated from Taiwan.
          </p>
          <h4 className="text-xl font-extrabold">Unique Taste</h4>
          <p>
            A Unique and different style from other teapots gives a luxurious
            and minimalist impression
          </p>
          <h4 className="text-xl font-extrabold mt-8">Premium Quality</h4>
          <p>
            Premium Quality that makes tea more elegant and more durable when
            you use it.
          </p>
        </div>
      </section>
      {/* Super Client Section */}
      <section className="flex flex-col lg:flex-row gap-14 my-24 px-16 py-24 rounded-xl bg-gradient-to-r from-[#FF8938] to-[#F00]">
        <div className="space-y-7">
          <h2 className="text-5xl text-white font-extrabold">
            Meet Our Super <br /> Clients
          </h2>
          <p className="text-white">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Show All</button>
        </div>
        <div>
          <div className="relative p-10 rounded-lg bg-white">
            <img className="absolute -left-10 -top-7" src={clientPic} alt="" />
            <p className="text-[#777777]">
              We are providing the best and suitable home insurance services for
              the people who are interested to treatment
            </p>
            <h4 className="text-base font-bold mt-5">Ilham Yuda</h4>
            <p className="font-medium">Businessman</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
