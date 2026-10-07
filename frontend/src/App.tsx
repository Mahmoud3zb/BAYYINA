import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop, HashRedirect } from './components/routing/ScrollToTop';
import { RouteSeoSync } from './components/routing/RouteSeoSync';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { RequestPage } from './pages/RequestPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-800 flex flex-col antialiased">
        <ScrollToTop />
        <HashRedirect />
        <RouteSeoSync />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:categoryId" element={<ServicesPage />} />
            <Route path="/request" element={<RequestPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
