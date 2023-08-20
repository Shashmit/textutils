import { useState } from "react";
import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("white");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div className="blank">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <HeroSection showAlert={showAlert} mode={mode} />
    </div>
  );
}

export default App;
