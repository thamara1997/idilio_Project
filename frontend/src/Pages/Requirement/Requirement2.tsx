import RequirementForm from "components/RequirementForm/RequirementForm";
import RequirementForm2 from "components/RequirementForm/RequirementForm2";
import { packageDetails } from "data/package";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routeNames } from "routes/route";

const Requirement2 = ({ user, onLogout }: any) => {
  let { id } = useParams();
  console.log(id);

  //   eslint-disable-next-line @typescript-eslint/no-unused-vars
  let iid: number = Number(id);

  const packDeatils = packageDetails[iid - 1];
  console.log(packDeatils);

  const navigate = useNavigate();

  if (!user) {
    navigate(routeNames.Overview);
    return null;
  }
  return (
    <div>
      <div id="item1" className="w-full">
        <RequirementForm2
          id={packDeatils.id}
          name={packDeatils.name}
          category={packDeatils.category}
        />
      </div>
    </div>
  );
};

export default Requirement2;
