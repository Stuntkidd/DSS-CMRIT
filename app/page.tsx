import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Quote from "../components/Quote";
import LatestNews from "../components/LatestNews";
import WhyJoinUs from "../components/WhyJoinUs";
import OurExpertise from "../components/OurExpertise";
import AboutUs from "../components/AboutUs";
import UpcomingEvents from "../components/UpcomingEvents";
import Team from "../components/Team";
import UdbhavMagzine from "../components/UdbhavMagzine";
import ContactUs from "../components/ContactUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <SecondaryNavbar />
      <Quote />
      <LatestNews />
      <WhyJoinUs />
      <OurExpertise />
      <AboutUs />
      <UpcomingEvents />
      <Team />
      <UdbhavMagzine />
      <ContactUs />
      <CTA />
      <Footer />
    </main>
  );
}
