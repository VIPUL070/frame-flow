import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;