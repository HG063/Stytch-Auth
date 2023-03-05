import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const stytchClient = new StytchHeadlessClient(
    `${process.env.REACT_APP_PUBLIC_TOKEN}`
  );

  return (
    <div className="App">
      <Router>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route
              path="/Stytch-Auth"
              element={<Navigate to="/Stytch-Auth/Login" replace={true} />}
            />
            <Route path="/Stytch-Auth/Login" element={<Login />} />
            <Route path="/Stytch-Auth/SignUp" element={<SignUp />} />
            <Route
              path="/Stytch-Auth/ForgetPassword/*"
              element={<ForgetPassword />}
            />
            <Route element={<ProtectedRoute />}>
              <Route path="/Stytch-Auth/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;
