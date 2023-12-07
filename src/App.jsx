import Navigation from "./ui/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Works />
      <Services />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
