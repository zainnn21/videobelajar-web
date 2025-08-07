import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <form className="flex flex-col rounded-sm border p-5 md:p-9 gap-5 md:gap-9 border-[#F1F1F1] bg-white md:max-w-[590px] max-w-[320px] w-full">
      {children}
    </form>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
