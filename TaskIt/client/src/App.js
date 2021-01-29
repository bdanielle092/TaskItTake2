import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";


function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ApplicationViews />
      </UserProfileProvider>
    </Router>
  );
}

export default App;
