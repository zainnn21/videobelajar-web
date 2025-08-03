import Parapgraph from "./Paragraph";
import Title from "./Title";

const FormTitle = (props) => {
  const { title, paragraph } = props;
  return (
    <div className="flex flex-col gap-2.5">
      <Title>{title}</Title>
      <Parapgraph>{paragraph}</Parapgraph>
    </div>
  );
};

export default FormTitle;
