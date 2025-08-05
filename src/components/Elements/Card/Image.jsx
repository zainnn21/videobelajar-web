const ImageCard = (props) => {
  const { source } = props;
  return (
    <img
      src={source}
      alt=""
      className="md:w-[344px] md:h-[193px] w-20.5 h-20.5 rounded-[10px] mb-2.5"
    />
  );
};

export default ImageCard;
