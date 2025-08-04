import ImageCard from "./Image.jsx";
import Card1 from "../../../assets/1.jpg";
import CardTitle from "./Title.jsx";
import ParagraphCard from "./paragraph.jsx";
import Profile from "./ProfileCard.jsx";
import profile1 from "../../../assets/profile 1.png";
import Stars from "./stars.jsx";
import FullRating from "../../../assets/Star.png";
import HalfRating from "../../../assets/Masked Star.png";
import EmptyRating from "../../../assets/gray Star.png";

const Card = () => {
  return (
    <div className="w-96 rounded-[10px] bg-white border p-5 flex flex-col gap-4 border-[#3A35411F]">
      <ImageCard source={Card1}></ImageCard>
      <div className="flex flex-col gap-2">
        <CardTitle name="titlecard">Big 4 Auditor Financial Analyst</CardTitle>
        <ParagraphCard name="pcard">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik
        </ParagraphCard>
      </div>
      <div className="flex gap-2.5">
        <Profile source={profile1}></Profile>
        <div>
          <CardTitle name="profile">Jenna Ortega</CardTitle>
          <ParagraphCard name="pprofile">
            Senior Accountant di Gojek
          </ParagraphCard>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Stars
            rating1={FullRating}
            rating2={FullRating}
            rating3={HalfRating}
            rating4={EmptyRating}
            rating5={EmptyRating}
          ></Stars>
          <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] underline">
            3.5(86)
          </p>
        </div>
        <p className="font-poppins text-[#3ECF4C] font-semibold text-2xl leading-[120%]">
          Rp 300K
        </p>
      </div>
    </div>
  );
};
export default Card;
