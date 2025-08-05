import Logo from "./logo";
import Category from "./Category";
import Profile from "./profile";
import PP from "../../../assets/profile.png";

const Navbar = () => {
  const urlParam = window.location.pathname;
  console.log(urlParam);
  return (
    <>
      <div className="flex items-center justify-between md:max-w-280 w-full">
        <Logo></Logo>
        {urlParam === "/" && <Category>Kategori</Category>}
      </div>
      {urlParam === "/" && <Profile srcprofile={PP}></Profile>}
    </>
  );
};

export default Navbar;
