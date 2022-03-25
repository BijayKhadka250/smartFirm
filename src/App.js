import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContentController from "./Content/ContentController/ContentController";
import { useLocation } from "react-router";
import MobileHeader from "./Content/MobileHeader/MobileHeader";
import "./App.scss";
function App() {
  let location = useLocation();
  useEffect(() => {
    let elementToRemove = document.querySelector(".active-route");
    if (elementToRemove instanceof HTMLElement) {
      elementToRemove.classList.remove("active-route");
    }
    if (location.pathname !== "/") {
      let elementToAdd = document.querySelector(".active").parentNode;
      elementToAdd.classList.add("active-route");
    }
  }, [location]);
  return (
    <div>
      <Header />
      <MobileHeader />
      <ContentController />
      <Footer />
    </div>
  );
}

export default App;
