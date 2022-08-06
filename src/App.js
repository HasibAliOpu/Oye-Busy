import "./App.css";
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
    </div>
  );
}

export default App;
