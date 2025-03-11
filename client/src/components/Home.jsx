import HeroSection from "./home/HeroSection";
import Navbar from "./shared/Navbar";
import CategoryCarousel from "./home/CategoryCarousel";
import StatsDisplay from "./home/StatsDisplay";
import Footer from "./home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <StatsDisplay />
      <Footer />
    </div>
  );
};

export default Home;
