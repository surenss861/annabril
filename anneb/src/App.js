import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Payment from "./pages/calculators/Payment";
import Affordability from "./pages/calculators/Affordability";
import RentVsBuy from "./pages/calculators/RentVsBuy";
import Book from "./pages/Book";
import PreApproval from "./pages/PreApproval";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS once at app level
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      disable: false
    });
  }, []);

  useEffect(() => {
    // More aggressive refresh on route change
    const timer = setTimeout(() => {
      AOS.refreshHard(); // Use refreshHard for complete re-initialization
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home key={location.pathname} />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculators/payment" element={<Payment />} />
        <Route path="/calculators/affordability" element={<Affordability />} />
        <Route path="/calculators/rent-vs-buy" element={<RentVsBuy />} />
        <Route path="/book" element={<Book />} />
        <Route path="/pre-approval" element={<PreApproval />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}