import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import MartyrsSection from "@/components/MartyrsSection";
import CultureSection from "@/components/CultureSection";
import LanguageDiversitySection from "@/components/LanguageDiversitySection";
import TimelineSection from "@/components/TimelineSection";
import LastWordsSection from "@/components/LastWordsSection";
import MothersLetterSection from "@/components/MothersLetterSection";
import GlobalEkusheySection from "@/components/GlobalEkusheySection";
import DomeGallerySection from "@/components/DomeGallerySection";
import PledgeSection from "@/components/PledgeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <section id="history">
        <HistorySection />
      </section>
      <section id="martyrs">
        <MartyrsSection />
      </section>
      <TimelineSection />
      <LastWordsSection />
      <MothersLetterSection />
      <section id="culture">
        <CultureSection />
      </section>
      <section id="languages">
        <LanguageDiversitySection />
      </section>
      <GlobalEkusheySection />
      <DomeGallerySection />
      <PledgeSection />
      <Footer />
    </div>
  );
};

export default Index;
