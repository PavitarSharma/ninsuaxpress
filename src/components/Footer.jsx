import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    // Send email to server
  };
  return (
    <footer className="py-16 bg-white border-t px-4">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-primary font-bold text-xl font-poppins mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 font-poppins">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold text-xl font-poppins mb-4">
              We Offer
            </h3>
            <ul className="space-y-3 font-poppins">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Multimodal Transportation
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Warehousing Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Packaging Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  3PL & Inventory Managment
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-primary transition"
                >
                  4PL/Inplant Logistics/Project Managment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold text-xl font-poppins mb-4">
              Stay Connected
            </h3>
            <div className="space-y-3 font-poppins">
              <a
                href="tel:0124 4070191"
                className="text-gray-700 hover:text-primary transition flex items-center gap-2"
              >
                <PhoneCall size={20} />
                <span>0124 4070191</span>
              </a>
              <a
                href="mailto:info@vinsumaxpress.com"
                className="text-gray-700 hover:text-primary transition flex items-center gap-2"
              >
                <Mail size={20} />
                <span>info@vinsumaxpress.com</span>
              </a>
              <a
                href="mailto:info@vinsumaxpress.com"
                className="text-gray-700 hover:text-primary transition flex items-center gap-2"
              >
                <MapPin size={20} />
                <span className="flex-1 text-[15px]">
                  404- Electronic City, Udyog Vihar, Phase IV, Sector 18,
                  Gurugram, 122015.
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-primary font-bold text-xl font-poppins mb-4">
              Subscribe Now!
            </h3>
            <p className="text-sm">
              We are the most trusted, reliable and preferred resource partner
              to join hands within supply chain management industry.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center my-8">
              <input
                type="email"
                placeholder="Your E-mail Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border py-3 px-2 rounded-l border-gray-300 border-r-0 outline-none text-sm text-gray-800"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-r py-3 px-2 text-sm"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-800 hover:text-primary transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-800 hover:text-primary transition"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-800 hover:text-primary transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-800 hover:text-primary transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center gap-2 mt-10">
          {/* <img src="/images/logo.svg" alt="logo" className="h-20" /> */}
          <p className="text-center font-poppins">© Copyright 2022 <span className="text-primary">Vinsum Axpress</span>. All Rights Reserved</p>
          <p className="text-center text-sm font-poppins">Designed by <span className="text-primary">Vinsum Axpress Group</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
