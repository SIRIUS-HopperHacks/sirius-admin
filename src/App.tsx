import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "@pages/AdminPage";
import AdminLogInPage from "@pages/AdminLogInPage";
import AdminSignUpPage from "@pages/AdminSignUp";
import { APIProvider } from "@contexts/api.context";

const App = () => {
  return (
    <APIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/login" element={<AdminLogInPage />} />
          <Route path="/signup" element={<AdminSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </APIProvider>
  );
};

export default App;
