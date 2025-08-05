import PropTypes from "prop-types";

const TitleForm = (props) => {
  const { children, tvariant } = props;
  return (
    <h1
      className={` font-poppins font-semibold text-2xl leading-[110%] text-center text-[#222325] md:text-3xl ${tvariant}`}
    >
      {children}
    </h1>
  );
};

TitleForm.propTypes = {
  children: PropTypes.node.isRequired,
  tvariant: PropTypes.string.isRequired,
};

export default TitleForm;
