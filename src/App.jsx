import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import BrowseTrips from "./pages/BrowseTrips";
import Events from "./pages/Events";
import TripDetails from "./pages/TripDetails";
import AboutUs from "./pages/AboutUs";
import { mainNavigation, moreDropdown } from "./menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutSettingsModal from "./components/LayoutSettingsModal";

function App() {
  const [page, setPage] = useState("#home");
  const [layout, setLayout] = useState("detailed");
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const dialogRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    return savedTheme;
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = (chosenTheme) => {
    const newTheme = chosenTheme || (theme === "light" ? "dark" : "light");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const gotoPage = (e) => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    setSelectedTrip(null);
    setPage(path);
  };

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleTripSelect = (trip) => {
    setPreviousPage(page);
    setSelectedTrip(trip);
    setPage("#tripdetails");
  };

  return (
    <div
      className={`app ${theme}`}
      aria-label={`Application in ${theme} theme`}
    >
      <a
        href="#main-content"
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Header
        mainMenu={mainNavigation}
        dropdownMenu={moreDropdown}
        gotoPage={gotoPage}
        theme={theme}
        toggleTheme={toggleTheme}
        aria-label="Website header with navigation menu"
      />
      <main id="main-content" aria-label="Main content">
        {page === "#tripdetails" && selectedTrip && (
          <TripDetails
            trip={selectedTrip}
            goBack={() => {
              setSelectedTrip(null);

              setPage(previousPage || "#home");
            }}
            aria-label={`Trip details for ${selectedTrip.title}`}
          />
        )}

        {page === "#home" && !selectedTrip && (
          <Home
            onTripSelect={handleTripSelect}
            aria-label="Browse trips page"
          />
        )}
        {page === "#browsetrips" && !selectedTrip && (
          <BrowseTrips
            layout={layout}
            openModal={openModal}
            onTripSelect={handleTripSelect}
          />
        )}
        {page === "#events" && !selectedTrip && <Events />}
        {page === "#aboutus" && !selectedTrip && <AboutUs />}
      </main>
      <Footer aria-label="Website footer" />

      <LayoutSettingsModal
        dialogRef={dialogRef}
        layout={layout}
        setLayout={setLayout}
        closeModal={closeModal}
        aria-label="Layout settings modal"
      />
    </div>
  );
}

export default App;
