import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FilterCard from "./property/FilterCard";
import Pro from "./property/Pro";
import BgGradient from "./shared/BgGradient";
import { useSelector } from "react-redux";
import useGetAllProps from "../hooks/useGetAllProps";

const Property = () => {
  useGetAllProps();
  const { allProps } = useSelector((store) => store.property);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <BgGradient /> */}
      <main className="flex-grow">
        <div className="max-w-[85%] mx-auto mt-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[20%]">
              <FilterCard />
            </div>
            {allProps.length <= 0 ? (
              <span>No Property Found!!!!</span>
            ) : (
              <div className="flex-1 h-[80vh] overflow-y-auto pb-5 scrollable">
                <div className="flex flex-col gap-10 m-1">
                  {allProps.map((prop) => (
                    <ul key={prop?._id}>
                      <li>
                        {" "}
                        <Pro prop={prop} />
                      </li>
                    </ul>
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
