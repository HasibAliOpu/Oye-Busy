import "./App.css";
import Banner from "./Components/Banner/Banner";
import DayServices from "./Components/DayServices/DayServices";
import Navbar from "./Components/Navbar/Navbar";
import TrendingServices from "./Components/TrendingServices/TrendingServices";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <TrendingServices />
      <DayServices />
    </div>
  );
}

export default App;
