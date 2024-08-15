import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Router from "./Components/Router";
import { DataProvider } from "./Components/Context/DataContext/DataContext";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <DataProvider>
      <Router />
    </DataProvider>
    </>
  );
}

export default App;
