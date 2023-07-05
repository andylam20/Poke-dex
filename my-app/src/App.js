import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/:pokemon" element={<Pokemon />} />
    </Routes>
    </BrowserRouter>
  )
}