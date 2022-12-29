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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={routeNames.Overview} element={<Overview />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path={routeNames.NewDesign} element={<NewDesign />} />
          <Route path="/resourceDesign" element={<ResourceDesign />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sayHello" element={<SayHello />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
