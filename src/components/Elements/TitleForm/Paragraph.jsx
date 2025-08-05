import PropTypes from "prop-types";

const FormParagraph = (props) => {
  const { children, pvariant } = props;
  return (
    <p
      className={`font-DMsans font-normal text-sm md:text-base leading-[140%] tracking-[0.2px] text-[#333333AD] text-center ${pvariant}`}
    >
      {children}
    </p>
  );
};

FormParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  pvariant: PropTypes.string.isRequired,
};

export default FormParagraph;
