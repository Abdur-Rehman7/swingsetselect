import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Aboutus" element={<AboutUs />} />
          <Route path="Contactus" element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
