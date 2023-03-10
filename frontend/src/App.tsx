import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            path={routeNames.ProfileSetup}
            element={
              <>
                <NavBar />
                <ProfileSetup />
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
          <Route
            path={routeNames.Requirement}
            element={
              <>
                <NavBar />
                <Requirement />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.NDesignDetails}
            element={
              <>
                <NavBar />
                <Requirement2 />
                <Footer />
              </>
            }
          />
          <Route
            path={routeNames.Progress}
            element={
              <>
                <NavBar />
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
