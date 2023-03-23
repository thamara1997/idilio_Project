import RequirementForm from "components/RequirementForm/RequirementForm";
import { cardDetails } from "data/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DesignerService from "Services/DesignerService";
import ResourcesService from "Services/ResourcesService";
import UserService from "Services/UserService";

const Requirement = () => {
  let { id } = useParams();
  console.log(id);

  let iid: number = Number(id);

  const details = cardDetails[iid];
  console.log(details);

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
  }, []);
  const designerid = resources?.designerId;

  const [designers, setDesigner] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (id) {
      DesignerService.getDesignerById(designerid)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [designerid]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setUser(res.data.data);
            console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [designers?.userId]);

  return (
    <div>
      <div id="item1" className="w-full">
        <RequirementForm
          title={resources?.title}
          name={resources?.designerId}
          amount={resources?.amount}
          resourceId={resources?.resourceId}
          category={resources?.category}
          user={user}
        />
      </div>
    </div>
  );
};

export default Requirement;
