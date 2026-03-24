import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SecureEdgePage from "./pages/SecureEdgePage";
import AssessmentPage from "./pages/AssessmentPage";
import GlossaryPage from "./pages/GlossaryPage";
import NewsPage from "./pages/NewsPage";
import PrivacyPage from "./pages/PrivacyPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function navigate(page: string) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "secureedge" && <SecureEdgePage onNavigate={navigate} />}
        {currentPage === "assessment" && <AssessmentPage />}
        {currentPage === "glossary" && <GlossaryPage />}
        {currentPage === "news" && <NewsPage />}
        {currentPage === "privacy" && <PrivacyPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
