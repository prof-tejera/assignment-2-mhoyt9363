import styled from "styled-components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PATHS } from './utils/constants';
import NewTimer from './views/NewTimerView';
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AppProvider from './components/generic/Context';

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const liStyle = {
  padding: 5,
  margin: 2,
  display: "inline",
  border: "1px solid black",
  textAlign: "center",
  fontSize: 13,
  backgroundColor: "lightblue",

}
const Nav = () => {

  return (
    <nav >
      <ul >        
        <li style = {liStyle}>
          <Link to={PATHS.NEWTIMER}>Add Timer</Link>
        </li>
        <li style = {liStyle}>
          <Link to={PATHS.TIMERS}>Workout</Link>
        </li>
        <li style = {liStyle}>
          <Link to={PATHS.DOCUMENTS}>Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Container>
          <Nav />
          <Routes>
            <Route path={PATHS.DOCUMENTS} element={<DocumentationView />} />
            <Route path={PATHS.NEWTIMER} element={<NewTimer />}/>
            <Route path={PATHS.TIMERS} element={<TimersView />} />
          </Routes>
        </Container>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
