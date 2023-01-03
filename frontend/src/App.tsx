import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Community from "Pages/Community/Community";
import JoinUs from "Pages/JoinUs/JoinUs";
import NewDesign from "Pages/NewDesign/NewDesign";
import Profile from "Pages/Profile/Profile";
import ResourceDesign from "Pages/ResourceDesign/ResourceDesign";
import SayHello from "Pages/SayHello/SayHello";
import Overview from "Pages/Overview/Overview";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import { routeNames } from "routes/route";
import RDesignDetails from "Pages/RDesignDetails/RDesignDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path={routeNames.Overview}
            element={
              <>
                <NavBar />
                <Overview />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.JoinUs}
            element={
              <>
                <NavBar />
                <JoinUs />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NewDesign}
            element={
              <>
                <NavBar />
                <NewDesign />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.ResourceDesign}
            element={
              <>
                <NavBar />
                <ResourceDesign />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path={routeNames.Community}
            element={
              <>
                <NavBar />
                <Community />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.SayHello}
            element={
              <>
                <NavBar />
                <SayHello />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Profile}
            element={
              <>
                <NavBar />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.RDesignDetails}
            element={
              <>
                <NavBar />
                <RDesignDetails />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
