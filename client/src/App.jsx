import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Property Rental</h1>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2">
            Login
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Perfect Rental Home
        </h2>
        <p className="text-gray-600 max-w-lg">
          Browse through a variety of properties available for rent. Easy
          listings, secure payments, and hassle-free property management.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
          Explore Properties
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Property Rental. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
