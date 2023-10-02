
import '../../App.css';
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../../components/AboutUs/AboutUs';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AboutUs/>
      <Footer />
    
    </>
  );
}

export default Home;