import { useNavigate } from "react-router";
import GoogleImg from "../../../assets/logos_google-icon.png";

const Button = (props) => {
  const { label, bg, textColor, border } = props;
  const navigate = useNavigate();
  const urlParam = window.location.pathname;
  const handleButtonOnClick = () => {
    if (urlParam === "/Register" && label === "Masuk") {
      navigate("/Login");
    } else if (urlParam === "/Login" && label === "Daftar") {
      navigate("/Register");
    }
  };
  return (
    <button
      className={`rounded-[10px] ${border} ${bg} ${textColor} font-bold text-sm leading-[140%] tracking-[0.2px] h-[34px] md:h-[42px] flex items-center justify-center gap-2 cursor-pointer`}
      onClick={handleButtonOnClick}
    >
      {label === "Masuk Dengan Google" && (
        <img src={GoogleImg} alt="Logo Google" className="w-5 h-5" />
      )}
      {label}
    </button>
  );
};

export default Button;
