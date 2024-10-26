import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });
  const [coins, setCoins] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const handleIsActiveStatus = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  const addCoins = (amount) => {
    setCoins(coins + amount);
    toast.success(`You've claimed ${amount} free credits!`, {
      position: "top-center",
    });
  };
  const handleSelectedProduct = (product) => {
    if (selectedProduct.length >= 6) {
      toast.info("You can only select up to 6 players");
      return;
    }
    const isExist = selectedProduct.find(
      (p) => p.playerId === product.playerId
    );
    if (isExist) {
      toast.warn("Player is already selected");
    } else if (coins < product.biddingPrice) {
      toast.error("Not enough coins to buy this player");
    } else {
      setCoins(coins - product.biddingPrice);
      const newProducts = [...selectedProduct, product];
      setSelectedProduct(newProducts);
      toast.success(`${product.name} has been added to your team`);
    }
  };

  const handleDelete = (playerId) => {
    const playerToRemove = selectedProduct.find((p) => p.playerId === playerId);
    if (playerToRemove) {
      setCoins(coins + playerToRemove.biddingPrice);
      const remainingProduct = selectedProduct.filter(
        (p) => p.playerId !== playerId
      );
      setSelectedProduct(remainingProduct);
      toast.info(`${playerToRemove.name} has been removed from your team`);
    }
  };

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner addCoins={addCoins}></Banner>
      <ContentContainer
        isActive={isActive}
        handleIsActiveStatus={handleIsActiveStatus}
        handleSelectedProduct={handleSelectedProduct}
        selectedProduct={selectedProduct}
        handleDelete={handleDelete}
      ></ContentContainer>
      {/* <Footer></Footer> */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
