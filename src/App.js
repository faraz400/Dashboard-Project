import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext"; 
import "./context/ThemeContext.css";
import Crud from "./components/dashboard/Crudpage";
import Todolist from "./components/dashboard/Todolist";
import AnalyticsChart from "./components/dashboard/AnalyticsChart";
import RecentActivities from "./components/dashboard/RecentActivities";

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/loginform" />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/signup" element={<Signupform />} />
          {/* Dashboard route with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              index
              element={
                <div className="dashboard-widgets">
                  <Todolist />
                  <AnalyticsChart />
                  <RecentActivities />
                </div>
              }
            />
            <Route path="crud" element={<Crud />} /> {/* Nested Crud route */}
          </Route>
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;