const ImageCard = (props) => {
  const { source } = props;
  return (
    <img src={source} alt="" className="w-[344px] h-[193px] rounded-[10px]" />
  );
};

export default ImageCard;
