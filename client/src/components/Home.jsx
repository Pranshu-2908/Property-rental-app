import HeroSection from "./home/HeroSection";
import Navbar from "./shared/Navbar";
import CategoryCarousel from "./home/CategoryCarousel";
import StatsDisplay from "./home/StatsDisplay";
import Footer from "./shared/Footer";
import BgGradient from "./shared/BgGradient";
import useGetAllProps from "../hooks/useGetAllProps";

const Home = () => {
  useGetAllProps();
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <BgGradient />
      <main className="flex-grow">
        <HeroSection />
        <CategoryCarousel />
        <StatsDisplay />
      </main>
      <Footer className="mt-auto w-full" />
    </div>
  );
};

export default Home;
