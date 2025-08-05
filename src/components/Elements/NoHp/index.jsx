import Label from "../Input/Label";
import InputNo from "./InputNo";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const NoHp = (props) => {
  const { name, label, placeholder, type } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex justify-between md:gap-6 gap-3">
        <InputNo></InputNo>
        <Input type={type} name={name} placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

NoHp.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NoHp;
