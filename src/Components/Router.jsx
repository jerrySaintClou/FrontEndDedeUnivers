import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Elements/NavBar/NavBar";
import Footer from "./Elements/Footer/Footer";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import CategoryProduct from "./Pages/CategoryProduct";
import ShoppingCart from "./Pages/ShoppingCart";
import ProfilAdmin from "./Pages/ProfilAdmin";
import AddProduitContextProvider from "./Context/ProduitContext/AddProduitContext/AddProduitContext";
import ModifProductForm from "./forms/ProductForm/ModifProductForm/ModifProductForm";

export default function Router() {
  //var d'etat

  // console.log(themeDark);

  return (
    <AddProduitContextProvider>
      <BrowserRouter>
        <NavBar />
        {/* <Cookie /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categoryProduct" element={<CategoryProduct />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/profilAdmin" element={<ProfilAdmin />} />
          {/* <Route path="/modifForm:idProduit" element={<ModifProductForm />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AddProduitContextProvider>
  );
}
