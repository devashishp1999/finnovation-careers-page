import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Sections
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import AppBody from "./AppBody";
import CareersPage from "./pages/CareersPage";
import JobDetailsPage from "./pages/JobDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h3 className="center_pad">Loading...</h3>}>
        <Routes>
          <Route path="/" element={<AppBody />}>
            <Route index element={<span className="center_pad">Home</span>} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="careers/:jobId" element={<JobDetailsPage />} />
            <Route
              path="*"
              element={<h3 className="center_pad">404 Not Found</h3>}
            />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
