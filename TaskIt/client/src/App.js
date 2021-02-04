import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <UserProfileProvider>
        <Router>
          <Header />
          <ApplicationViews />

        </Router>
      </UserProfileProvider>
    </div>
  );
}

export default App;
