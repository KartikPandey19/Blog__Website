import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />

        <Route
          path="*"
          element={
            <h1 className="text-center mt-10 text-xl">404 - Page Not Found</h1>
          }
        />
      </Routes>
  );
}

export default App;
