import React from "react";
import CategoryCard from "components/CategoryCard/CategoryCard";
import AlbumCover from "assets/AlbumCover.jpg";
import PodcastCover from "assets/PodcastCover.jpg";
import BookCover from "assets/BookCover.jpg";
import Flyers from "assets/Flyers.jpg";
import Mascotlogo from "assets/Mascotlogo.jpg";
import Companylogo from "assets/Companylogo.jpg";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Album from "components/Packges/AlbumCover/Album";
import { routeNames } from "routes/route";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Podcast from "components/Packges/Podcast/Podcast";

const NewDesign = () => {
  const card = [
    {
      name: "ALBUM COVER",
      image: AlbumCover,
      link: `/newdesign${routeNames.AlbumCover}`,
    },
    {
      name: "PODCAST COVER",
      image: PodcastCover,
      link: `/newdesign${routeNames.Podcast}`,
    },
    {
      name: "BOOK COVER",
      image: BookCover,
      link: `/newdesign${routeNames.Podcast}`,
    },
    {
      name: "FLYERS",
      image: Flyers,
      link: `/newdesign${routeNames.Podcast}`,
    },
    {
      name: "MASCOT LOGO",
      image: Mascotlogo,
      link: `/newdesign${routeNames.Podcast}`,
    },
    {
      name: "COMPANY LOGO",
      image: Companylogo,
      link: `/newdesign${routeNames.Podcast}`,
    },
  ];
  return (
    <div className="text-center">
      <h6 className="mt-[50px] font-bold">Hola !</h6>
      <p className="font-light text-[15px] px-[200px] mt-[30px] mb-[40px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum quas
        aliquam perspiciatis eius a? Quia quaerat, necessitatibus dolores magnam
        fugit perspiciatis, illum error accusamus, natus repudiandae omnis
        fugiat iuredwd!
      </p>
      <div className="flex justify-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-3 gap-[60px]">
          {card.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <Link to={t.link}>
                <CategoryCard name={t.name} image={t.image} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path={routeNames.AlbumCover} element={<Album />} />
        <Route path={routeNames.Podcast} element={<Podcast />} />
      </Routes>
    </div>
  );
};

export default NewDesign;
