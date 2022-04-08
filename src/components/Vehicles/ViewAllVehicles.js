/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {retrieveAllVehicles} from '../../actions/VehiclesActions';


function ViewAllVehicles(props) {
  console.log(props , "stes")
  const dispatch = useDispatch();
  const retData = useSelector((state) => state.VehicleReducers);
  let vehiclesdata = retData?.viewAllvehicles;
  useEffect(() => {
    dispatch(retrieveAllVehicles());
  }, []);

  console.log(retData,vehiclesdata , "dgse")
  return (
    <>
    <div>Hiiiiii Vehicles here {props?.location?.state?.name}</div>
    </>
  );
}
export default ViewAllVehicles;
