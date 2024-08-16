import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>

    </React.StrictMode>
  </CartProvider>
);
