import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "@pages/AdminPage";
import AdminLogInPage from "@pages/AdminLogInPage";
import AdminSignUpPage from "@pages/AdminSignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/login" element={<AdminLogInPage />} />
        <Route path="/signup" element={<AdminSignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
