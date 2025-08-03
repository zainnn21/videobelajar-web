import Header from "../components/Fragments/Header";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <div className="px-5 py-6 md:justify-center md:items-center flex min-h-screen">
        <AuthLayout></AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
