import Parapgraph from "./Paragraph";
import Title from "./Title";
import PropTypes from "prop-types";

const FormTitle = (props) => {
  const { title, paragraph } = props;
  return (
    <div className="flex flex-col gap-2.5 ">
      <Title>{title}</Title>
      <Parapgraph>{paragraph}</Parapgraph>
    </div>
  );
};

FormTitle.propTypes = {
  title: PropTypes.node.isRequired,
  paragraph: PropTypes.node.isRequired,
};

export default FormTitle;
