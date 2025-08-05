import Logo from "../../../assets/Logo.png";
import PropTypes from "prop-types";

const LogoImg = (props) => {
  const { titleimg } = props;
  return (
    <img
      src={Logo}
      alt="videobelajar"
      title={titleimg}
      className="w-38 h-10.5 md:w-51 md:h-14"
    />
  );
};

LogoImg.propTypes = { titleimg: PropTypes.string };

export default LogoImg;
