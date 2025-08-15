import ImageCard from "./Image.jsx";
import CardTitle from "./Title.jsx";
import ParagraphCard from "./paragraph.jsx";
import Profile from "./ProfileCard.jsx";
import Stars from "./stars.jsx";
import PropTypes from "prop-types";

const Card = (props) => {
  const {
    key,
    source,
    texttitle,
    ptitle,
    srcprofile,
    profilename,
    job,
    jobspan,
    ratingImages,
    ratingdesc,
    price,
    order,
  } = props;
  return (
    <div
      className={`md:w-96 rounded-[10px] bg-white border md:p-5 p-4 flex flex-col md:gap-4 gap-2  border-[#3A35411F] ${order}`}
      key={key}
    >
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
          <Stars images={ratingImages}></Stars>
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

Card.propTypes = {
  key: PropTypes.number.isRequired,
  source: PropTypes.string,
  texttitle: PropTypes.string,
  ptitle: PropTypes.string,
  srcprofile: PropTypes.string,
  profilename: PropTypes.string,
  job: PropTypes.string,
  jobspan: PropTypes.string,
  ratingImages: PropTypes.array,
  ratingdesc: PropTypes.string,
  price: PropTypes.string,
  order: PropTypes.string,
};
export default Card;
