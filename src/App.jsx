import Header from "./ui/Header";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Services from "./components/Services";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Services />
      {/* <ContactMe /> */}
    </>
  );
}

export default App;
