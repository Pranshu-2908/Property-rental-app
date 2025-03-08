import React from "react";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="mx-100 my-50 ">
        <div>
          <h4 className="font-bold text-3xl mb-5">
            Things you can do with DreamHouse
          </h4>
          <ul className="ml-5 text-muted-foreground list-disc">
            <li className="text-lg mb-2">Post one Single Property for FREE</li>
            <li className="text-lg mb-2">
              Set property alerts for your requirement
            </li>
            <li className="text-lg mb-2">Get accessed by over 1 Lakh buyers</li>
            <li className="text-lg mb-2">
              Showcase your property as Rental, PG or for Sale
            </li>
            <li className="text-lg mb-2">
              Get instant queries over Phone, Email and SMS
            </li>
            <li className="text-lg mb-2">
              Performance in search & Track responses & views online
            </li>
            <li className="text-lg mb-2">
              Add detailed property information & multiple photos per listing
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
