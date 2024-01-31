import { render } from "@testing-library/react";
import FileUploadServices from "Services/FileUploadServices";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface FeedbackFormProps {
  rating: number;
  review: string;
  reviewUser: number;
}

const Feedback: React.FC<FeedbackFormProps> = ({
  rating,
  review,
  reviewUser,
}) => {
  const [formRating, setFormRating] = useState(rating);
  const [formReview, setFormReview] = useState(review);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`cursor-pointer ${
            rating >= i ? "text-yellow-400" : "text-gray-400"
          } text-2xl`}
        />
      );
    }

    return stars;
  };

  const [propic, setPropic] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getProfilePicture(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setPropic(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/profilePic/${reviewUser}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [reviewUser]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full my-[20px] shadow-md">
        <div className="w-[50px] h-[50px] mb-5 hover:border-1 hover:border-white">
          <img src={propic} alt="" className="rounded-[50%]" />
        </div>
        <div className="flex ">{renderStars()}</div>
        <div className="w-full p-2 mt-4 mb-2 bg-[#0000008c] text-[14px] rounded-xl text-center px-4 ">
          {review}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
