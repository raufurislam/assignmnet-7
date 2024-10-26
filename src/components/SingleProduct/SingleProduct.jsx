import PropTypes from "prop-types";

const SingleProduct = ({ product, handleSelectedProduct }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    product;
  // console.log(handleSelectedProduct);
  return (
    <div className="border rounded-lg p-4 w-full">
      <img className="w-full h-52 object-cover rounded-lg" src={image} alt="" />

      <div className="flex items-center mt-4 text-gray-800">
        <i className="fa-solid fa-user "></i>
        <h2 className="ml-4 font-semibold text-lg">{name}</h2>
      </div>

      <div className="flex justify-between items-center mt-1">
        <div className="text-gray-500">
          <i className="fa-solid fa-flag mr-2"></i> {country}
        </div>
        <div>
          <button className="btn btn-sm text-gray-800">{role}</button>
        </div>
      </div>
      <hr className="my-4" />

      <div className="space-y-2">
        <div>
          <h3 className="text-gray-800 font-bold">Rating</h3>
        </div>

        {/* 2 */}
        <div className="flex justify-between">
          <div className="text-gray-800">{battingType}</div>
          <div className="text-gray-500">{bowlingType}</div>
        </div>
        {/* 3 */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-7"
              src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
              alt=""
            />
            {biddingPrice}
          </div>
          <button
            onClick={() => handleSelectedProduct(product)}
            className="btn btn-sm bg-transparent border"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SingleProduct;
