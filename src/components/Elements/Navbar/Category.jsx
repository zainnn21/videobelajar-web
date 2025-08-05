const Category = (props) => {
  const { children } = props;
  return (
    <h1 className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]">
      {children}
    </h1>
  );
};

export default Category;
