import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { name: "Order Placed" },
    { name: "Requirement Submitted" },
    { name: "Order In Progress" },
    { name: "Review Delivery" },
    { name: "Order Completed" },
  ];

  const stepItems = steps.map((step, index) => {
    const isCompleted = index + 1 <= currentStep;
    const isCurrent = index + 1 === currentStep;

    return (
      <div
        key={index}
        className={`flex flex-col items-center relative top-[15px] ${
          isCurrent ? "text-[#fec750] font-light" : "text-gray-500"
        }`}
        style={{ width: "20%" }}
      >
        <div
          className={`relative z-1 rounded-full w-6 h-6 flex items-center justify-center text-[12px] ${
            isCurrent ? "bg-[#fec750] text-black font-light " : "bg-gray-300"
          }`}
        >
          {index + 1}
        </div>
        <div
          className="mt-2 text-[10px] font-light text-center"
          style={{ width: "100%" }}
        >
          {step.name}
        </div>
        <div
          className={`absolute h-1 w-full top-5${
            isCompleted ? "bg-[#fec750]" : "bg-gray-300"
          }`}
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    );
  });

  return (
    <div className="relative w-[60%] content-center my-10 mx-auto">
      <div className="relative top-[27px] w-[80%] mx-auto">
        <div
          className="absolute w-full top-[100px] h-[3px] bg-gray-300 "
          style={{ top: "50%", transform: "translateY(-50%)" }}
        ></div>
        <div
          className="absolute w-full h-[3px] mx-auto bg-[#fec750]"
          style={{
            width: `${(currentStep / steps.length) * 100}%`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
      <div className="flex justify-between">{stepItems}</div>
    </div>
  );
};

export default ProgressBar;
