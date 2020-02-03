import React, {Component} from "react";
import Header from "./components/Header";
import Main from './pages/main';
import Routes from './routes';

import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;