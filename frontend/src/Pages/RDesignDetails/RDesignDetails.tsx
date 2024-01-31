import DetailsCard from "components/DetailsCard/DetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "components/ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import ResourcesService from "Services/ResourcesService";
import ResourceOrderService from "Services/ResourceOrderService";
import { routeNames } from "routes/route";

const RDesignDetails = ({ user, onLogout }: any) => {
  let { id } = useParams();

  let iid: number = Number(id);

  console.log(iid);

  const [resources, setResources] = useState<any>();

  useEffect(() => {
    ResourcesService.getResourceById(iid).then((res: any) => {
      if (res.data.status === 1) {
        setResources(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, [iid]);

  const [reviewedResource, setReviewedResource] = useState<any>();
  useEffect(() => {
    ResourceOrderService.getResourceReviewByResourceId(iid).then((res: any) => {
      if (res.data.status === 1) {
        setReviewedResource(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        console.log("not found");
      }
    });
  }, []);

  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }

  return (
    <div>
      <div id="item1" className="w-full">
        <DetailsCard
          title={resources?.title}
          description={resources?.description}
          resourceId={resources?.resourceId}
          amount={resources?.amount}
          designer={resources?.designerId}
        />
      </div>
      <div>
        <h6 className="text-center uppercase mt-9">Reviews For the art</h6>
        <div className="mt-[50px]">
          {reviewedResource?.map((r: any, i: number) => (
            <div id="item1" className="" key={i}>
              <ReviewCard
                rate={r.rate}
                review={r.review}
                resourceId={r?.resourceId}
                resourceOrderId={r?.resourceOrderId}
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
