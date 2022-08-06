import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import AppliancesServices from "./Components/AppliancesServices/AppliancesServices";
import AssuredPart from "./Components/AssurdPart/AssuredPart";
import Banner from "./Components/Banner/Banner";
import CarpenterServices from "./Components/CarpenterServices/CarpenterServices";
import CustomerReviews from "./Components/CustomerReviews/CustomerReviews";
import DayServices from "./Components/DayServices/DayServices";
import DiscountPart from "./Components/DiscountPart/DiscountPart";
import ElectricianServices from "./Components/ElectricianServices/ElectricianServices";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PlumberServices from "./Components/PlumberServices/PlumberServices";
import ReferSection from "./Components/ReferSection/ReferSection";
import SafeServices from "./Components/SafeServices/SafeServices";
import StampSection from "./Components/StampSection/StampSection";
import TrendingServices from "./Components/TrendingServices/TrendingServices";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <TrendingServices />
      <DayServices />
      <SafeServices />
      <AssuredPart />
      <AppliancesServices />
      <DiscountPart />
      <ElectricianServices />
      <PlumberServices />
      <CarpenterServices />
      <AboutUs />
      <CustomerReviews />
      <ReferSection />
      <StampSection />
      <Footer />
    </div>
  );
}

export default App;
