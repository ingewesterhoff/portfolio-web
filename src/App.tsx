import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Creative } from "./pages/Creative";
import { Contact } from "./pages/Contact";
import { TuneIn } from "./pages/projects/TuneIn";
import { CoCat } from "./pages/projects/CoCat";
import { Belevingsbox } from "./pages/projects/Belevingsbox";
import { MadeInChina } from "./pages/projects/MadeInChina";

// Set title immediately
if (typeof document !== "undefined") {
  document.title = "Inge Westerhoff";
}

export default function App() {
  useEffect(() => {
    document.title = "Inge Westerhoff";
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/tunein" element={<TuneIn />} />
        <Route path="/projects/cocat" element={<CoCat />} />
        <Route
          path="/projects/belevingsbox"
          element={<Belevingsbox />}
        />
        <Route
          path="/projects/madeinchina"
          element={<MadeInChina />}
        />
        <Route path="/creative" element={<Creative />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}