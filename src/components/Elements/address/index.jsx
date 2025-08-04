import Title from "./title";
import Paragraph from "./paragraph";

const address = (props) => {
  const { title, p1, p2 } = props;
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{p1}</Paragraph>
      <Paragraph>{p2}</Paragraph>
    </>
  );
};

export default address;
