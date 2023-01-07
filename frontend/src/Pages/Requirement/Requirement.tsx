import RequirementForm from "components/RequirementForm/RequirementForm";
import { cardDetails } from "data/data";
import { useParams } from "react-router-dom";

const Requirement = () => {
  let { id } = useParams();
  console.log(id);

  let iid: number = Number(id);

  const details = cardDetails[iid];
  console.log(details);

  return (
    <div>
      <div id="item1" className="w-full">
        <RequirementForm
          title={details.title}
          name={details.name}
          price={details.price}
          id2={details.id}
          category={details.Category}
        />
      </div>
    </div>
  );
};

export default Requirement;
