import Header from "../Fragments/Header";
import BodyHome from "../Fragments/BodyHome";
import FooterHome from "../Fragments/FooterHome";

const HomePageLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center px-30 py-16 gap-16 w-full items-center">
        <BodyHome></BodyHome>
      </div>
      <FooterHome></FooterHome>
    </>
  );
};

export default HomePageLayout;
