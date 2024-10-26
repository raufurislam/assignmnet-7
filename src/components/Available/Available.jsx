import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const Available = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full h-screen mt-10">
      <div className="max-w-7xl mx-auto px-10 py-2 grid grid-cols-3 gap-4 w-full">
        {products.map((p) => (
          <SingleProduct
            key={p.playerId}
            product={p}
            handleSelectedProduct={handleSelectedProduct}
          ></SingleProduct>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

Available.propTypes = {
  handleSelectedProduct: PropTypes.func.isRequired,
};

export default Available;
