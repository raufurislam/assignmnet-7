import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Footer from "../Footer/Footer";

const Available = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  }, []);

  return (
    <div className="w-full h-screen mt-10">
      <div className="grid grid-cols-3 gap-4 w-full">
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

export default Available;
