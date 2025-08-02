import FormLogin from "../Fragments/FormLogin";
const AuthLayout = () => {
  return (
    <div className="flex flex-col rounded-tl-sm border p-5 gap-5 border-[#F1F1F1] bg-white">
      <h1 className="font-poppins font-semibold text-2xl leading-[110%] text-center text-[#222325]">
        Masuk Ke Akun
      </h1>
      <p className="font-DMsans font-normal text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] text-center">
        Yuk, lanjutin belajarmu di videobelajar.
      </p>
      <FormLogin></FormLogin>
    </div>
  );
};

export default AuthLayout;
