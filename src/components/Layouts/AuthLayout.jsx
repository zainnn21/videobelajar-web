import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";

const AuthLayout = () => {
  const urlParams = window.location.pathname.split("/")[1];
  return (
    <div className="flex flex-col rounded-tl-sm border p-5 gap-5 border-[#F1F1F1] bg-white">
      {urlParams == "Register" ? (
        <FormRegister></FormRegister>
      ) : (
        <FormLogin></FormLogin>
      )}
    </div>
  );
};

export default AuthLayout;
