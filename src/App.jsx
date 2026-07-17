import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Efficiant from "./components/efficiant/Efficiant"; // naya section import
import "./App.css";
import WorkAnywhere from "./components/workanywhere/WorkAnywhere";
import Getyour from "./components/getyour/Getyour"; // naya section import
import Feature from "./components/feature/Feature";

import End from "./components/end/End";




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
