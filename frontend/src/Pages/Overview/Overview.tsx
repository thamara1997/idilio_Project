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
      name: "Zayla Clover",
      desc: "I was blown away by the artwork I received from IDILIO. The designer was able to perfectly capture my vision and create something that was truly unique. I would highly recommend their services to anyone looking for high-quality design work.",
      image:
        "https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?s=612x612&w=0&k=20&c=RIELgbZwYohh88kbJfteuuXIw_zLyRx-of4FiyUCIws=",
    },
    {
      name: "Max Paul",
      desc: "Working with IDILIO was a dream come true. They were able to take my rough idea and turn it into something truly amazing. The designer was responsive, professional, and easy to work with. I couldn't be happier with the final product!",
      image:
        "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-isolated-gray-background-joyful-cheerful-men-crossed-hands-studio-shot-172868988.jpg",
    },
    {
      name: "Elia Harper",
      desc: "I've used IDILIO for several design projects now, and each time, they've exceeded my expectations. Their attention to detail and commitment to quality is unmatched. I wouldn't hesitate to recommend them to anyone looking for top-notch design work.",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/72/18/54/500_F_572185457_xKg84uHz6e6dXto12uMmjg9QHLCsuTrp.jpg",
    },
    {
      name: "Nazeer Akbal",
      desc: "IDILIO made the design process so easy and stress-free. They listened to my needs and provided me with multiple options to choose from. The final product was stunning and exceeded my expectations. I will definitely be using their services again in the future!",
      image:
        "https://media.istockphoto.com/id/612752180/photo/handsome-young-man.jpg?s=170667a&w=0&k=20&c=3W_sgSiE2Tq7Bpo2hAu3PnHZX8ruaGAUWDIlHPakIJc=",
    },
  ];

  return (
    <div className="z-10">
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
          <h5>Let's See Our</h5>
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

          <div className="border-[0.5px] rounded-[20px] border-[#fec7506b] w-[425px] h-[550px] m-[40px] text-white content-center">
            <h2 className="mt-10 font-medium text-[22px]">NEW DESIGN</h2>
            <h5 className="p-[30px] mb-[20px] font-light text-[15px]">
              We offer top-notch graphic design services for your art, and we
              have a range of pre-defined packages to choose from. With six
              different categories and 24 packages to choose from, you're sure
              to find the perfect fit for your project. Whether you're looking
              for an album cover, book cover, logo, flyer, podcast cover, or
              something else, our team of expert designers has got you covered.
              <br />
              <br />
              Click to move forward and our team will be in touch with you
              shortly to get started.
            </h5>
            <Link to={routeNames.NewDesign}>
              <button className="btn1">Tap Me</button>
            </Link>
          </div>

          {/* Existing Design Block */}

          <div className="border-[0.5px] rounded-[20px] border-[#fec7506b] w-[425px] h-[550px] m-[40px] text-white content-center">
            <h2 className="mt-10 font-medium text-[22px]">RESOURCE DESIGN</h2>
            <h5 className="p-[30px] font-light text-[15px] mb-[20px]">
              Here, you'll find a wide variety of previously created designs
              that you can customize to match your unique vision. With our
              advanced search feature, finding the perfect design is easy.
              Simply filter by category, amount, name, and more to quickly find
              the design that's right for you. To ensure your satisfaction, we
              also provide client reviews for all of our <br />
              resources.
              <br />
              <br />
              Click to move forward and our team will be in touch with you
              shortly to get started.
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
                      <CarousalCard
                        name={t.name}
                        desc={t.desc}
                        image={t.image}
                      />
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
          <h5>From Sri Lanka</h5>
          <h2 className="text-[#FEC850] font-bold text-[18px]">Join Idilio</h2>
        </div>
        {/* Content */}
        <div className="flex items-center justify-center">
          <img src={community} alt="" className="w-[200px]" />
        </div>
        <div className="text-[15px] font-light w-[90%] content-center text-center mx-auto px-[150px]">
          <h5 className="mb-[80px]">
            Joining IDILIO is a great opportunity for designers in Sri Lanka to
            build their careers and gain exposure to the global market. We
            believe that there is an abundance of untapped talent in Sri Lanka
            and we are dedicated to helping designers reach their full
            potential. By joining IDILIO, designers not only gain access to a
            global network of buyers, but they also have the opportunity to
            learn from other talented designers and collaborate on projects. Our
            platform encourages creativity and innovation, and we believe that
            by working together, we can create designs that are truly
            outstanding. In addition, our team at IDILIO is committed to
            supporting the professional development of our members. We offer
            training programs and resources to help our designers build their
            skills and advance their careers.
            <br /> <br />
            Our goal is not only to connect designers with buyers, but to help
            them build long-term, successful careers in the industry. Joining
            IDILIO is easy - simply submit your resume to our admin panel for
            review. If you meet our qualification requirements, you will be
            invited to join our team of talented designers.
            <br /> We are always looking for new talent to join our community,
            and we welcome designers of all skill levels and backgrounds. At
            IDILIO, we believe that by supporting the growth of the graphic
            design industry in Sri Lanka, we can create a brighter future for
            our country and our people. Join us today and start building your
            career as a graphic designer!
            <br />
            <br /> Good Luck Freelance Journey !
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
