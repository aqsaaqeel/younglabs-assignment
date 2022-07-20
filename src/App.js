import "./styles.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
// import { CardSmall } from "./components/CardSmall/CardSmall.jsx";
import { ApiCall } from "./apiCall";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">
        <ApiCall />
      </div>
    </div>
  );
}
