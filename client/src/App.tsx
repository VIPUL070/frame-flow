import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

function App() {
  return(
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  )
}

export default App