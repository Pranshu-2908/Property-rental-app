import HeroSection from "./home/HeroSection";
import Navbar from "./shared/Navbar";
import CategoryCarousel from "./home/CategoryCarousel";
import StatsDisplay from "./home/StatsDisplay";
import Footer from "./shared/Footer";
import BgGradient from "./shared/BgGradient";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BgGradient />
      <main className="flex-grow scrollable">
        <HeroSection />
        <CategoryCarousel />
        <StatsDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
