import Header      from "@/components/layout/Header";
import Footer      from "@/components/layout/Footer";
import Hero        from "@/components/sections/Hero";
import Services    from "@/components/sections/Services";
import Clients     from "@/components/sections/Clients";
import About       from "@/components/sections/About";
import Projects    from "@/components/sections/Projects";
import Gallery     from "@/components/sections/Gallery";
import Contact     from "@/components/sections/Contact";
import WorkWithUs  from "@/components/sections/WorkWithUs";
import InstagramFeed from "@/components/sections/InstagramFeed";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <About />
        {/* <Projects /> */}
        <Gallery />
        <Contact />
        <WorkWithUs />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
