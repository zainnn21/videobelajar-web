const address = (props) => {
  const { children } = props;
  return (
    <p className="font-normal text-sm md:text-base leading-[140%] tracking-[0.2px]">
      {children}
    </p>
  );
};

export default address;
