const Stars = (props) => {
  const { rating1, rating2, rating3, rating4, rating5 } = props;
  return (
    <div className="flex gap-0.5">
      <img src={rating1} alt="star" className="w-[18px] h-[18px]" />
      <img src={rating2} alt="star" className="w-[18px] h-[18px]" />
      <img src={rating3} alt="star" className="w-[18px] h-[18px]" />
      <img src={rating4} alt="star" className="w-[18px] h-[18px]" />
      <img src={rating5} alt="star" className="w-[18px] h-[18px]" />
    </div>
  );
};

export default Stars;
