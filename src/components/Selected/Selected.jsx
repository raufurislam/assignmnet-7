import PropTypes from "prop-types";
import Footer from "../Footer/Footer";

const Selected = ({ onAddPlayerClick, selectedProduct, handleDelete }) => {
  console.log(selectedProduct);
  return (
    <div className="w-full h-screen mt-10">
      <div className="max-w-7xl mx-auto px-10 py-2">
        {selectedProduct.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex justify-between items-center border p-4 mb-4 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={product.image}
                  alt=""
                  className="w-[90px] h-20 object-cover rounded-md"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.role}</p>
                <p className="flex gap-1 items-center font-semibold text-gray-800 ">
                  <img
                    className="w-7"
                    src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
                    alt=""
                  />
                  {product.biddingPrice}
                </p>
              </div>
            </div>
            <div>
              <button onClick={() => handleDelete(product.playerId)}>
                <i className="fa-regular fa-trash-can text-red-600"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full "></div>
      <div className="max-w-7xl mx-auto px-10 py-2">
        <div className="border p-1 rounded-lg inline-flex">
          <button
            onClick={onAddPlayerClick}
            className="btn bg-lime-400 font-bold border-lime-400"
          >
            Add More Player
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

Selected.propTypes = {
  onAddPlayerClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  selectedProduct: PropTypes.array.isRequired,
};
export default Selected;
