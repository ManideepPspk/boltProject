import {
  VIEW_ALL_VEHICLES,
  VIEW_ALL_VEHICLESLIST,
} from "../actions/types";

const initialState = [];

const VehicleReducers = (vehicles, action) => {
  if( vehicles === undefined) {
    vehicles = initialState;
  }
  const { type, payload } = action;

  switch (type) {
   
    case VIEW_ALL_VEHICLES:
      return {...vehicles,"viewAllvehicles": payload };
    case VIEW_ALL_VEHICLESLIST: 
      return{...vehicles,"viewAllList":payload};
    default:
      return vehicles;
  }
};

export default VehicleReducers;