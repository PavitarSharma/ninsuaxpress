import { Route, Routes } from "react-router-dom";
import { Home, LeadershipTeam } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        h
        <Route path="/leadership-team" element={<LeadershipTeam />} /> 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
