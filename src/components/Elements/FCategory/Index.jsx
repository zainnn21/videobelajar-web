import Title from "./Title";
import PropTypes from "prop-types";

const CategoryFooter = (props) => {
  const { children, title, isOpen, onToggle, showToggle = false } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        {showToggle && (
          <button
            onClick={onToggle}
            className="md:hidden flex items-center justify-center w-6 h-6 transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <img
              src="/src/assets/rightArrow.png"
              alt="Toggle"
              className="w-4 h-4"
            />
          </button>
        )}
      </div>
      <ul
        className={`flex flex-col gap-3.5 text-base font-medium leading-[140%] tracking-[0.2px] text-[#333333AD] md:flex ${
          isOpen || !showToggle ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

CategoryFooter.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  showToggle: PropTypes.bool,
};

export default CategoryFooter;
