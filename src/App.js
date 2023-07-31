import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import BirthdayWishingPage from "./components/BirthdayWishingPage";
import PollsPage from "./components/PollsPage";
import "./styles.css"; // Import CSS styles

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/wishing" component={BirthdayWishingPage} />
          <Route path="/polls" component={PollsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
