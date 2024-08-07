import { Route, Routes } from "react-router-dom";
import { Career, Contact, Home, LeadershipTeam } from "./pages";
import { Footer, Navbar } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership-team" element={<LeadershipTeam />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default App;
