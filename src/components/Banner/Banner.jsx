import bannerCricket from "../../assets/images/banner-main.png";
import bgShadow from "../../assets/images/bg-shadow.png";
import PropTypes from "prop-types";

const Banner = ({ addCoins }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-10 py-2 ">
      <div className="">
        <img
          className="bg-black object-cover w-full rounded-2xl"
          src={bgShadow}
          alt=""
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-20">
        <img src={bannerCricket} alt="" className="w-1/4" />
        <h1 className="text-4xl font-bold text-gray-50">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="text-2xl text-gray-300">
          Beyond Boundaries Beyond Limits
        </h3>
        <button
          onClick={() => addCoins(10000000)}
          className="btn bg-lime-500 text-black border-none"
        >
          Claims Free Credits
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  addCoins: PropTypes.func.isRequired,
};

export default Banner;
