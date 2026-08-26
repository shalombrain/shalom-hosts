import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shalom Adebola",
  jobTitle: "Executive Host & Moderator",
  url: "https://shalomhosts.xyz",
  image: "https://shalomhosts.xyz/images/shalom-hosting1.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.instagram.com/shalombrain",
    "https://www.linkedin.com/in/shalombrain",
    "https://x.com/shalombrain",
  ],
};

export default function Home() {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personSchema),
  }}
/>
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}