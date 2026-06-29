import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Servicos from "./pages/Serviços";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/servicos" element={<Servicos />} />
    </Routes>
  );
}