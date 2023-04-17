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
import { user } from "Types/User";
import ProgressNew from "Pages/Progress/ProgressNew";
import AdminDashBoard from "Pages/AdminDashBoard/AdminDashBoard";
import SupportAdmin from "components/SupportAdmin";
import { ToastContainer } from "react-toastify";

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

  const [token, setToken] = useState<any>();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    } else {
      setToken(null);
    }
  }, []);

  console.log(token);

  const handleLogout = () => {
    // Remove user details from local storage and reset state
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("token");
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
                <NavBar user={user} onLogout={handleLogout} />
                <Overview />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.JoinUs}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <JoinUs user={user} onLogout={handleLogout} token={token} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NewDesign}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <NewDesign />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.ResourceDesign}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <ResourceDesign user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path={routeNames.Community}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <Community user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.SayHello}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <SayHello user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Profile}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <Profile user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.ProfileSetup}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <ProfileSetup
                  user={user}
                  onLogout={handleLogout}
                  token={token}
                />

                <Footer />
              </>
            }
          />

          <Route
            path={routeNames.AdminDashBoard}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <AdminDashBoard user={user} onLogout={handleLogout} />

                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Chatbox}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <SupportAdmin />

                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.RDesignDetails}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <RDesignDetails user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Requirement}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <Requirement user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NDesignDetails}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <Requirement2 user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Progress}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <Progress user={user} onLogout={handleLogout} />
                <Footer />
              </>
            }
          />

          <Route
            path={routeNames.ProgressNew}
            element={
              <>
                <NavBar user={user} onLogout={handleLogout} />
                <ProgressNew user={user} onLogout={handleLogout} />
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
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        ></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
