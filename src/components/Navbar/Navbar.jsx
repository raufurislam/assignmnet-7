import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";

const Navbar = ({ coins }) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between px-10 py-2">
      <div>
        <img className="w-16" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <div className="flex gap-8 ">
          <a className="font-semibold" href="">
            Home
          </a>
          <a href="">Picture</a>
          <a href="">Teams</a>
          <a href="">Subscribes</a>
        </div>
        <button className="btn ml-8 bg-transparent border">
          <span>{coins}</span> Coin
          <img
            className="w-7"
            src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;
