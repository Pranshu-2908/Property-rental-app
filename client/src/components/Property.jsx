import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./home/Footer";
import FilterCard from "./property/FilterCard";
import Pro from "./property/Pro";

const propsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Property = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-[85%] mx-auto mt-5">
          <div className="flex gap-5">
            <div className="w-[20%]">
              <FilterCard />
            </div>
            {propsArray.length <= 0 ? (
              <span>No Property Found!!!!</span>
            ) : (
              <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
                <div className="flex flex-col gap-10 m-1">
                  {propsArray.map((prop, ind) => (
                    <div>
                      <Pro />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Property;
