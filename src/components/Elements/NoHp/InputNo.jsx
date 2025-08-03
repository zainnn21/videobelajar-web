import { useState } from "react";
import FlagIndonesia from "../../../assets/Indonesia (ID).png";
const InputNumber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:w-[157px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2.5 py-1 border border-solid border-[#3A35411F] rounded-md cursor-pointer w-full"
      >
        <img
          src={FlagIndonesia}
          alt="Indonesia"
          className="w-6 h-6 border-r  bg-[#F4F5FA] border-solid border-[#3A35411F]"
        />
        <span>+62</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-[157px] mt-1 bg-white border rounded-md shadow-lg">
          <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            <img src={FlagIndonesia} alt="Indonesia" className="w-6" />
            <span>+62</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            <span>+63</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default InputNumber;
