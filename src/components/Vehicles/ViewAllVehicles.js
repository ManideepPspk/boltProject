/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllVehicles } from '../../actions/VehiclesActions';
import BasicTable from './BasicTable';

function ViewAllVehicles(props) {
  const dispatch = useDispatch();
  const retData = useSelector((state) => state.VehicleReducers);
  let vehiclesdata = retData?.viewAllvehicles;
  useEffect(() => {
    dispatch(retrieveAllVehicles());
  }, []);
  let statedata = props?.location?.state?.selectedVehicle;
  const localdataforall = vehiclesdata && vehiclesdata.find((ele) => ele.id === statedata.id);
  console.log(localdataforall, statedata, "loc")
  return (
    <>
      <BasicTable />
    </>
  );
}
export default ViewAllVehicles;
