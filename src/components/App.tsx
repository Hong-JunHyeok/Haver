import React from 'react';
import 'styles/reset.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pages.MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
