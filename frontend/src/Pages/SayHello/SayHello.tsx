import map from "assets/map.jpg";
import idilio from "assets/logo.png";
import address from "assets/Address.png";
import Phone from "assets/Phone.png";
import Mail from "assets/mail.png";
import { Link } from "react-router-dom";

const SayHello = () => {
  return (
    <div>
      <h1 className="m-8 text-center uppercase text-[25px]">Say Hello</h1>
      <p className="text-[15px] text-center font-light mx-[200px] m-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quae
        facere quisquam beatae facilis ad rerum harum dolorem repellendus
        deserunt consequatur mollitia tempore dolorum, adipisci excepturi
        accusantium tenetur ea ratione!
      </p>
      <div className="flex items-center justify-center h-[800px] mb-4">
        <Link to="https://goo.gl/maps/muH7UF1REqq5Qqrx9">
          <img src={map} alt="" />
        </Link>
      </div>
      <div className="items-center justify-center">
        <p className="text-[15px] text-center font-light mx-[200px] mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quae facere quisquam beatae facilis ad rerum harum
        </p>
        <img src={idilio} alt="" className="h-[80px] mx-auto" />
        <h1 className="my-[60px] text-center uppercase text-[20px]">
          Get in touch with us
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mx-auto mb-[60px] text-center">
        <div className=" w-[20%]">
          <img src={address} alt="" className="h-[60px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Address
          </p>
          <p className="font-light text-[10px] text-[#ffffff] uppercase">
            Kegalle | Srilanka
          </p>
        </div>

        <div className=" w-[30%]">
          <img src={Mail} alt="" className="h-[150px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Email
          </p>
          <p className="font-light text-[10px] text-[#ffffff]">
            idiliodesign2020@gmail.com
          </p>
        </div>

        <div className=" w-[20%]">
          <img src={Phone} alt="" className="h-[60px] mx-auto" />
          <p className="font-bold text-[15px] text-[#5b5b5b] uppercase">
            Mobile
          </p>
          <p className="font-light text-[10px] text-[#ffffff]">
            +94 71 472 5166
          </p>
        </div>
      </div>
    </div>
  );
};

export default SayHello;
