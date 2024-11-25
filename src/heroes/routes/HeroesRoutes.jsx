// Rutas exclusivas que funcionan dentro de nuestro modulo de heroes

import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../ui/components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DCPage } from "../pages/DCPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container"> {/* Para que el contenido no este tan pegado a los  bordes del navegador */}
        <Routes>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DCPage />}></Route>

          {/* Search y heroe */}
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>

          <Route path="/" element={<Navigate to="/marvel" />}></Route>
        </Routes>
      </div>
    </>
  );
};
