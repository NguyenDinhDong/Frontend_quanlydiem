import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InputDiem from "./pages/InputDiem";
import UpdateDiem from "./pages/UpdateDiem";

// ✅ THÊM các trang quản lý
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import Classes from "./pages/Classes";
import Reports from "./pages/Reports";

function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {
    setAuth(localStorage.getItem("auth") === "true");
  }, []);

  return (
    <BrowserRouter>
      {isAuthenticated && <Header setAuth={setAuth} />}
      <div className="d-flex">
        {isAuthenticated && <Sidebar />}
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
            />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/input"
              element={<PrivateRoute element={<InputDiem />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/update"
              element={<PrivateRoute element={<UpdateDiem />} isAuthenticated={isAuthenticated} />}
            />

            {/* ✅ THÊM các route mới */}
            <Route
              path="/students"
              element={<PrivateRoute element={<Students />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/subjects"
              element={<PrivateRoute element={<Subjects />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/classes"
              element={<PrivateRoute element={<Classes />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/reports"
              element={<PrivateRoute element={<Reports />} isAuthenticated={isAuthenticated} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
