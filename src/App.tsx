import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainLayout from "./pages/layouts/MainLayout";
import MainHomePage from "./pages/MainHomePage";
import Jobs from "./pages/Jobs";
import MessagePage from "./pages/MessagePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/" element={<MainLayout />}>
            {/* APLICACIÓN PRINCIPAL */}
            <Route index element={<MainHomePage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messages" element={<MessagePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
