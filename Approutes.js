import React from "react";
import { Routes, Route } from "react-router-dom";
import Clothing from "../pages/Clothing";
import Shoes from "../pages/Shoes";
import Bags from "../pages/Bags";
import Babies from "../pages/Babies";
import Electronics from "../pages/Electronics";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Decorations from "../pages/Decorations";
import Furnitures from "../pages/Furnitures";
import Sports from "../pages/Sports";
import News from "../pages/News";
import Order from "../pages/Order";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Faq from "../pages/Faq";
import Pay from "../pages/Pay";
import Orderstat from "../pages/Orderstat";
import Shipping from "../pages/Shipping";
import Services from "../pages/Services";
import Home from "../pages/home";

function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/babies" element={<Babies />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/decorations" element={<Decorations />} />
        <Route path="/furnitures" element={<Furnitures />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/faq" element={<Faq />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/orderstat" element={<Orderstat />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default Approutes;
