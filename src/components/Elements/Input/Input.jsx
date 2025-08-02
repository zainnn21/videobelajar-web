const Input = (props) => {
  const { name, placeholder, type } = props;
  return (
    <input
      type={type}
      className="rounded-l-md border border-[#3A35411F] h-12"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
