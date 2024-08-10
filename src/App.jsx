import { Route, Routes } from "react-router-dom";
import { Career, Contact, Home, LeadershipTeam, OurClients } from "./pages";
import { Toaster } from "react-hot-toast";
import ROUTES from "./routes"
import { Footer, Navbar, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership-team" element={<LeadershipTeam />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* About */}
        <Route path={ROUTES.ABOUT.OUR_CLIENTS} element={<OurClients />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default App;
