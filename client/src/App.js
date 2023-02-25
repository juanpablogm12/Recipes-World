import "./App.css";
import { NavBar } from "./components";
import { Landing, Home, Detail, Form } from "./views";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path={"/"} component={Landing} />
      <Route path={"/home"} component={Home} />
      <Route path={"/form"} component={Form} />
      <Route path={"/detail/:id"} component={Detail} />
    </div>
  );
}

export default App;
