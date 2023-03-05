import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";
import Dashboard from "./Pages/Dashboard";

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-22179d40-21f6-4d5b-ab91-c1063ec27a66"
  );

  return (
    <div className="App">
      <Router>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetPassword/*" element={<ForgetPassword />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;
