import React from "react";
import CategoryCard from "components/CategoryCard/CategoryCard";
import { routeNames } from "routes/route";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import AlbumCoverImg from "assets/AlbumCover.jpg";
import PodcastCoverImg from "assets/PodcastCover.jpg";
import BookCoverImg from "assets/BookCover.jpg";
import FlyerImg from "assets/Flyers.jpg";
import MascotlogoImg from "assets/Mascotlogo.jpg";
import CompanylogoImg from "assets/Companylogo.jpg";

import AlbumCover from "components/Packges/AlbumCover/AlbumCover";
import Podcast from "components/Packges/Podcast/Podcast";
import BookCover from "components/Packges/BookCover/BookCover";
import Flyer from "components/Packges/Flyer/Flyer";
import Mascotlogo from "components/Packges/MascotLogo/Mascotlogo";
import CompanyLogo from "components/Packges/CompanyLogo/CompanyLogo";

const NewDesign = (user: any) => {
  const handleClickScroll = () => {
    const element = document.getElementById("section1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const card = [
    {
      name: "ALBUM COVER",
      image: AlbumCoverImg,
      link: `/newdesign${routeNames.AlbumCover}`,
    },
    {
      name: "PODCAST COVER",
      image: PodcastCoverImg,
      link: `/newdesign${routeNames.Podcast}`,
    },
    {
      name: "BOOK COVER",
      image: BookCoverImg,
      link: `/newdesign${routeNames.BookCover}`,
    },
    {
      name: "FLYERS",
      image: FlyerImg,
      link: `/newdesign${routeNames.Flyer}`,
    },
    {
      name: "MASCOT LOGO",
      image: MascotlogoImg,
      link: `/newdesign${routeNames.Mascotlogo}`,
    },
    {
      name: "COMPANY LOGO",
      image: CompanylogoImg,
      link: `/newdesign${routeNames.Companylogo}`,
    },
  ];
  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }
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
              <Link to={t.link} onClick={handleClickScroll}>
                <CategoryCard name={t.name} image={t.image} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="section1">
        <Routes>
          <Route path={routeNames.AlbumCover} element={<AlbumCover />} />
          <Route path={routeNames.Podcast} element={<Podcast />} />
          <Route path={routeNames.BookCover} element={<BookCover />} />
          <Route path={routeNames.Flyer} element={<Flyer />} />
          <Route path={routeNames.Mascotlogo} element={<Mascotlogo />} />
          <Route path={routeNames.Companylogo} element={<CompanyLogo />} />
        </Routes>
      </div>
    </div>
  );
};

export default NewDesign;
