const FormParagraph = (props) => {
  const { children } = props;
  return (
    <p className="font-DMsans font-normal text-sm md:text-base leading-[140%] tracking-[0.2px] text-[#333333AD] text-center">
      {children}
    </p>
  );
};

export default FormParagraph;
