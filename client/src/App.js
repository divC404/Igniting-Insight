import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Footer } from "./containers";
import { About } from "./pages";
import { Contact } from "./pages";
import { Sponsors } from "./pages";
import { Navbar } from "./containers"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={ROUTES.HOME} />
          <Route path={ROUTES.ABOUT_US} element={<About />} />
          <Route path={ROUTES.SPONSORS} element={<Sponsors />} />
          <Route path={ROUTES.CONTACT_US} element={<Contact />} />
          <Route path={ROUTES.JOIN_US} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
