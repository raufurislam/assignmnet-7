import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // state declear
  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });
  // coin
  const [coins, setCoins] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState([]);

  // handler
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
  // coin
  const addCoins = (amount) => {
    setCoins(coins + amount);
  };
  // handle player selection
  const handleSelectedProduct = (product) => {
    if (selectedProduct.length >= 6) {
      alert("You can only select a maximum of 6 players.");
      return;
    }
    const isExist = selectedProduct.find(
      (p) => p.playerId === product.playerId
    );
    if (isExist) {
      alert("Player is already selected");
    } else if (coins < product.biddingPrice) {
      alert("Not enough coins to buy this player");
    } else {
      // reduce coins by the bidding price
      setCoins(coins - product.biddingPrice);
      const newProducts = [...selectedProduct, product];
      setSelectedProduct(newProducts);
    }
  };

  // handle player removal
  const handleDelete = (playerId) => {
    const playerToRemove = selectedProduct.find((p) => p.playerId === playerId);
    if (playerToRemove) {
      // refund the bidding price
      setCoins(coins + playerToRemove.biddingPrice);
      const remainingProduct = selectedProduct.filter(
        (p) => p.playerId !== playerId
      );
      setSelectedProduct(remainingProduct);
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
    </>
  );
}

export default App;
