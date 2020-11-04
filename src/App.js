import { Home, Menu } from "./pages";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components";

// const ContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: {type:"spring",stiffness:300} },
// };

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
      </Switch>
    </>
  );
}

export default App;
