import ArtCard from "components/ArtCard/ArtCard";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";
import ResourcesService from "Services/ResourcesService";
import { Resource } from "Types/Resources";

const ResourceDesign = () => {
  const [resources, setResources] = useState<Array<Resource>>();
  const [cards, setCards] = useState<Array<Resource>>();

  useEffect(() => {
    ResourcesService.getAllResource().then((res: any) => {
      if (res.data.status === 1) {
        setResources(res.data.data);
        setCards(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");

  useEffect(() => {
    const filteredCards = resources?.filter(
      (card) =>
        card.title.toLowerCase().includes(filter1.toLowerCase()) &
        card.amount.toString().includes(filter2) &
        card.category.toLowerCase().includes(filter3.toLowerCase())
    );
    setCards(filteredCards);
    if (filter1 == "" && filter2 == "" && filter3 == "") {
      setCards(resources);
    }
  }, [filter1, filter2, filter3]);

  console.log(cards);

  return (
    <div className="text-center">
      <h6 className="mt-[50px] font-bold">Hola !</h6>
      <p className="font-light text-[15px] px-[200px] mt-[30px] mb-[40px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum quas
        aliquam perspiciatis eius a? Quia quaerat, necessitatibus dolores magnam
        fugit perspiciatis, illum error accusamus, natus repudiandae omnis
        fugiat iure!
      </p>
      <div className="flex w-[70%] justify-around h-[3rem] mx-auto gap-[20px] content-center align-middle">
        <div className="relative">
          <input
            type="text"
            className="w-[600px] h-[3rem] rounded-xl border-[0.5px] border-[#fec850] bg-transparent p-[10px]"
            value={filter1}
            onChange={(e) => setFilter1(e.target.value)}
          />
          <div className="absolute right-2 top-4">
            <BiSearchAlt />
          </div>
        </div>
        <div className="">
          <select
            className="w-[300px] select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec850] font-light h-[30px]"
            value={filter3}
            onChange={(e) => setFilter3(e.target.value)}
          >
            <option value="">Category</option>
            <option>ALBUM COVER</option>
            <option>PODCAST COVER</option>
            <option>FLYER</option>
            <option>COMPANY LOGO</option>
            <option>BOOK COVER</option>
            <option>MASCOT LOGO</option>
          </select>
        </div>
        <div className="">
          <select
            className="w-[300px] select  bg-transparent text-center rounded-xl border-[0.5px] border-[#fec850] font-light h-[30px]"
            value={filter2}
            onChange={(e) => setFilter2(e.target.value)}
          >
            <option value="">Cost</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
          </select>
        </div>
      </div>

      {/* card Section */}

      <div className="flex justify-center items-center text-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-1 gap-[60px] mx-auto md:grid-cols-3">
          {cards?.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <Link to={routeNames.RDesignDetails.replace(":id", t.resourceId)}>
                <ArtCard details={t} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceDesign;
