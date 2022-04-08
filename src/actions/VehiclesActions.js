import {
  VIEW_ALL_VEHICLES,
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
