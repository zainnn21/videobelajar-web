import FormLogin from "../Fragments/FormLogin";

const AuthLayout = () => {
  return (
    <div className="flex flex-col rounded-tl-sm border p-5 gap-5 border-[#F1F1F1] bg-white">
      <FormLogin></FormLogin>
    </div>
  );
};

export default AuthLayout;
