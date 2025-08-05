import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col rounded-sm border p-5 gap-5 border-[#F1F1F1] bg-white md:max-w-[590px] max-w-[320px] w-full">
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
