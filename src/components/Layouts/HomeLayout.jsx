import Header from "../Fragments/Header";
import BodyHome from "../Fragments/BodyHome";

const HomePageLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center px-30 py-16 gap-16">
        <BodyHome></BodyHome>
      </div>
    </>
  );
};

export default HomePageLayout;
