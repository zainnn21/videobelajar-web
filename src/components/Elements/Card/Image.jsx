import PropTypes from "prop-types";

const ImageCard = (props) => {
  const { source } = props;
  return (
    <img
      src={source}
      alt=""
      className="md:w-[344px] md:h-[193px] w-[82px] h-[82px] rounded-[10px] mb-2.5 object-cover object-center flex-shrink-0"
    />
  );
};

ImageCard.propTypes = {
  source: PropTypes.string,
};

export default ImageCard;
