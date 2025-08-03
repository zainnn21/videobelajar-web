import Label from "../Input/Label";
import Option from "./Option";

const OptionList = (props) => {
  const { name, label } = props;
  return (
    <div className="flex flex-col">
      <Label name={name}>{label}</Label>
      <Option></Option>
    </div>
  );
};

export default OptionList;
