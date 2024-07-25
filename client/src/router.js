import React from "react";
import { Route, Routes } from "react-router-dom";
import CategorizedAnimalsPage from "./Pages/CategorizedAnimals";
import Homepage from "./Pages/Homepage";
import PetProfilePage from "./Pages/PetProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
      <Route path="/:category" element={<CategorizedAnimalsPage />} />
      <Route path="/:categoryId/:id" element={<PetProfilePage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
    </Routes>
  );
};

export default Router;