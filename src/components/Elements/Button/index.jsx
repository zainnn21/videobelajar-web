import GoogleImg from "../../../assets/logos_google-icon.png";

const Button = (props) => {
  const { label, bg, textColor, border } = props;
  return (
    <button
      className={`rounded-[10px] ${border} ${bg} ${textColor} font-bold text-sm leading-[140%] tracking-[0.2px] h-[34px]`}
    >
      {label === "Masuk Dengan Google" && <img src={GoogleImg} alt="" />}
      {label}
    </button>
  );
};

export default Button;
