import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import LineOr from "../Elements/LineOr";
import FormTitle from "../Elements/TitleForm";
const FormRegister = () => {
  return (
    <>
      <FormTitle
        title="Pendaftaran Akun"
        paragraph="Yuk, daftarkan akunmu sekarang juga!"
      ></FormTitle>
      <div className="gap-3 flex flex-col">
        <InputForm
          label="Nama Lengkap"
          name="NamaLengkap"
          placeholder=""
          type="text"
        ></InputForm>
        <InputForm
          label="E-Mail "
          name="email"
          placeholder=""
          type="email"
        ></InputForm>
        <InputForm
          label="Kata Sandi "
          name="password"
          placeholder=""
          tyoe="password"
        ></InputForm>
        <a
          href="#"
          className="font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] text-right"
        >
          Lupa Password?
        </a>
        <Button label="Masuk" bg="bg-[#3ECF4C]" textColor="text-white"></Button>
        <Button
          label="Daftar"
          bg="bg-[#E2FCD9CC]"
          textColor="text-[#3ECF4C]"
        ></Button>
        <LineOr></LineOr>
        <Button
          label="Masuk Dengan Google"
          bg="bg-white"
          textColor="text-[#4A505C]"
          border="border border-[#F1F1F1] border-solid"
          GoogleImg
        ></Button>
      </div>
    </>
  );
};

export default FormLogin;
