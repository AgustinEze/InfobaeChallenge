import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./components/providers/AuthProvider";
import { LoginPage } from "./pages/LoginPage";
import { PostsPage } from "./pages/PostsPage";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/post/:tag" element={<PostsPage />} /> {/* ✅ Nueva ruta */}
          {/*         
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
