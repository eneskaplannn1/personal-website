import Navigation from "./ui/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Home />
        <About />
        <Skills />
        <Works />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
