import PropTypes from "prop-types";

const CardTitle = (props) => {
  const { children, name } = props;
  return (
    <h6
      title={name}
      className={
        name === "titlecard"
          ? "font-poppins font-semibold text-base md:text-[18px] leading-[120%] text-[#222325]"
          : "font-medium text-sm md:text-base leading-[140%] tracking-[0.2px] text-[#222325]"
      }
    >
      {children}
    </h6>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardTitle;
