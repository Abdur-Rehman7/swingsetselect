import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contactus from "./pages/Contactus";
import Shop from "./pages/Shop";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Contactus" element={<Contactus />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
