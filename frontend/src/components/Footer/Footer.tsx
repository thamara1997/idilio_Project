/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Facebook from "assets/Facebook.png";
import Insta from "assets/Insta.png";
import LinkedIn from "assets/Linkedin.png";
import Twitter from "assets/Twitter.png";
import Whatsapp from "assets/Whatsapp.png";

const Footer = () => {
  return (
    <div>
      <footer className="inline text-center ">
        <h1 className="text-[30px] font-extrabold mb-5">IDILIO</h1>
        <div className="flex justify-center gap-[20px]">
          <div>
            <img src={Facebook} alt="" className="w-[40px]" />
          </div>
          <div>
            <img src={Insta} alt="" className="w-[40px]" />
          </div>
          <div>
            <img src={Twitter} alt="" className="w-[40px]" />
          </div>
          <div>
            <img src={LinkedIn} alt="" className="w-[40px]" />
          </div>
          <div>
            <img src={Whatsapp} alt="" className="w-[40px]" />
          </div>
        </div>

        <div className="flex justify-between mx-[50px]">
          <div className="text-start font-light text-[15px] mb-[20px]">
            <a href="#">Privacy Policy</a>
            <br />
            <a href="#">Help & Support</a>
            <br />
            <a href="#">Trust & Safty</a>
            <br />
            <a href="#">Terms Of Service</a>
            <br />
          </div>
          <div className="text-end font-light text-[15px] mb-[20px]">
            <a href="#">idiliodesign2020@gmail.com</a>
            <br />
            <a href="#">$ USD</a>
            <br />
            <a href="#">Sri Lanka</a>
            <br />
            <a href="#">+94 71 472 5166</a>
            <br />
          </div>
        </div>

        <div>
          <h6 className="text-[10px]">Powered By IDILIO LTD</h6>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
