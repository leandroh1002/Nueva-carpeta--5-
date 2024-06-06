import { Route, Routes, useLocation } from "react-router-dom";
import Card from "./components/Card/Card.jsx";
import Home from "./components/Home/Home.jsx";
import PATHROUTES from "./helpers/PathRoutes.helper.js";
import Details from "./components/Details/Details.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Login from "./components/Login.jsx";
import FormAddCompanies from "./components/FormAddCompanies.jsx";
import FormAddCarrer from "./components/FormAddCarrer.jsx";
import FormAddPublish from "./components/FormAddPublish.jsx";
import Signin from "./components/Signin.jsx";
import FormPerfil from "./components/FormPerfil.jsx";

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const location = useLocation();


  return (
    <div>
      <NavBar />
      {/* Conditionally render Hero and Testimonials */}
      {(location.pathname === '/' || location.pathname === '/home') && <Hero />}
      
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Home />} />
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.DETAIL} element={<Details />} />
        <Route path={PATHROUTES.LOGIN} element={<Login />} />
        <Route path={PATHROUTES.SIGNIN} element={<Signin />} />
        <Route path={PATHROUTES.FORM_ADD_COMPANIES} element={<FormAddCompanies />} />
        <Route path={PATHROUTES.FORM_ADD_CARRER} element={<FormAddCarrer />} />
        <Route path={PATHROUTES.PUBLISH} element={<FormAddPublish />} />
        <Route path={PATHROUTES.PERFIL} element={<FormPerfil />} />
      </Routes>

      {/* Conditionally render Testimonials */}
      {(location.pathname === '/' || location.pathname === '/home') && <Testimonials />}
      <Footer />
    </div>
  );
};


export default App
