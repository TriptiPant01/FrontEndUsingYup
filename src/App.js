import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import ProfilePage from "./scenes/profilepage";
import LoginPage from "./scenes/loginpage/index";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = Boolean(useSelector((state) => state.auth.token));

  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
