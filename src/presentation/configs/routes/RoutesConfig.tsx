import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const __HOME__ = lazy(() => import("../../../presentation/pages/home/Home"));

export default function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<__HOME__ />} />
      </Routes>
    </>
  );
}
