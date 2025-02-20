import Home from "./assets/Components/Functional_Components/Home";
import About from "./assets/Components/Functional_Components/About";
import Gallery from "./assets/Components/Functional_Components/Gallery";
import Contact from "./assets/Components/Functional_Components/Contact";
import Signup from "./assets/Components/Functional_Components/Signup";
import NavBar from "./assets/Components/Functional_Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./assets/Components/Functional_Components/Hooks/UseEffect";
import UseEffectsAPI from "./assets/Components/Functional_Components/Hooks/UseEffectsAPI";
import UseRef from "./assets/Components/Functional_Components/Hooks/UseRef";
import UseMemo from "./assets/Components/Functional_Components/Hooks/UseMemo";
import UseCallback from "./assets/Components/Functional_Components/Hooks/UseCallback";
import UseMemoize from "./assets/Components/Functional_Components/Hooks/UseMomoize";
import HoC from "./assets/Components/Functional_Components/HoC/HoC";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home properties="Hello" sjit="SJIT" />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/UseEffectsAPI" element={<UseEffectsAPI />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="UseMemo" element={<UseMemo />} />
          <Route path="/use-callback" element= {<UseCallback />} />
          <Route path="/use-memoize" element= {<UseMemoize />} />
          <Route path="/hoc" element= {<HoC />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;