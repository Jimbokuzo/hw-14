import { Routes, Route } from "react-router-dom";
import { HomeFeature, ContactFeature } from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/contacrs" element={<ContactFeature />} />
  </Routes>
);
