import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainLayout from "./pages/layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/" element={<MainLayout />}>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
