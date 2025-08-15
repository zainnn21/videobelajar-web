import PropTypes from "prop-types";

const Stars = (props) => {
  const { images = [] } = props; // Default ke array kosong untuk mencegah error
  return (
    <div className="flex gap-0.5">
      {images.map((image, index) => (
        <img
          key={index} // 'key' wajib ada dan harus unik untuk setiap elemen dalam list
          src={image}
          alt={`star-${index + 1}`}
          className="w-[18px] h-[18px]"
        />
      ))}
    </div>
  );
};

Stars.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Stars;
