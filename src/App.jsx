import { Route, Routes } from "react-router-dom";
import { Career, Home, LeadershipTeam } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership-team" element={<LeadershipTeam />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
