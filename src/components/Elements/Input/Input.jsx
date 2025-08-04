const Input = (props) => {
  const { name, placeholder, type, variant } = props;
  return (
    <input
      type={type}
      className={` rounded-md border border-[#3A35411F] h-12 cursor-pointer font-roboto font-normal text-base leading-[140%] tracking-[0.2px] text-[#6C717A] px-2.5 py-1 w-full ${variant}`}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
