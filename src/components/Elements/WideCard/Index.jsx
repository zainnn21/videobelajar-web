import BackgroundImage from "./Background";
import Title from "../TitleForm/Title";
import Paragraph from "../TitleForm/Paragraph";
import Button from "../Button/index";
import Input from "../Input/Input";

const WideCard = (props) => {
  const { title, paragraph, namecard } = props;
  return (
    <BackgroundImage namecard={namecard}>
      <div className="flex flex-col gap-3 ">
        <Title tvariant="text-white font-bold md:text-5xl">{title}</Title>
        <Paragraph pvariant="text-white">{paragraph}</Paragraph>
      </div>

      {namecard === "topcard" && (
        <Button
          label="Temukan Video Course untuk Dipelajari!"
          bg="bg-[#3ECF4C]"
          textColor="text-white md:max-w-92 text-base "
        ></Button>
      )}

      {namecard === "lowercard" && (
        <div className="flex flex-col items-center justify-center gap-10 md:w-[525px] w-full">
          <div>
            <p className="font-medium text-[18px] leading-[140%] tracking-[0.2px] text-[#C1C2C4] text-center">
              NEWSLETTER
            </p>
            <div className="flex flex-col gap-2.5 items-center justify-center">
              <h1 className="text-white font-poppins font-semibold text-[32px] leading-[120%] text-center">
                Mau Belajar Lebih Banyak?
              </h1>
              <p className="font-normal text-base leading-[140%] tracking-[0.2px] text-[#F4F5FA] text-center">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
            </div>
          </div>
          <div className="relative items-center w-full">
            <Input
              placeholder="Masukan Emailmu"
              name="email"
              type="email"
              variant="bg-white pl-8 rounded-[10px] md:h-[58px]"
            ></Input>
            <Button
              label="Subscribe"
              bg="bg-[#FFBD3A] md:max-w-[132px]"
              textColor="text-white md:max-w-92 text-base absolute right-2 top-1/2 -translate-y-1/2"
            ></Button>
          </div>
        </div>
      )}
    </BackgroundImage>
  );
};

export default WideCard;
