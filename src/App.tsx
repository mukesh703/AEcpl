/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import BryAir from './BryAir';
import BMS from './BMS';
import ProductDetails from './ProductDetails';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/bry-air" element={<BryAir />} />
          <Route path="/products/bms" element={<BMS />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
