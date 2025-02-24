import './App.css'
import Home from "./assets/Components/FunctionalComponents/Home";
import About from "./assets/Components/FunctionalComponents/About";
import Gallery from "./assets/Components/FunctionalComponents/Gallery";
import Contact from "./assets/Components/FunctionalComponents/Contact";
import Signup from "./assets/Components/FunctionalComponents/Signup";
import NavBar from "./assets/Components/FunctionalComponents/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./assets/Components/FunctionalComponents/Hooks/UseEffect";
import UseEffectsAPI from "./assets/Components/FunctionalComponents/Hooks/UseEffectsAPI";
import UseRef from "./assets/Components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./assets/Components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./assets/Components/FunctionalComponents/Hooks/UseCallback";
import UseMemoize from "./assets/Components/FunctionalComponents/Hooks/UseMomoize";
import HoC from "./assets/Components/FunctionalComponents/HoC/HoC";
import LazyLoadingAndSuspense from './assets/Components/FunctionalComponents/Memoization/LazyLoadingAndSuspense.jsx';
import CoE from './assets/Components/FunctionalComponents/CoE.jsx';

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
          <Route path="/use-effects-api" element={<UseEffectsAPI />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-memoize" element={<UseMemoize />} />
          <Route path="/hoc" element={<HoC />} />
          <Route path="/lazy" element={<LazyLoadingAndSuspense />} />
          <Route path="/res" element={<CoE />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;