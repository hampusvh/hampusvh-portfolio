import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import Footer from "@/components/sections/Footer";

function Page() {
  return (
    <main className="page">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <Footer />
    </main>
  );
}
export default Page;