import PropTypes from "prop-types";

const ParagraphCard = (props) => {
  const { children, name } = props;
  return (
    <p
      title={name}
      className={
        name === "pcard"
          ? "font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block"
          : "font-normal text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]"
      }
    >
      {children}
    </p>
  );
};

ParagraphCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParagraphCard;
