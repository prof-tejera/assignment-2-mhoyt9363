import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const liStyle = {
  padding: 2,
  display: "inline",
  border: "1px solid black",
  height: 30,
  textAlign: "center",
  fontSize: 17,
  backgroundColor: "Linen",

}

const Nav = () => {

  return (
    <nav >
      <ul>
        <li style = {liStyle}>
          <Link to="/">Timers</Link>
        </li>
        <li style = {liStyle}>
          <Link to="/docs">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Routes>
          <Route path="/docs" element={<DocumentationView />} />
          <Route path="/" element={<TimersView />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
