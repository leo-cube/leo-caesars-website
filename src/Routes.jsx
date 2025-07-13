import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import CorporateHomepage from "pages/corporate-homepage";
import ProductPortfolioShowcase from "pages/product-portfolio-showcase";
import ServicesCapabilities from "pages/services-capabilities";
import ContactGlobalPresence from "pages/contact-global-presence";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<CorporateHomepage />} />
        <Route path="/corporate-homepage" element={<CorporateHomepage />} />
        <Route path="/product-portfolio-showcase" element={<ProductPortfolioShowcase />} />
        <Route path="/services-capabilities" element={<ServicesCapabilities />} />
        <Route path="/contact-global-presence" element={<ContactGlobalPresence />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;