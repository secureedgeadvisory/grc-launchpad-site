import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import PrivacyPage from "./pages/PrivacyPage";
import PlatformPage from "./pages/PlatformPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function navigate(page: string) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1e]">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "assessment" && <AssessmentPage />}
        {currentPage === "privacy" && <PrivacyPage />}
        {currentPage === "platform" && <PlatformPage onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
