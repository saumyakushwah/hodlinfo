import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Table from "./components/Table";
import Footer from "./components/Footer";
import AddToHomeBtn from "./components/AddToHomeBtn";

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div style={{ backgroundColor: dark ? "#191d28" : "white" }}>
      <Navbar dark={dark} setDark={setDark} />
      <Pricing dark={dark} />
      <Table dark={dark} />
      <Footer />
      <AddToHomeBtn />
    </div>
  );
}
