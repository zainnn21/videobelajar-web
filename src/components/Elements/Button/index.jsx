import { useNavigate } from "react-router";
import GoogleImg from "../../../assets/logos_google-icon.png";
import PropTypes from "prop-types";

const Button = (props) => {
  const { label, bg, textColor, border, typeButton } = props;
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
      className={`rounded-[10px] w-full  font-bold text-sm leading-[140%] tracking-[0.2px] h-9 md:h-11 flex items-center justify-center gap-2 cursor-pointer ${border} ${bg} ${textColor}`}
      onClick={handleButtonOnClick}
      type={typeButton}
    >
      {label === "Masuk Dengan Google" && (
        <img src={GoogleImg} alt="Logo Google" className="w-5 h-5" />
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  bg: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
};

export default Button;
