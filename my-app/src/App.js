import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/:pokemon" element={<Pokemon />} />
    </Routes>
    </BrowserRouter>
  )
}