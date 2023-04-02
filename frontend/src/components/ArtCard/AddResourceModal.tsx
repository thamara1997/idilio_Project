import { useState } from "react";
import Avatar from "react-avatar-edit";
import { useForm } from "react-hook-form";
import { RiImageAddLine } from "react-icons/ri";
import Modal from "react-modal";
import { toast } from "react-toastify";
import FileUploadServices from "Services/FileUploadServices";
import ResourcesService from "Services/ResourcesService";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  designerId: any;
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
  title: string;
  description: string;
  amount: string;
  category: string;
  searchTags: string;
  artAvatar: any;
};

Modal.setAppElement("#root");

const AddResourceModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  primaryButtonText = "Continue",
  secondaryButtonText = "Cancel",
  designerId,
}) => {
  //   console.log(designerId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [src, setSrc] = useState<any>();
  const [preview, setPreview] = useState(null);
  const [artpic, setArtpic] = useState<any>("");
  const [resource, setResource] = useState<any>();

  const handleNextButtonClick = async (data: any) => {
    const formDataWithDesignerId = { ...data, designerId };
    const result = await ResourcesService.addResource(formDataWithDesignerId);
    console.log(result.data?.resource);
    setFormSubmitted(true);
    if (formSubmitted == true) {
      toast.success("Resource Added Upload Your Art");
      setResource(result.data.resources);
      return;
    } else {
      toast.error("Resource added Failed");
    }
  };

  const handleSaveButtonClick = () => {
    if (preview) {
      const file = FileUploadServices.convertBase64ToFile(preview, "aa.png");

      let formData = new FormData();
      formData.append("file", file);

      FileUploadServices.uploadResourceArt(resource?.resourceId, formData);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Null");
    }
  };

  function onClose2() {
    setPreview(null);
  }
  function onCrop(pv: any) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem: any) {
    if (elem.target.files[0].size > 7168000) {
      alert("File is too big!");
      elem.target.value = "";
    }
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
        {formSubmitted ? (
          <>
            <label className="flex mb-4 text-center">
              Upload Art File Here
            </label>
            <p className="flex mb-4 font-light text-[10px] text-center">
              Please Crop Your Mock-Up and Adjust it to focus area this save
              square file{" "}
            </p>
            <Avatar
              {...register("artAvatar")}
              width={250}
              height={250}
              onCrop={onCrop}
              onClose={onClose2}
              onBeforeFileLoad={onBeforeFileLoad}
              src={src}
              exportQuality={1}
              shadingOpacity={0.6}
              exportAsSquare
              exportSize={2000}
            />
            <img src={artpic} alt="" />

            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 mr-2 text-black bg-[#FEC850] rounded-md hover:bg-[#fd2020] focus:outline-none focus:bg-indigo-600"
                onClick={handleSaveButtonClick}
              >
                Upload Art
              </button>
              <button
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                onClick={onClose}
              >
                {secondaryButtonText}
              </button>
            </div>
          </>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(handleNextButtonClick)}
              className="flex-col m-8 w-[60%] uppercase"
            >
              <label className="flex mb-4">Art Title :</label>
              <input
                type="text"
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Type your title here"
                {...register("title", {
                  required: true,
                })}
              />
              {errors.title && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Title is required
                </p>
              )}

              <label className="flex mb-4">Description :</label>
              <textarea
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Paste your art description here"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Description is required
                </p>
              )}

              <label className="flex mb-4">Amount :</label>
              <select
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Type your project name here"
                {...register("amount", {
                  required: true,
                })}
              >
                <option value="" disabled selected>
                  Select Amount
                </option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>
              {errors.amount && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Enter amount
                </p>
              )}

              <label className="flex mb-4">Category :</label>
              <select
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Select Your Art Category"
                {...register("category", {
                  required: true,
                })}
              >
                <option value="" disabled selected>
                  Select Category
                </option>
                <option>ALBUM COVER</option>
                <option>PODCAST COVER</option>
                <option>FLYER</option>
                <option>COMPANY LOGO</option>
                <option>BOOK COVER</option>
                <option>MASCOT LOGO</option>
              </select>
              {errors.category && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Enter The Category
                </p>
              )}

              <label className="flex mb-4">Search Tags :</label>
              <input
                type="text"
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder=" Enter 3 search tags with separated commas"
                {...register("searchTags", {
                  required: true,
                })}
              />
              {errors.searchTags && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Enter 3 search tags with separated commas
                </p>
              )}

              <div className="flex justify-center">
                <button className="px-4 py-2 mr-2 text-black bg-[#FEC850] rounded-md hover:bg-[#ffffff] focus:outline-none focus:bg-indigo-600">
                  {primaryButtonText}
                </button>
                <button
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                  onClick={onClose}
                >
                  {secondaryButtonText}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddResourceModal;
