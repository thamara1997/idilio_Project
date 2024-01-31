import { useEffect, useState } from "react";
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
  details: any;
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
  title: any;
  description: any;
  amount: any;
  category: any;
  searchTags: any;
  artAvatar: any;
};

Modal.setAppElement("#root");

const ArtModalUpdate: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  primaryButtonText = "Update",
  secondaryButtonText = "Cancel",
  designerId,
  details,
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

  console.log(details);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [details2, setDetails2] = useState(details);

  useEffect(() => {
    setDetails2(details);
    setValue("amount", details?.amount);
    setValue("category", details?.category);
  }, [details, setValue]);

  function handleAmountChange(event: any) {
    const newValue = event.target.value;
    setValue("amount", newValue);
  }

  function handleCategoryChange(event: any) {
    const newValue = event.target.value;
    setValue("category", newValue);
  }

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [src, setSrc] = useState<any>();
  const [preview, setPreview] = useState(null);
  const [artpic, setArtpic] = useState<any>("");

  const handleNextButtonClick = async (data: any) => {
    // console.log(data);
    const updatedResource: any = {
      resourceId: details2?.resourceId,
      title: data.title,
      description: data.description,
      amount: data.amount,
      category: data.category,
      searchTags: data.searchTags,
      designerId: details2?.designerId,
    };
    // console.log(updatedResource);
    const result = await ResourcesService.UpdateResource(
      updatedResource,
      token
    );
    console.log(result.data);
    setFormSubmitted(true);
    toast.success("Update Successful");
  };

  const handleSaveButtonClick = () => {
    if (preview) {
      const file = FileUploadServices.convertBase64ToFile(preview, "aa.png");

      let formData = new FormData();
      formData.append("file", file);

      FileUploadServices.uploadResourceArt(details.resourceId, formData, token);
      setFormSubmitted(false);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("Null");
    }
  };

  const handleDeleteClick = (data: any) => {
    // TODO: Implement save functionality
    if (details2?.resourceId) {
      ResourcesService.deleteResource(details2?.resourceId, token).then(
        (res: any) => {
          if (res.data.status === 1) {
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        }
      );
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
                defaultValue={details2?.title}
                {...register("title")}
              />

              <label className="flex mb-4">Description :</label>
              <textarea
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Paste your art description here"
                defaultValue={details?.description}
                {...register("description")}
              />

              <label className="flex mb-4">Amount :</label>
              <select
                className=" h-[2.4rem] w-full text-[14px] rounded-xl border-[0.5px] border-[#fec7505d] bg-transparent px-4 mb-5 "
                placeholder="Type your project name here"
                defaultValue={details.amount}
                {...register("amount", { required: true })}
                onChange={handleAmountChange}
              >
                <option value="" disabled>
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
                defaultValue={details?.category}
                {...register("category", { required: true })}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>
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
                defaultValue={details?.searchTags}
                {...register("searchTags")}
              />
              {errors.searchTags && (
                <p className="flex-row w-full m-1 text-xs text-red-600 ">
                  Enter 3 search tags with separated commas
                </p>
              )}

              <div className="flex justify-center">
                <button
                  className="px-4 py-2 mr-2 text-black bg-[#ff1212] rounded-md hover:bg-[#ffffff] focus:outline-none focus:bg-indigo-600"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
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

export default ArtModalUpdate;
