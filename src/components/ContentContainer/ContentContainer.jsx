import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import PropTypes from "prop-types";

const ContentContainer = ({
  handleIsActiveStatus,
  isActive,
  handleSelectedProduct,
  selectedProduct,
  handleDelete,
}) => {
  const handleAddPlayerClick = () => {
    handleIsActiveStatus("available");
  };

  return (
    <div className=" relative">
      <div className="max-w-7xl mx-auto py-2 flex justify-between items-center mt-4 mb-2">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold ml-10 mt-3">
            {isActive.available
              ? "Available Players"
              : `Selected Players (${selectedProduct.length}/6)`}
          </h2>
        </div>
        <div className="flex gap-3 px-10">
          <div
            onClick={() => handleIsActiveStatus("available")}
            className={`${
              isActive.available ? "btn bg-lime-400 font-bold" : "btn font-bold"
            }`}
          >
            Available
          </div>
          <div
            onClick={() => handleIsActiveStatus("about")}
            className={`${
              isActive.available ? "btn font-bold" : "btn bg-lime-400 font-bold"
            }`}
          >
            Selected ({selectedProduct.length})
          </div>
        </div>
      </div>
      <div className="absolute top-16 left-0 w-full py-2">
        {isActive.available ? (
          <Available handleSelectedProduct={handleSelectedProduct}></Available>
        ) : (
          <Selected
            onAddPlayerClick={handleAddPlayerClick}
            selectedProduct={selectedProduct}
            handleDelete={handleDelete}
          ></Selected>
        )}
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  handleIsActiveStatus: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  handleSelectedProduct: PropTypes.func.isRequired,
  selectedProduct: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContentContainer;
