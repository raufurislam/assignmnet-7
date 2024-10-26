import footerLogo from "../../assets/images/logo-footer.png";
import bg from "../../assets/images/bg-shadow.png";

const Footer = () => {
  return (
    <div className="relative mt-[280px]">
      {/* Newsletter */}
      <div
        className="absolute -top-48 left-1/2 transform -translate-x-1/2 z-10 border rounded-2xl p-5  border-white"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {/* Background Image Banner */}
        <div
          className="relative py-24 px-56 rounded-xl bg-center bg-cover bg-white text-center border"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h2 className="text-lg font-bold text-black my-2">
            Subscribe to our Newsletter
          </h2>
          <h3 className="text-sm text-gray-500 mb-6">
            Get the latest updates and news right in your inbox!
          </h3>
          <div className="flex gap-2 mt-4 justify-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-[250px] max-w-xs"
            />
            <button className="btn bg-gradient-to-br from-purple-500 to-orange-300 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-950 w-full pt-20 text-center rounded-t-3xl">
        <div className="flex justify-center">
          <img src={footerLogo} alt="Footer Logo" className="h-24 mt-48" />{" "}
        </div>
        <div className="grid grid-cols-3 text-left py-10 gap-20 mx-20">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex items-center bg-gradient-to-r from-gray-200 to-pink-300 rounded-full w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-transparent border-none placeholder-gray-500 text-gray-700 focus:outline-none w-full px-4 rounded-l-full"
              />
              <button className="btn bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-r-full px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-600" />
        <h1 className="text-white py-4">
          © 2024 Your Company. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
