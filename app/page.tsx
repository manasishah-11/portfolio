import { Footer } from "../components";
import { About, Hero, Projects, Technologies } from "../sections";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
      <div className="relative">
        <Technologies />
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </div>
  );
}
