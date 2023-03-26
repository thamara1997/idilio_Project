import RequirementForm from "components/RequirementForm/RequirementForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DesignerService from "Services/DesignerService";
import ResourcesService from "Services/ResourcesService";
import UserService from "Services/UserService";

interface RequirementProps {
  user: any;
}

const Requirement: React.FC<RequirementProps> = ({ user }) => {
  let { id } = useParams();
  //console.log(id);

  let iid: number = Number(id);

  // const details = cardDetails[iid];
  // console.log(details);

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
  const designerid = resources?.designerId;

  const [designers, setDesigner] = useState<any>();
  const [designUser, setDesignUser] = useState<any>();

  useEffect(() => {
    if (id) {
      DesignerService.getDesignerById(designerid)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesigner(res.data.data);
            //console.log(res.data.data);
            return;
          } else {
            console.log("not found");
          }
        })
        .catch((error: any) => {
          //console.log(error);
        });
    }
  }, [designerid]);

  useEffect(() => {
    if (designers?.userId) {
      UserService.getUserByUserId(designers?.userId)
        .then((res: any) => {
          if (res.data.status === 1) {
            setDesignUser(res.data.data);
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
          designerId={resources?.designerId}
          amount={resources?.amount}
          resourceId={resources?.resourceId}
          category={resources?.category}
          designUser={designUser}
          user={user}
        />
      </div>
    </div>
  );
};

export default Requirement;
