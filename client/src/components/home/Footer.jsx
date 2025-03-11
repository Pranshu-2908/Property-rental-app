import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white pt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side - Company Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">DreamHomes</h2>
          <p className="text-sm text-white">
            Find your perfect rental home with ease.
          </p>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-400">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Middle - Quick Links */}
      <div className="flex space-x-6 text-sm justify-center">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm mt-4 bg-gray-800">
        &copy; {new Date().getFullYear()} Property Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
