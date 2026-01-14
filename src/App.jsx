import Nav from "./Nav";
import ScrollRocket from "./ScrollRocket";
import Body from "./Body";
import Contact from "./Contact";
// import Home from "Home";
// import About from "About";
// import Projects from "Projects";
// import Contact from "Contact";

function App() {
  return (
    <div className="App">
      <Nav>
        </Nav>
        <Body />
        <Contact />
        <ScrollRocket />

      <main>
        {/* <Home />
        <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;