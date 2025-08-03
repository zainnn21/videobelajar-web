import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";

const AuthLayout = () => {
  const urlParams = window.location.pathname.split("/")[1];
  return (
    <div className="flex flex-col rounded-sm border p-5 gap-5 border-[#F1F1F1] bg-white md:max-w-[590px] max-w-[320px] w-full">
      {urlParams == "Register" ? (
        <FormRegister></FormRegister>
      ) : (
        <FormLogin></FormLogin>
      )}
    </div>
  );
};

export default AuthLayout;
