import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Efficiant from "./components/efficiant/Efficiant";
import WorkAnywhere from "./components/workanywhere/WorkAnywhere";
import Feature from "./components/feature/Feature";
import Getyour from "./components/getyour/Getyour";
import End from "./components/end/End";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Efficiant />  
<WorkAnywhere />
      <Getyour />
      <Feature />
      <End />
    </div>
  );
}

export default App;
