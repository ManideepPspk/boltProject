import React from 'react';
import { Switch, Route } from "react-router-dom";
import ViewAllVehicles from '../components/Vehicles/ViewAllVehicles';

function VehiclesPage(props) {
    return (
        <Switch>
            <Route path={"/"} component={ViewAllVehicles} />
        </Switch>
    )
}
export default VehiclesPage;
