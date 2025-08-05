import PropTypes from "prop-types";

const Title = (props) => {
  const { children } = props;
  return (
    <h1 className="font-bold text-base leading-[140%] tracking-[0.2px]">
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
