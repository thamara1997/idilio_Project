import ArtCard from "components/ArtCard/ArtCard";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";
import { cardDetails } from "data/data";

const ResourceDesign = () => {
  return (
    <div className="text-center">
      <h6 className="mt-[50px] font-bold">Hola !</h6>
      <p className="font-light text-[15px] px-[200px] mt-[30px] mb-[40px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum quas
        aliquam perspiciatis eius a? Quia quaerat, necessitatibus dolores magnam
        fugit perspiciatis, illum error accusamus, natus repudiandae omnis
        fugiat iure!
      </p>
      <div className="flex justify-around h-[3rem] mx-[60px] gap-[20px] content-center align-middle">
        <div className="relative">
          <input
            type="text"
            className="w-[600px] h-[3rem] rounded-xl border-[0.5px] border-[#fec850] bg-transparent p-[10px]"
          />
          <div className="absolute right-2 top-4">
            <BiSearchAlt />
          </div>
        </div>
        <div className="">
          <select className="w-[300px] select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec850] font-light h-[30px]">
            <option disabled selected>
              Category
            </option>
            <option>Album Cover</option>
            <option>Flyers</option>
            <option>Company Logo</option>
            <option>Book Cover</option>
            <option>Mascot Logo</option>
          </select>
        </div>
        <div className="">
          <select className="w-[300px] select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec850] font-light h-[30px]">
            <option disabled selected>
              Cost
            </option>
            <option>10$-20$</option>
            <option>20$-30$</option>
            <option>30$-50$</option>
            <option>50$-100$</option>
          </select>
        </div>
      </div>

      {/* card Section */}

      <div className="flex justify-center items-center text-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-1 gap-[60px] mx-auto md:grid-cols-3">
          {cardDetails.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <Link to={routeNames.RDesignDetails.replace(":id", i.toString())}>
                <ArtCard name={t.name} price={t.price} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceDesign;
