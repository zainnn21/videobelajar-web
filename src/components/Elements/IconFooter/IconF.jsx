const icon = (props) => {
  const { icon1, desc1, icon2, desc2, icon3, desc3, icon4, desc4 } = props;
  return (
    <div className="flex gap-[15px]">
      <img src={icon1} alt={desc1} className="w-9 h-9" />
      <img src={icon2} alt={desc2} className="w-9 h-9" />
      <img src={icon3} alt={desc3} className="w-9 h-9" />
      <img src={icon4} alt={desc4} className="w-9 h-9" />
    </div>
  );
};
export default icon;
