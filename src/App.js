import "./App.css";
import AppliancesServices from "./Components/AppliancesServices/AppliancesServices";
import AssuredPart from "./Components/AssurdPart/AssuredPart";
import Banner from "./Components/Banner/Banner";
import DayServices from "./Components/DayServices/DayServices";
import Navbar from "./Components/Navbar/Navbar";
import SafeServices from "./Components/SafeServices/SafeServices";
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
    </div>
  );
}

export default App;
