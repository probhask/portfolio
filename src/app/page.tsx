import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Intoduction from "@/components/Intoduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ThemeProvider } from "@/context/theme.context";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen   mx-auto  px-2 bg-background text-background">
        {/* <Header /> */}
        <main className="space-y-8">
          <Intoduction />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
