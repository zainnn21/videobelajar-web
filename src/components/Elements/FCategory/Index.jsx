import Title from "./title";

const CategoryFooter = (props) => {
  const { children, title } = props;
  return (
    <div className="flex flex-col gap-4">
      <Title>{title}</Title>
      <ul className="flex flex-col gap-3.5 text-base font-medium leading-[140%] tracking-[0.2px] text-[#333333AD]">
        {children}
      </ul>
    </div>
  );
};

export default CategoryFooter;
