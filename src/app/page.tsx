"use client";

import CaseResearch from "@/components/features/client_side/landing_page/CaseResearch";
import DeliverNHS from "@/components/features/client_side/landing_page/deliver_nhs";
import Evidence from "@/components/features/client_side/landing_page/Evidence";
import FeatureSection from "@/components/features/client_side/landing_page/FeatureSection";
import HeroSection from "@/components/features/client_side/landing_page/HeroSection";
import NhsSolutions from "@/components/features/client_side/landing_page/nhsSolutions";
import VideoTestimonials from "@/components/features/client_side/landing_page/VideoTestimonials";
import FaqSection from "@/components/features/client_side/landing_page/FaqSection";
import AIIntakeSection from "@/components/features/client_side/landing_page/AIIntakeSection";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <FeatureSection
          title="For NHS, Private & Not-for-profit Services"
          description="A scalable, clinically-safe digital mental health platform, adaptable to the unique NHS care pathway as well as any user journeys with private providers and not-for-profit organisations."
          secondDescription="Learn how Cerina Configures flexible pathways that align with your governance and service requirements."
          buttonText="Business Solution"
          media="home_page/services_icon.svg"
          imagePosition="right"
        />
      </section>

      <section id="individuals">
        <FeatureSection
          title="For"
          secondTitle="Individuals"
          description="We meet you where you are. Take the small steps to access secure, stigma-free mental health tools, with self-guided Cognitive Behavioural Therapy (CBT) sessions, clinically-safe AI chatbot available 24/7, and many more self-care exercises to support your mental health journey."
          buttonText="Individual Solution"
          media="/home_page/individuals.svg"
          imagePosition="left"
          showStoreButtons={true}
        />
      </section>

      <AIIntakeSection />



      <NhsSolutions/>

      <DeliverNHS/>

      <Evidence/>

      <CaseResearch/>

      
      <VideoTestimonials/>

      <FaqSection />

    </>
  );
}
