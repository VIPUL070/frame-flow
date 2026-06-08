import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"

function App() {
  return(
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  )
}

export default App