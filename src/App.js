import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
