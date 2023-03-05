import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetPassword/*" element={<ForgetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;
