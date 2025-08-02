import Header from "../components/Fragments/Header";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <div className="px-5 py-6 md:max-w-[590px] justify-center items-center">
        <AuthLayout></AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
