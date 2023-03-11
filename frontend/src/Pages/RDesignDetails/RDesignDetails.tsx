import DetailsCard from "components/DetailsCard/DetailsCard";
import { useParams } from "react-router-dom";
import { cardDetails } from "data/data";
import ReviewCard from "components/ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import ResourcesService from "Services/ResourcesService";

const RDesignDetails = () => {
  let { id } = useParams();

  let iid: number = Number(id);

  console.log(iid);

  // const details = cardDetails[iid];

  const [resources, setResources] = useState<any>();

  useEffect(() => {
    ResourcesService.getResourceById(iid).then((res: any) => {
      console.log(res);
      if (res.data.status === 1) {
        setResources(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  // console.log(review);

  return (
    <div>
      <div id="item1" className="w-full">
        {/* {resources && ( */}
        <DetailsCard
          title={resources?.title}
          description={resources?.description}
          resourceId={resources?.resourceId}
          amount={resources?.amount}
          designer={resources?.designerId}
        />
        {/* )} */}
      </div>
      <div>
        <h6 className="text-center uppercase mt-9">Reviews For the art</h6>
        <div className="mt-[50px]">
          {review.map((r: any, i: number) => (
            <div id="item1" className="" key={i}>
              <ReviewCard
                name={r.rName}
                stars={r.stars}
                review={r.review}
                country={r.country}
                date={r.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RDesignDetails;

const review = [
  {
    rName: "Kavindu Janith",
    stars: "5",
    country: "Srilanka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harualiquam perspiciatis eius a Quia quaerat necessitatibus dolores magnamfugit perspiciatis, illum error accusamus natus repudiandae omnisfugiat iuredwd ipsa commodi nostrum perferendis, quidem quae reiciendis sunt rem! Dolorem, consequuntur obcaecat",
    date: "1 day ago",
  },
  {
    rName: "Viraj Kiriella",
    stars: "4",
    country: "Srilanka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harualiquam perspiciatis eius a Quia quaerat necessitatibus dolores magnamfugit perspiciatis, illum error accusamus natus repudiandae omnisfugiat iuredwd ipsa commodi nostrum perferendis, quidem quae reiciendis sunt rem! Dolorem, consequuntur obcaecat",
    date: "2 day ago",
  },
  {
    rName: "Ruwan Perera",
    stars: "5",
    country: "Srilanka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harualiquam perspiciatis eius a Quia quaerat necessitatibus dolores magnamfugit perspiciatis, illum error accusamus natus repudiandae omnisfugiat iuredwd ipsa commodi nostrum perferendis, quidem quae reiciendis sunt rem! Dolorem, consequuntur obcaecat",
    date: "3 day ago",
  },
];
