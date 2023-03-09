import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { routeNames } from "routes/route";

import Community from "Pages/Community/Community";
import JoinUs from "Pages/JoinUs/JoinUs";
import NewDesign from "Pages/NewDesign/NewDesign";
import Profile from "Pages/Profile/Profile";
import ResourceDesign from "Pages/ResourceDesign/ResourceDesign";
import SayHello from "Pages/SayHello/SayHello";
import Overview from "Pages/Overview/Overview";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import RDesignDetails from "Pages/RDesignDetails/RDesignDetails";
import Requirement from "Pages/Requirement/Requirement";
import Login from "components/Login/Login";
import Register from "components/Register/Register";
import ProfileSetup from "Pages/ProfileSetup/ProfileSetup";
import Progress from "Pages/Progress/Progress";
import Requirement2 from "Pages/Requirement/Requirement2";
import NavBar2 from "components/NavBar/NavBar2";
import { user } from "Types/User";

function App() {
  const [user, setUser] = useState<user>(null);

  useEffect(() => {
    // Check local storage for user details
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    // Remove user details from local storage and reset state
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={routeNames.Overview}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                {/* <NavBar /> */}
                <Overview />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.JoinUs}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <JoinUs />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NewDesign}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <NewDesign />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.ResourceDesign}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <ResourceDesign />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path={routeNames.Community}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <Community />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.SayHello}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <SayHello />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Profile}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.ProfileSetup}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <ProfileSetup />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.RDesignDetails}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <RDesignDetails />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Requirement}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <Requirement />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NDesignDetails}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <Requirement2 />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Progress}
            element={
              <>
                <NavBar2 user={user} onLogout={handleLogout} />
                <Progress />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Login}
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path={routeNames.Register}
            element={
              <>
                <Register />
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
