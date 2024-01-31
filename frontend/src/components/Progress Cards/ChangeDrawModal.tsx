import FileUploadServices from "Services/FileUploadServices";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { routeNames } from "routes/route";
import SignaturePad from "react-signature-canvas";
import { BiEraser } from "react-icons/bi";
import { toast } from "react-toastify";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  resourceOrderId: any;
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

type FormData = {
  draw: any;
};

Modal.setAppElement("#root");

const ChangeDrawModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  primaryButtonText = "Change",
  secondaryButtonText = "Cancel",
  resourceOrderId,
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

  const { register, handleSubmit } = useForm<FormData>();

  // console.log(designUser);
  const sigPad = useRef<SignaturePad>(null);
  const [signatureData, setSignatureData] = useState<string>("");

  const handleChangeButtonClick = async (data: any) => {
    // Upload drawing for relevant ID
    const signatureDataURL = sigPad.current?.toDataURL() ?? "";

    setSignatureData(signatureDataURL);

    if (signatureDataURL != null && signatureDataURL !== "") {
      const file = FileUploadServices.convertBase64ToFile(
        signatureDataURL,
        "aa.png"
      );

      let formData = new FormData();
      formData.append("file", file);

      FileUploadServices.uploadResourceOrderDrawing(
        resourceOrderId,
        formData,
        token
      );
      toast.success("Drawing Changed");
    } else {
      console.log("No Drawing");
    }

    // Navigate to progress page
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    console.log(signatureData);
  }, [signatureData]);

  function clear(e: any) {
    e.preventDefault();
    sigPad.current?.clear();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
      className=" bg-black rounded-lg w-[80%] " // This line is required for accessibility reasons
    >
      <div className="px-8 py-8 bg-black border-[0.1px] border-[#ffb8204a] rounded-[30px] flex flex-col items-center mt-7">
        <form
          onSubmit={handleSubmit(handleChangeButtonClick)}
          className="flex-col m-8 w-[60%] uppercase"
        >
          <label className="flex w-full mx-auto mb-4">
            <input
              {...register("draw")}
              className="hidden"
              id="signature"
              type="hidden"
            />
            <SignaturePad
              ref={sigPad}
              canvasProps={{
                width: 600,
                height: 600,
                className:
                  "w-[80%] rounded-xl border-[0.5px] border-[#fec7505d] bg-white mx-auto",
              }}
            />
          </label>

          <div className="flex w-[80%] mx-auto justify-between">
            <button className="px-4 py-2 mr-2 text-black bg-[#FEC850] rounded-md hover:bg-[#ffffff] focus:outline-none focus:bg-indigo-600">
              {primaryButtonText}
            </button>
            <div className="lowercase">
              <button onClick={clear} className="flex">
                <BiEraser className="text-[30px]" />
              </button>
            </div>
            <button
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              onClick={onClose}
            >
              {secondaryButtonText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChangeDrawModal;
