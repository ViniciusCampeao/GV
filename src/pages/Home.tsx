import Header from "../components/Header";
import Cards from "../components/Cards";
import FirstComponent from "../components/FirstComponent";
import Services from "../components/ServicesComponent";
import Specialist from "../components/Specialist";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import servicesData from "./partials/dataHome";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="lg:relative">
        <FirstComponent />
        <div className="lg:absolute w-full lg:transform lg:-translate-y-1/3">
          <Cards />
        </div>
      </div>
      <div className="lg:mt-96">
        <Services data={servicesData} />
      </div>
      <Testimonials />
      <Specialist />
      
      <Footer />
    </div>
  );
};

export default Home;
