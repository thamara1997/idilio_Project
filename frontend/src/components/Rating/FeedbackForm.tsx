import FileUploadServices from "Services/FileUploadServices";
import ResourceOrderService from "Services/ResourceOrderService";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface FeedbackFormProps {
  rating: number;
  review: string;
  reviewUser: number;
  resourceOrder: any;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  rating,
  review,
  reviewUser,
  resourceOrder,
}) => {
  const [formRating, setFormRating] = useState(rating);
  const [formReview, setFormReview] = useState(review);

  const handleRatingChange = (newRating: number) => {
    setFormRating(newRating);
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormReview(event.target.value);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(`Rating: ${formRating}, Review: ${formReview}`);
  // };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`cursor-pointer ${
            formRating >= i ? "text-yellow-400" : "text-gray-400"
          } text-2xl`}
          onClick={() => handleRatingChange(i)}
        />
      );
    }

    return stars;
  };

  const handleSubmit = async (data: any) => {
    const resOrder: any = {
      resourceOrderId: resourceOrder?.resourceOrder.resourceOrderId,
      projectName: resourceOrder?.resourceOrder.projectName,
      reqDescription: resourceOrder?.resourceOrder.reqDescription,
      reqDraw: resourceOrder?.resourceOrder.reqDraw,
      attachments: resourceOrder?.resourceOrder.attachments,
      rate: formRating,
      review: formReview,
      resourcesResourceId: resourceOrder?.resourceOrder.resourcesResourceId,
      progressId: resourceOrder?.resourceOrder.progressId,
      paymentId: resourceOrder?.resourceOrder.resourceOrderId,
    };
    const result = await ResourceOrderService.UpdateResourceOrder(resOrder);
    if (result.data.status === 1) {
      console.log(result.data);
      toast.success("Drawing Changed");
      setTimeout(() => {
        window.location.reload();
      }, 500);
      window.location.reload();
      return;
    } else {
      console.log("Update Fail");
    }
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
      <form
        className="flex flex-col items-center justify-center w-full shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="w-[50px] h-[50px] mb-5 hover:border-1 hover:border-white">
          <img src={propic} alt="" className="rounded-[50%]" />
        </div>
        <div className="flex ">{renderStars()}</div>
        <textarea
          className="w-full p-2 mt-4 mb-2 bg-[#0000008c] text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] px-4 "
          name="review"
          value={formReview}
          onChange={handleReviewChange}
          placeholder="Leave a review"
          rows={5}
        />
        <button
          className="w-[30%] my-6 btn3"
          type="submit"
          disabled={!formRating || !formReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
