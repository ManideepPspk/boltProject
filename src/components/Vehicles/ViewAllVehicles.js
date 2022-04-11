/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllVehicles } from '../../actions/VehiclesActions';
import BasicTable from './BasicTable';
import {
  Row,
  Col,
} from 'react-bootstrap';
import './ViewAllVehicles.scss';
import Chart from './Chart';
import CircularProgress from '@mui/material/CircularProgress';

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

  let tickfun = (propscall)=>{
    return(
    <span className={`tick-element ${propscall}`}> &#10003;</span>
    )
  }

  return (
    <div className='ml-4 mr-4'>
      {localdataforall?(
        <>
      <Row className="mt-2 mr-1 ml-1 wow1">
        <Col sm={5}>
          <h6>Vehicle Status</h6>
          <div className="w-100 mt-2 clrdiv">
            <Row>
              <Col sm={6} className="ml-4 clm1 mt-2 font1">
                <Row><Col sm={6} className="fw-500" >Elevation</Col><Col sm={4} >{localdataforall?.vehicleStatus?.elevation}</Col></Row>
                <Row><Col sm={6} className="fw-500" >Temparature</Col><Col sm={4} >{localdataforall?.vehicleStatus?.temperature} &#8451;</Col></Row>
                <Row><Col sm={6} className="fw-500" >Locked</Col><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.locked)}</Col></Row>
                <Row><Col sm={6} className="fw-500" >Battery</Col><Col sm={4} >{localdataforall?.vehicleStatus?.battery} %</Col></Row>
              </Col>
              <Col sm={5} className="clm1 mt-2 font1">
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.throttle)}</Col><Col sm={6} className="fw-500" >Throttle</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.controller)}</Col><Col sm={6} className="fw-500" >Controller</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.motor)}</Col><Col sm={6} className="fw-500" >Motor</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.overload)}</Col><Col sm={6} className="fw-500" >Overload</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.overcurrent)}</Col><Col sm={6} className="fw-500" >OverCurrent</Col></Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col sm={7} >
        <div className="w-100 clrdiv2">
          {localdataforall && <Chart datatochart = {localdataforall.vehicleStatistics} />}
          </div>
        </Col>
      </Row>
      <Row className=' mr-1 ml-2 wow2'>
        <h6>Recent Trips</h6>
        <BasicTable recent_trips={localdataforall?.recent_trips} />
      </Row>
      </>):(<div className='spinner'><CircularProgress /></div> )
}
    </div>
  );
}
export default ViewAllVehicles;
