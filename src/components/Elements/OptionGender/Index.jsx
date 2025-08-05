import Label from "../Input/Label";
import Option from "./Option";
import PropTypes from "prop-types";

const OptionList = (props) => {
  const { name, label } = props;
  return (
    <div className="flex flex-col">
      <Label name={name}>{label}</Label>
      <Option></Option>
    </div>
  );
};

OptionList.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default OptionList;
