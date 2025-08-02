import InputForm from "../Elements/Input/Index";
const FormLogin = () => {
  return (
    <div className="gap-3 flex flex-col">
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
    </div>
  );
};

export default FormLogin;
