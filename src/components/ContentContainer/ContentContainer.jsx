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
  // console.log(isActive);
  // hander for add more player
  const handleAddPlayerClick = () => {
    handleIsActiveStatus("available"); // Change to available when button is clicked
  };
  return (
    <div className="max-w-7xl mx-auto px-10 py-2 relative">
      {/* btn area  */}
      <div className="flex justify-between absolute top-0 right-10 z-10 mt-10">
        <div></div>
        <div className="flex gap-3">
          <div
            onClick={() => handleIsActiveStatus("available")}
            className={`${
              isActive.available ? "btn bg-lime-500 text-white" : "btn"
            }`}
          >
            Available
          </div>
          <div
            onClick={() => handleIsActiveStatus("about")}
            className={`${
              isActive.available ? "btn " : "btn bg-lime-500 text-white"
            }`}
          >
            Selected ({selectedProduct.length})
          </div>
        </div>
      </div>
      {/* available / selected container  */}
      <div className="absolute -top-3 right-0 w-full px-10 py-2">
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
};
export default ContentContainer;
