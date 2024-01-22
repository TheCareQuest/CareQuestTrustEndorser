import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout/Layout.jsx";
import Website from "./pages/Website.jsx";
// import LoginForm from "./pages/LoginPage/LoginPage.js";
import LoginForm from "./components/LoginForm/loginForm.jsx";
import NotificationComponent from "./components/Notifications/NotificationComponent.js";
import OurCampaigns from "./pages/OurCampaigns/OurCampaigns.jsx"
import CharityDetails from "./pages/CharityDetails/CharityDetails.jsx";
import ManageHopeSeekers from "./pages/ManageHopeSeeker/ManageHopeSeekers.jsx";
import UserProfile from "../src/pages/UserProfile/UserProfile.jsx";
import CharityForm from "./pages/CharityDetails/CharityForm/CharityForm.jsx";
import TokenPopup from "./pages/Token/TokenPopup.js";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import ManageCareProvider from "./pages/ManageCareProviders/ManageCareProvider.jsx";
import CpProfile from "./pages/UserProfile/CpProfile.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showTokenPopup, setShowTokenPopup] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    const storedAuth = localStorage.getItem("authenticated");
    if (storedAuth) {
      setAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
    localStorage.setItem("authenticated", JSON.stringify(true));
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  const handleTokenGeneration = (tokenData) => {
    setTokenData(tokenData);
    setShowTokenPopup(true);
  };

  const handleCloseTokenPopup = () => {
    setShowTokenPopup(false);
    setTokenData(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
        <Route
          path="/"
          element={
            authenticated ? (
              <Layout handleLogout={handleLogout}>
                <Header handleLogout={handleLogout} />
                {/* ... other components */}
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          
            <Route index element={<Website />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/users/:userId" element={<CpProfile />} />

            {/* <Route
              path="/user/:userId/report"
              element={<ReportForm />}
            />
            <Route
              path="/user/:userId/rate"
              element={<Rating  />}
            /> */}
            <Route
              path="OurCampaigns"
              element={<OurCampaigns />}
            />
            <Route
              path="OurCampaigns/:charityTitle"
              element={
                <CharityDetails
                  onTokenGeneration={handleTokenGeneration}
                />
              }
            />
            <Route
              path="Notification"
              element={<NotificationComponent />}
            />
             <Route
              path="charityForm"
              element={<CharityForm />}
            />
            <Route
              path="CareProvider"
              element={<ManageCareProvider/>}
            />
          
            <Route
              path="HopeSeeker"
              element={<ManageHopeSeekers />}
            />
          </Route>

          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        </Routes>

        {showTokenPopup && (
          <TokenPopup tokenData={tokenData} onClose={handleCloseTokenPopup} />
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
