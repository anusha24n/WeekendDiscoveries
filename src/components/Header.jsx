import React, { useState } from "react";
import "../styles/Header.css";
import logoimage from "/assets/logoimage.jpg";
import { mainNavigation, moreDropdown } from "../menu";

function Header({ gotoPage, theme, toggleTheme }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);
  const [isThemeModalOpen, setThemeModalOpen] = useState(false);

  const openThemeModal = (e) => {
    e.preventDefault();
    setThemeModalOpen(true);
  };

  const closeThemeModal = () => {
    setThemeModalOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
    closeThemeModal();
  };

  const handleMoreToggle = () => {
    setMoreOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            href="#home"
            src={logoimage}
            className="navbar-logo"
            onClick={gotoPage}
            alt="Mountain-themed logo"
          />
          <a href="#home" onClick={gotoPage} className="navbar-title">
            Weekend Discoveries
          </a>
        </div>

        <div className="navbar-burger" onClick={() => setMenuOpen(!isMenuOpen)}>
          <img
            src="/assets/Hamburgericon.png"
            alt="Hamburger icon for open navigation menu"
            className="hamburger-icon"
          />
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          {mainNavigation.map((item) => (
            <li key={item.path} className="navbar-item">
              <a href={item.path} onClick={gotoPage}>
                {item.name}
              </a>
            </li>
          ))}
          <li
            className={`navbar-item dropdown ${isMoreOpen ? "active" : ""}`}
            onClick={() => {if (window.innerWidth <= 768) {handleMoreToggle();}}}
            onMouseEnter={() => window.innerWidth > 768 && setMoreOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setMoreOpen(false)}
          >
            <a className="dropdown-toggle" aria-expanded={isMoreOpen}>
              More
            </a>
            <ul className={`dropdown-menu ${isMoreOpen ? "active" : ""}`}>
              {moreDropdown.map((subItem) => (
                <li key={subItem.path}>
                  <a
                    href={subItem.path}
                    onClick={
                      subItem.name === "Theme" ? openThemeModal : gotoPage
                    }
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {isThemeModalOpen && (
        <dialog className="theme-modal" open>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const selectedTheme = formData.get("theme");
              handleThemeChange(selectedTheme);
            }}
            className="theme-form"
          >
            <h2>Select Theme</h2>
            <label>
              <input
                type="radio"
                name="theme"
                value="light"
                defaultChecked={theme === "light"}
              />
              Light
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="dark"
                defaultChecked={theme === "dark"}
              />
              Dark
            </label>
            <div className="theme-buttons">
              <button type="button" onClick={closeThemeModal}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </dialog>
      )}
    </header>
  );
}

export default Header;
