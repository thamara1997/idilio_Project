import company from "assets/company.jpg";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { useNavigate } from "react-router-dom";
import { routeNames } from "routes/route";

const Community = ({ user, onLogout }: any) => {
  const navigate = useNavigate();
  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }
  const card = [
    {
      name: "Chamith Viduranga",
      role: "CEO",
      image:
        "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/324092014_874925906986006_4574956838824066392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=4zvOdAxtie4AX95qGdH&_nc_ht=scontent.fcmb10-1.fna&oh=00_AfCoBqWlYbpbPvjh6aPJpLOCU7rUwIKulAb8-QhJpYJZfQ&oe=643AE2D7",
    },
    {
      name: "Darshana Thamara",
      role: "Developing",
      image:
        "https://media.licdn.com/dms/image/D5603AQHD_7Wg0k56dg/profile-displayphoto-shrink_800_800/0/1678642266733?e=1686787200&v=beta&t=IajW8JsWExZ0nL7Lht_66v_51TBE1fOg1F_QVJDup_w",
    },

    {
      name: "Kavindu Jayawardana",
      role: "Financial",
      image:
        "https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.6435-9/83989708_864504437336889_263452782835531776_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=r9UFbegua94AX80_udv&_nc_ht=scontent.fcmb10-1.fna&oh=00_AfBMnH6BaH8-r5Icy5tMKguBFZ45nz5HRX4L0yd2ztBaJw&oe=645D1FEB",
    },
    {
      name: "Haritha Udya",
      role: "Marketing",
      image:
        "https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.6435-9/120956715_1707221606122657_4071520679031708849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=xeLpuRwi4rYAX-5zVCS&_nc_ht=scontent.fcmb10-1.fna&oh=00_AfAzo7vZZWLPdfpCbeZZiY3Oa8rqDk6IiFvASbV15vi-FA&oe=645D2293",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="m-8 text-center uppercase text-[25px]">COMMUNITY</h1>
        <p className="text-[15px] text-center font-light mx-[200px] mb-8">
          IDILIO is more than just a design platform - it's a community of
          passionate designers dedicated to creating exceptional
          <br /> designs and empowering each other to succeed.
        </p>
        <div className="flex-shrink-0 block w-full h-[480px] overflow-hidden">
          <img src={company} alt="" className="object-cover w-full h-full " />
        </div>
      </div>
      <div className="mt-[100px] font-light text-[15px] mx-[100px] text-center">
        <p>
          IDILIO is a platform for graphic design and template purchasing that
          also functions as a design agency. Our team of experienced and
          talented designers are dedicated to creating exceptional designs that
          will help elevate your brand and make it stand out in a crowded
          market. Our goal is to provide our clients with the best possible
          service and make the design process as easy and stress-free as
          possible. We believe that every project is unique and deserves the
          utmost attention and care. <br />
          That's why we work closely with our clients to ensure that their
          vision and goals are met through the designs we create. We offer a
          range of design services, including album covers, book covers, logos,
          flyers, and podcast covers, and have a variety of pre-defined packages
          and options to choose from, as well as custom design projects tailored
          specifically to your needs.
        </p>
      </div>

      <h1 className="m-8 text-center uppercase text-[20px]">
        our executive crew
      </h1>

      <div className="flex justify-center text-center mb-[100px]">
        <div className="mt-[80px] grid grid-cols-4 gap-[30px]">
          {card.map((t: any, i: number) => (
            <div id="item1" className="w-full carousel-item" key={i}>
              <ProfileCard name={t.name} role={t.role} image={t.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
