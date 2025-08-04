import TopCard from "../../../assets/topcard.jpg";
import LowerCard from "../../../assets/lowercard.jpg";

const BackgroundImage = (props) => {
  const { children } = props;
  return (
    <div
      className="w-full max-w-[1200px] px-35 pb-16 pt-20.5 rounded-[10px] bg-cover bg-no-repeat flex flex-col gap-6  items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${TopCard})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
