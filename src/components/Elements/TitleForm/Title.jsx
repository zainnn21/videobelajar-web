const TitleForm = (props) => {
  const { children } = props;
  return (
    <h1 className="font-poppins font-semibold text-2xl leading-[110%] text-center text-[#222325]">
      {children}
    </h1>
  );
};

export default TitleForm;
