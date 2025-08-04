import Header from "../Fragments/Header";
import BodyHome from "../Fragments/BodyHome";

const HomePageLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center px-[120px] py-16 gap-16">
        <BodyHome></BodyHome>
      </div>
    </>
  );
};

export default HomePageLayout;
