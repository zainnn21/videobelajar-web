const List = (props) => {
  const { children } = props;
  return (
    <ul className="flex gap-7 text-sm md:text-base font-medium leading-[140%] tracking-[0.2px] flex-wrap">
      {children}
    </ul>
  );
};

export default List;
