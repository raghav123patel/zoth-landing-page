import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { PartnerStrip } from "@/components/partners/partner-strip";
import { DetailsSection } from "@/components/details/details-section";
import { Footer } from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#FF4600] selection:text-white relative">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Main Navigation */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1 flex flex-col">
        {/* 3. Hero Region with Sale Metrics & Action HUD Panel */}
        <HeroSection />

        {/* 4. Partner / Backer Marquee Strip */}
        <PartnerStrip />

        {/* 5. Lower Content: Overview, Stepper & Specifications */}
        <DetailsSection />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
