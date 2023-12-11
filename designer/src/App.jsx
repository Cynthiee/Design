import "./App.css";
import { Route, Routes } from "react-router";
import Mainn from "./components/mainn";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Trending from "./pages/trending";
import Explore from "./pages/explore";
import Nopage from "./pages/404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainn />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
