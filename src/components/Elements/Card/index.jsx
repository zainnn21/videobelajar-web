import ImageCard from "./Image.jsx";
import CardTitle from "./Title.jsx";
import ParagraphCard from "./paragraph.jsx";
import Profile from "./ProfileCard.jsx";
import Stars from "./stars.jsx";

const Card = (props) => {
  const {
    source,
    texttitle,
    ptitle,
    srcprofile,
    profilename,
    job,
    jobspan,
    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
    ratingdesc,
    price,
  } = props;
  return (
    <div className="md:w-96 rounded-[10px] bg-white border md:p-5 p-4 flex flex-col md:gap-4 gap-2  border-[#3A35411F]">
      <div className="flex gap-3 md:flex-col">
        <ImageCard source={source}></ImageCard>
        <div className="flex flex-col gap-2">
          <CardTitle name="titlecard">{texttitle}</CardTitle>
          <ParagraphCard name="pcard">{ptitle}</ParagraphCard>
          <div className="flex gap-2.5">
            <Profile srcprofile={srcprofile}></Profile>
            <div>
              <CardTitle name="profile">{profilename}</CardTitle>
              <ParagraphCard name="pprofile">
                {job}{" "}
                <span className="font-bold text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]">
                  {jobspan}
                </span>
              </ParagraphCard>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2">
          <Stars
            rating1={rating1}
            rating2={rating2}
            rating3={rating3}
            rating4={rating4}
            rating5={rating5}
          ></Stars>
          <p className="font-medium text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] underline">
            {ratingdesc}
          </p>
        </div>
        <p className="font-poppins text-[#3ECF4C] font-semibold text-xl md:text-2xl leading-[120%]">
          {price}
        </p>
      </div>
    </div>
  );
};
export default Card;
