import PropTypes from "prop-types";

const Selected = ({ onAddPlayerClick, selectedProduct, handleDelete }) => {
  // console.log(selectedProduct);
  console.log(selectedProduct);
  return (
    <div className="w-full h-screen mt-10">
      <h2 className="text-2xl font-semibold pt-3 mb-8">
        Selected Player ({selectedProduct.length}/6)
      </h2>
      {/* cart */}
      <div>
        {selectedProduct.map((product) => (
          // const {image, name, role, battingType}=product
          // eslint-disable-next-line react/jsx-key
          <div className="flex justify-between items-center border p-4 mb-4 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={product.image}
                  alt=""
                  className="w-20 h-[72px] object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.role}</p>
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
      <div className="w-full"></div>
      <button onClick={onAddPlayerClick} className="btn bg-lime-500">
        Add More Player
      </button>
    </div>
  );
};

Selected.propTypes = {
  onAddPlayerClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  selectedProduct: PropTypes.array.isRequired,
};
export default Selected;
