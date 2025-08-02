import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-t px-6 py-4 bg-white border-[#F1F1F1] border-solid border-[1px 0px 1px 0px] shadow-[#3E434A4F]">
      <Logo></Logo>
    </nav>
  );
};

export default Navbar;
