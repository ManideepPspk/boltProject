import {
  VIEW_ALL_VEHICLES,
  VIEW_ALL_VEHICLESLIST,
} from "./types";

import VehicleService from "../services/VehicleService";

export const retrieveAllVehicles = () => async (dispatch) => {
  try {
    const res = await VehicleService.getAll();

    dispatch({
      type: VIEW_ALL_VEHICLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveAllVehiclesList = () => async (dispatch) => {
  try {
    const res = await VehicleService.getList();

    console.log(res.data);
    dispatch({
      type: VIEW_ALL_VEHICLESLIST,
      payload: res.ListofVehicles,
    });
  } catch (err) {
    console.log(err);
  }
};
