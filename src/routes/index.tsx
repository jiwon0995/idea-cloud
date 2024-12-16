import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/SignIn";
import HomePage from "@/pages/Home";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={"/signin"} element={<LoginPage />} />
      <Route path={"/home"} element={<HomePage />} />
    </Routes>
  );
}
