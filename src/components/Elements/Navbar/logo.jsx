import Logo from "../../../assets/Logo.png";

const LogoImg = (props) => {
  const { titleimg } = props;
  return (
    <img
      src={Logo}
      alt="videobelajar"
      title={titleimg}
      className="w-42.5 h-9 md:w-51 md:h-14"
    />
  );
};

export default LogoImg;
