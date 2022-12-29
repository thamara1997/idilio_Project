import Slider from "components/ImageSlider/Slider";
import Projects from "assets/Projects.png";
import Employee from "assets/Employee.png";
import Reviews from "assets/reviews.png";
import CarousalCard from "components/CarouselCard/CarousalCard";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import community from "assets/community.png";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";

const Overview = () => {
  // handle click for Discover Button
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonial = [
    {
      name: "Darshana Thamara",
      desc: "Voluptatibus architecto quos commodi explicabo, ex delectusimpedit vero necessitatibus? Saepe atque magnam veritatis doloribus alias excepturi aperiam quidem laudantium velit repellat",
    },
    {
      name: "Vidu Abaysinghe",
      desc: "Voluptatibus architecto quos commodi explicabo, ex delectusimpedit vero necessitatibus? Saepe atque magnam veritatis doloribus alias excepturi aperiam quidem laudantium velit repellat",
    },
    {
      name: "Kavindu Jayawardana",
      desc: "Voluptatibus architecto quos commodi explicabo, ex delectusimpedit vero necessitatibus? Saepe atque magnam veritatis doloribus alias excepturi aperiam quidem laudantium velit repellat",
    },
    {
      name: "Bishini Anjalee",
      desc: "Voluptatibus architecto quos commodi explicabo, ex delectusimpedit vero necessitatibus? Saepe atque magnam veritatis doloribus alias excepturi aperiam quidem laudantium velit repellat",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="content-center text-center pt-[250px] mb-[400px]">
        <h1 className="text-[36px] font-[400]">THE ARTISTIC ELYSIUM</h1>
        <h5 className="pb-3 font-[200] pt-7">
          We are a team of designers and artists with years of <br />
          experience in various fields.
        </h5>
        <button className="btn1" onClick={handleClickScroll}>
          Discover
        </button>
      </div>

      {/* Image Slider Section */}
      <section className="Arts">
        {/* Header */}
        <div className="font-light text-center">
          <h5>With out Talk</h5>
          <h2 className="text-[#FEC850] font-bold text-[18px]">
            Featured Arts
          </h2>
        </div>
        {/* Content */}
        <div className="content-center">
          <Slider />
        </div>
      </section>

      {/* Click Here Section */}
      <section className="Intro" id="section-1">
        {/* Header */}
        <div className="font-light text-center">
          <h5>If You Interested</h5>
          <h2 className="text-[#FEC850] font-bold text-[18px]">Click Here</h2>
        </div>
        {/* Content */}

        <div className="px-[150px] mt-[20px] flex justify-evenly text-center">
          {/* New Design Block */}

          <div className="border-[0.5px] rounded-[20px] border-[#FEC850] w-[425px] h-[550px] m-[40px] text-white content-center">
            <h2 className="mt-10 font-medium text-[22px]">NEW DESIGN</h2>
            <h5 className="p-[30px] mb-[60px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus architecto quos commodi explicabo, ex delectus
              impedit vero necessitatibus? Saepe atque magnam veritatis
              doloribus alias excepturi aperiam quidem laudantium velit
              repellat.lorem5
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, eos.
            </h5>
            <Link to={routeNames.NewDesign}>
              <button className="btn1">Tap Me</button>
            </Link>
          </div>

          {/* Existing Design Block */}

          <div className="border-[0.5px] rounded-[20px] border-[#FEC850] w-[425px] h-[550px] m-[40px] text-white content-center">
            <h2 className="mt-10 font-medium text-[22px]">RESOURCE DESIGN</h2>
            <h5 className="p-[30px] mb-[60px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus architecto quos commodi explicabo, ex delectus
              impedit vero necessitatibus? Saepe atque magnam veritatis
              doloribus alias excepturi aperiam quidem laudantium velit
              repellat.lorem5
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, eos.
            </h5>
            <Link to="/resourceDesign">
              <button className="btn1">Tap Me</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="Arts">
        {/* Header */}
        <div className="font-light text-center">
          <h5>Our Valuable</h5>
          <h2 className="text-[#FEC850] font-bold text-[18px]">
            Reviews & Projects
          </h2>
        </div>
        {/* Content */}
        <div className="text-center">
          {/* project,employee,reviews */}
          <div className="flex justify-evenly mt-[50px]">
            <div>
              <img src={Projects} alt="" className="w-[156px]" />
              <h1 className="text-[30px]">100</h1>
              <h5 className="font-light text-[15px]">Projects</h5>
            </div>
            <div>
              <img src={Employee} alt="" className="w-[156px]" />
              <h1 className="text-[30px]">20</h1>
              <h5 className="font-light text-[15px]">Employees</h5>
            </div>
            <div>
              <img src={Reviews} alt="" className="w-[156px]" />
              <h1 className="text-[30px]">88</h1>
              <h5 className="font-light text-[15px]">Reviews</h5>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex items-center justify-center mt-[100px]">
            <div className="flex content-center align-middle p-[20px]">
              <MdArrowBackIos />
            </div>
            <div>
              <div className="flex-row">
                <div className="w-[1000px] carousel gap-[100px]">
                  {testimonial.map((t: any, i: number) => (
                    <div id="item1" className="w-full carousel-item" key={i}>
                      <CarousalCard name={t.name} desc={t.desc} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex content-center align-middle p-[20px]">
              {" "}
              <MdArrowForwardIos />{" "}
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Header */}
        <div className="font-light text-center">
          <h5>Our Valuable</h5>
          <h2 className="text-[#FEC850] font-bold text-[18px]">
            Reviews & Projects
          </h2>
        </div>
        {/* Content */}
        <div className="flex items-center justify-center">
          <img src={community} alt="" className="w-[200px]" />
        </div>
        <div className="font-[20px] content-center text-center w-auto px-[150px]">
          <h5 className="mb-[80px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus architecto quos commodi explicabo, ex delectus impedit
            vero necessitatibus? Saepe atque magnam veritatis doloribus alias
            excepturi aperiam quidem laudantium velit repellat.lorem5Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatibus architecto
            quosLorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus architecto quos commodi explicabo, ex delectus impedit
            vero necessitatibus? Saepe atque magnam veritatis doloribus alias
            excepturi aperiam quidem laudantium velit repellat.lorem5Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatibus architecto
            quos
            <br /> commodi explicabo, ex delectus impedit commodi explicabo, ex
            delectus impedit vero necessitatibus? Saepe atque magnam veritatis
            doloribus alias excepturi aperiam quidem laudantium velit
            repellat.lorem5Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatibus architecto quos commodi explicabo, ex delectus
            impedit <br /> vero necessitatibus? Saepe atque magnam veritatis
            doloribus alias excepturi aperiam quidem laudantium velit
            repellat.lorem5
            <br /> vero necessitatibus? Saepe atque magnam veritatis
          </h5>
        </div>
        <div className="content-center text-center">
          <Link to={routeNames.JoinUs}>
            <button className="btn1 ">I like to Join</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Overview;
