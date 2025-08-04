import BackgroundImage from "./Background";
import Title from "../TitleForm/Title";
import Paragraph from "../TitleForm/Paragraph";

const WideCard = (props) => {
  const { title, paragraph } = props;
  return (
    <BackgroundImage>
      <Title tvariant="text-white font-bold md:text-5xl">{title}</Title>
      <Paragraph pvariant="text-white">{paragraph}</Paragraph>
    </BackgroundImage>
  );
};

export default WideCard;
