import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { SubscriptionFormPage } from "./pages/SubscriptionFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<SubscriptionFormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
