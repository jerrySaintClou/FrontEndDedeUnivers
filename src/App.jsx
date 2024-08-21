import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Router from "./Components/Router";
import { DataProvider } from "./Components/Context/DataContext/DataContext";
import { TokenProvider } from "./Components/Context/TokenContext/TokenContext";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TokenProvider>
        <DataProvider>
          <Router />
        </DataProvider>
      </TokenProvider>
    </>
  );
}

export default App;
