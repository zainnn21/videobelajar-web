import BackgroundImage from "./Background";
import Title from "../TitleForm/Title";
import Paragraph from "../TitleForm/Paragraph";
import Button from "../Button/index";

const WideCard = (props) => {
  const { title, paragraph } = props;
  return (
    <BackgroundImage>
      <div className="flex flex-col gap-3 ">
        <Title tvariant="text-white font-bold md:text-5xl">{title}</Title>
        <Paragraph pvariant="text-white">{paragraph}</Paragraph>
      </div>
      <Button
        label="Temukan Video Course untuk Dipelajari!"
        bg="bg-[#3ECF4C]"
        textColor="text-white md:max-w-92 text-base "
      ></Button>
    </BackgroundImage>
  );
};

export default WideCard;
