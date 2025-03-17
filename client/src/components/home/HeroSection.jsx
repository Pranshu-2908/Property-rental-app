import { ArrowRight, Search, SearchCheck, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col gap-10 items-center justify-center max-w-7xl mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%,100% 61.6%,97.5% 27%,85.5% 0.1%,88.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%,45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-3rem)] aspect-1155/678 w-[36,125rem] -translate-x-1/2 bg-linear-to-br from-yellow-300 via-yellow-300 to-yellow-300 opacity-20 sm:left-[calc(40%-30rem)] sm:w-[40,1875rem]"
        />
      </div>
      <div className="flex">
        <div className="flex relative px-5 py-2 rounded-full border-2 shadow-2xl border-purple-400 hover:bg-purple-200 transition-all duration-700 hover:border-purple-700">
          <Sparkles className="w-6 h-6 mr-2 text-purple-600 animate-pulse" />
          <p className="text-base text-purple-600 cursor-default">
            No.1 Property Management system
          </p>
        </div>
      </div>

      <div className="font-bold text-5xl py-8 text-center max-w-2xl sm:max-w-xl sm:text-4xl lg:max-w-2xl lg:text-6xl">
        Search, Apply and get your
        <span className="relative inline-block">
          <span className="relative z-10 px-2">Dream House</span>
          <span className="m-1 absolute inset-0 bg-purple-600 -rotate-1 transform -skew-y-1"></span>
        </span>
      </div>
      <div className="text-sm sm:text-lg lg:text-xl text-center px-4 lg:px-8 lg:max-w-4xl sm:max-w-2xl text-gray-500">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          consectetur quibusdam illo doloribus. Tempore culpa voluptas iste hic
          esse illum?
        </p>
      </div>

      <div>
        <Button className="text-base sm:text-lg lg:text-lg px-8 lg:px-12 py-6 sm:py-7 lg:py-8 rounded-full bg-linear-to-r from-slate-800 to-purple-800 hover:from-purple-800 hover:to-slate-800 shadow-lg">
          <Link to="/property" className="flex gap-2 items-center">
            Explore Properties
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
