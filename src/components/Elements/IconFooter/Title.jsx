import PropTypes from "prop-types";

const Title = (props) => {
  const { children } = props;
  return (
    <h1 className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD] order-1 md:order-0">
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
