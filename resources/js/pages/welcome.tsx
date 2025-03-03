import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero-section";
import Navbar from "@/components/home/navbar";
import Projects from "@/components/home/projects";

export default function Welcome() {



    return (
        <div >
            <Navbar />
        
            <Hero />
            <About />
            <Projects />
            <Contact />

            <Footer />
        </div>
    );
}
