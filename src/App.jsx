import { Route, Routes } from "react-router-dom";
import { Home, LeadershipTeam } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        h
        <Route path="/leadership-team" element={<LeadershipTeam />} /> 
      </Routes>
    </>
  );
};

export default App;
