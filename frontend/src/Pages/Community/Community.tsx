import company from "assets/company.jpg";
import ProfileCard from "components/ProfileCard/ProfileCard";

const Community = () => {
  const card = [
    {
      name: "Darshana Thamara",
      role: "Developing",
    },
    {
      name: "Chamith Viduranga",
      role: "CEO",
    },
    {
      name: "Kavindu Jayawardana",
      role: "Financial",
    },
    {
      name: "Kalindu Ambawala",
      role: "Marketing",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="m-8 text-center uppercase text-[25px]">COMMUNITY</h1>
        <p className="text-[15px] text-center font-light mx-[200px] mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quae facere quisquam beatae facilis ad rerum harum dolorem repellendus
          deserunt consequatur mollitia tempore dolorum, adipisci excepturi
          accusantium tenetur ea ratione!
        </p>
        <div className="flex-shrink-0 block w-full h-[480px] overflow-hidden">
          <img src={company} alt="" className="object-cover w-full h-full " />
        </div>
      </div>
      <div className="mt-[100px] font-light text-[15px] mx-[100px] text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <h1 className="m-8 text-center uppercase text-[20px]">
        our executive crew
      </h1>

      <div className="flex justify-center text-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-4 gap-[30px]">
          {card.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <ProfileCard name={t.name} role={t.role} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
