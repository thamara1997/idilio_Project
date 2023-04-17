import FileUploadServices from "Services/FileUploadServices";
import PaymentService from "Services/PaymentServices";
import ResourceOrderService from "Services/ResourceOrderService";
import PayPal from "components/PayPal/PayPal";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  resourceOrderId: any;
  amount: any;
  resourceOrder: any;
};
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    text: "center",
    backdropFilter: "blur(40px)",
  },
  content: {
    opacity: "90%",
  },
};

Modal.setAppElement("#root");

const PaymentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  primaryButtonText = "Complete",
  secondaryButtonText = "Cancel",
  resourceOrderId,
  amount,
  resourceOrder,
}) => {
  const [token, setToken] = useState<any>();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    } else {
      setToken(null);
    }
  }, []);

  const handleSaveButtonClick = async (data: any) => {
    const resOrder: any = {
      resourceOrderId: resourceOrder?.resourceOrder.resourceOrderId,
      projectName: resourceOrder?.resourceOrder.projectName,
      reqDescription: resourceOrder?.resourceOrder.reqDescription,
      reqDraw: resourceOrder?.resourceOrder.reqDraw,
      attachments: resourceOrder?.resourceOrder.attachments,
      rate: resourceOrder?.resourceOrder.rate,
      review: resourceOrder?.resourceOrder.review,
      resourcesResourceId: resourceOrder?.resourceOrder.resourcesResourceId,
      progressId: resourceOrder?.resourceOrder.progressId + 1,
    };
    const result = await ResourceOrderService.UpdateResourceOrder(
      resOrder,
      token
    );
    if (result.data.status === 1) {
      const payment1: any = {
        amount: amount,
        paidDate: null,
        resourceOrderId: resourceOrder?.resourceOrder.resourceOrderId,
      };
      console.log(payment1);
      if (payment1) {
        const result2 = await PaymentService.addPayment(payment1, token);
        window.location.reload();
      }
      toast.success("Payment Successful");
      // window.location.reload();
      return;
    } else {
      console.log("Update Fail");
      toast.error("Bad Credentials");
    }
  };

  const [art, setArt] = useState<any>("");
  useEffect(() => {
    FileUploadServices.getResourceOrderWork(1).then((res: any) => {
      // console.log(res);
      if (res.status === 200) {
        setArt(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/resourceorderwork/${resourceOrderId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [resourceOrderId]);

  const [paid, setPaid] = useState<any>();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      style={customStyles}
      ariaHideApp={false}
      className=" bg-black rounded-lg w-[70%] " // This line is required for accessibility reasons
    >
      <div className="px-8 py-10 bg-black border-[0.1px] border-[#ffb8204a] rounded-[30px] flex flex-col items-center">
        <h3 className="my-5 text-lg font-bold uppercase text-[#FEC850]">
          {title}
        </h3>
        {description && (
          <p className="mb-4 font-light text-[10px]">{description}</p>
        )}
        {/* <label htmlFor="input" className="block my-2 text-center font-small ">
          Hola <br />
          Continue To Payment Here
        </label> */}
        <div className=" bg-white w-[220px] h-[220px] border-[0.5px] border-[#fefefe7b] rounded-lg hover:border-1 hover:border-white">
          <img src={art} alt="" className="rounded-lg" />
        </div>

        <h3 className="my-5 text-lg font-bold uppercase text-[#FEC850]">
          $ {amount}
        </h3>
        <div>
          <PayPal amount={amount} setPaid={setPaid} />
          {/* <PayPal /> */}
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 text-black bg-[#FEC850] rounded-md hover:bg-[#fdbe20] focus:outline-none focus:bg-indigo-600"
            onClick={handleSaveButtonClick}
            style={{ display: paid ? "inline-block" : "none" }}
          >
            {primaryButtonText}
          </button>
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            onClick={onClose}
            style={{ display: paid ? "inline-block" : "none" }}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
