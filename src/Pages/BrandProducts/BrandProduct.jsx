import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';

const BrandProduct = ({ product }) => {
  const {_id, brand, prodImage, prodName, type, prodPrice, prodRating } = product;
//  console.log(product);
  return (
    <>
      <div className="bg-slate-700 flex flex-col justify-between">
        <div className="w-full">
          <img className="w-full" src={prodImage} alt="" />
        </div>
        <div className="px-5 py-4 space-y-5">
          <h4 className="text-2xl">{prodName}</h4>
          <div className="flex items-center justify-between">
            <Link className="text-blue-300">
              <h4>{brand}</h4>
            </Link>
            <Link className="text-blue-300">
              {" "}
              <h4>{type}</h4>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">${prodPrice}</p>
            <span>
              <ReactStars count={5} size={24} value={parseFloat(prodRating)} edit={true} />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Link to={`/products/${brand}/${prodName}`}>
            <button className="bg-slate-600 hover:bg-slate-200 transition-all hover:text-black px-4 py-1">
              Details
            </button>
            </Link>
            <Link to={`/update/${_id}`}>
            <button className="bg-slate-600 hover:bg-slate-200 transition-all hover:text-black px-4 py-1">
              Update
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

BrandProduct.propTypes = {
    product: PropTypes.object.isRequired,
}

export default BrandProduct;
