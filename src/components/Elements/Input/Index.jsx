import Input from "./Input";
import Label from "./Label";
const InputForm = (props) => {
  const { name, placeholder, label, type } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
