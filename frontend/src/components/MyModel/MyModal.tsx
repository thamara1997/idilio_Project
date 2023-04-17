import UserService from "Services/UserService";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  userId: any;
  userName: string;
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

const MyModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  primaryButtonText = "Delete",
  secondaryButtonText = "Cancel",
  userId,
  userName,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [token, setToken] = useState<any>();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    } else {
      setToken(null);
    }
  }, []);

  const handleSaveButtonClick = (data: any) => {
    // TODO: Implement save functionality
    if (inputValue === userName) {
      console.log("input value:", inputValue);
      UserService.deleteUser(userId, token).then((res: any) => {
        if (res.data.status == 1) {
          window.location.reload();
          localStorage.removeItem("loggedUser");
          localStorage.removeItem("token");
        } else {
          toast.error(res.data.message);
        }
      });
    }
    return inputValue;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      style={customStyles}
      ariaHideApp={false}
      className=" bg-black rounded-lg w-[80%] " // This line is required for accessibility reasons
    >
      <div className="px-8 py-10 bg-black border-[0.1px] border-[#ffb8204a] rounded-[30px] ">
        <h3 className="mb-8 text-lg font-bold uppercase text-[#FEC850]">
          {title}
        </h3>
        {description && (
          <p className="mb-4 font-light text-[15px]">{description}</p>
        )}
        <label htmlFor="input" className="block mb-2 font-medium">
          Enter Your First Name
        </label>
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-3 py-2 mb-4 text-white bg-black border border-[0.1px] border-[#ffffff8b] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 text-black bg-[#FEC850] rounded-md hover:bg-[#fd2020] focus:outline-none focus:bg-indigo-600"
            onClick={handleSaveButtonClick}
          >
            {primaryButtonText}
          </button>
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            onClick={onClose}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
