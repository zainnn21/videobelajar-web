const title = (props) => {
  const { children } = props;
  return <h1 className="font-bold text-sm md:text-[18px]">{children}</h1>;
};
export default title;
