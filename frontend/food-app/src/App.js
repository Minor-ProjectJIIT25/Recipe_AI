import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Dashboard from "./pages/Dashboard"; // ✅ Import Dashboard
import MoodSelector from "./pages/Home/MoodSelector";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Added Dashboard Route */}
        <Route path="/eat-by-mood" element={<MoodSelector />} />
        <Route path="/recipes" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;
