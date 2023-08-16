import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Header from "./components/Header";
import "./App.css";
// import Home from "./components/Home";
// import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/">
            <Login />
          {/* </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
