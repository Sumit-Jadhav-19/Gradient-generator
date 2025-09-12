import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const [limit, setLimit] = useState(20);
  const [handleGenerate, setHandleGenerate] = useState(1);
  const [degree, setDegree] = useState(0);
  const handleLimit = (val) => {
    setLimit(val);
  };
  const handleGenerateButton = () => {
    setHandleGenerate(Math.floor(Math.random() * 1000) + 1);
  };
  const handledegree = (deg) => {
    setDegree(deg);
  };
  return (
    <>
      <Navbar
        limit={limit}
        handleLimit={handleLimit}
        handleGenerateButton={handleGenerateButton}
        handledegree={handledegree}
      />
      <div className="w-screen mt-[135px] md:mt-[50px] bg-linear-to-r from-gray-100 to-blue-100">
        <Home
          limit={limit}
          handleGenerateButton={handleGenerate}
          degree={degree}
        />
      </div>
    </>
  );
}

export default App;
