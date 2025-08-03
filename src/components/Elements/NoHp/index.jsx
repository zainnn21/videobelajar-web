import Label from "../Input/Label";
import InputNo from "./InputNo";
import Input from "../Input/Input";

const NoHp = (props) => {
  const { name, label, placeholder, type } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex justify-between gap-6">
        <InputNo></InputNo>
        <Input type={type} name={name} placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

export default NoHp;
