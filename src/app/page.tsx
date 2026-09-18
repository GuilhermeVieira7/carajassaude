import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Treatments from "@/components/Treatments";
import Experience from "@/components/Experience";
import Team from "@/components/Team";
import Insurance from "@/components/Insurance";
import EmotionalStatement from "@/components/EmotionalStatement";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Treatments />
        <Experience />
        <Team />
        <Insurance />
        <EmotionalStatement />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
