import HeroSection from "./home/HeroSection";
import Navbar from "./shared/Navbar";
import CategoryCarousel from "./home/CategoryCarousel";
import StatsDisplay from "./home/StatsDisplay";
import Footer from "./home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        <HeroSection />
        <CategoryCarousel />
        <StatsDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
