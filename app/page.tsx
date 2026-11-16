import Hero from "@/components/landing/hero";
import LeadersSection from "@/components/landing/leaders-section";
import LegacyBanner from "@/components/landing/legacybanner";
import AboutSection from "@/components/landing/about";
import MissionSection from "@/components/landing/missionAndVision";
import HeritageSection from "@/components/landing/heritageHighlights";
import GatheringSection from "@/components/landing/gatheringSection";
import InitiativesSection from "@/components/landing/initiatives-section";
import CommunityMoments from "@/components/landing/commuinty-moments";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadersSection />
      <LegacyBanner />
      <AboutSection />
      <MissionSection />
      <HeritageSection />
      <GatheringSection />
      <InitiativesSection />
      <CommunityMoments />
    </main>
  );
}
