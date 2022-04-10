
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import SideBar from "./components/SideBar/Sidebar";
import VehiclesPage from "./pages/VehiclesPage";
import DashboardPage from "./pages/DashboardPage";
import Header from "./components/breadcrumbs/CustomSeparator"

function App(props) {
  const [vehicleName , setVehicleName] = useState("")
  console.log(props,"esets")
  return (
    <Router>
      <div  className="container-fluid">
      <div className="row">
            <div className= {"sidebarView "}><SideBar  vehicleName={vehicleName} setVehicleName = {setVehicleName}/>
            </div>
            <div className="col p-0">
            <div className="mainLayout">
            <div className="mt-3 mb-4"><Header vehicleName={vehicleName}/></div>
              <Switch>
                <Route  path={"/VehiclesPage"} component={VehiclesPage} />
                <Route path={"/"} component={DashboardPage} exact/>
              </Switch>
            </div>
            </div>
        </div>    
     
      </div>
    </Router>
  );
}

export default App;
