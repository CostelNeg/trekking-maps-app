import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import MapForm from "./components/MapForm";
import "bootstrap/dist/css/bootstrap.min.css";
import TrekDetail from "./pages/TrekDetails";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trek/:trekId" element={<TrekDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/addMap" element={<MapForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;