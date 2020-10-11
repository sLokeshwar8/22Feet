import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import StoresNearBy from './containers/StoresNearBy/StoresNearBy';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
            <Route path="/store" component={ StoresNearBy }/>
            <Route path="/" exact component={ Home }/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
