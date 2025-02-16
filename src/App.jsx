import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Rutas protegidas dentro de ProtectedRoute */}
        {/*         
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
