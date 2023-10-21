import PropTypes from "prop-types";

const SlideProd = ({ prod }) => {
  const { prodImage, prodName } = prod;

  return (
    <>
      <div className="flex gap-4 flex-col justify-center items-center">
        <div className="flex-1">
          <img className="w-40" src={prodImage} alt="" />
        </div>
        <div className="flex-1">
          <h3>{prodName}</h3>
        </div>
      </div>
    </>
  );
};

SlideProd.propTypes = {
  prod: PropTypes.object.isRequired,
};
export default SlideProd;
