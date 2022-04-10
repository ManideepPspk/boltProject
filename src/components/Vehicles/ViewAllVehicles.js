/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllVehicles } from '../../actions/VehiclesActions';
import BasicTable from './BasicTable';
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import './ViewAllVehicles.scss'

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
      <Row className="mt-2 mr-1 ml-1 wow1">
        <Col sm={5}>
          <h6>Vehicle Status</h6>
          <div className="w-100 mt-2 clrdiv">
            <Row>
              <Col sm={6} className="ml-4 clm1 mt-2 font1">
                <Row><Col sm={6}>Elevation</Col><Col sm={4} >{localdataforall?.vehicleStatus?.elevation}</Col></Row>
                <Row><Col sm={6}>Temparature</Col><Col sm={4} >{localdataforall?.vehicleStatus?.temperature} &#8451;</Col></Row>
                <Row><Col sm={6}>Locked</Col><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.locked)}</Col></Row>
                <Row><Col sm={6}>Battery</Col><Col sm={4} >{localdataforall?.vehicleStatus?.battery} %</Col></Row>
              </Col>
              <Col sm={5} className="clm1 mt-2 font1">
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.throttle)}</Col><Col sm={6}>Throttle</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.controller)}</Col><Col sm={6}>Controller</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.motor)}</Col><Col sm={6}>Motor</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.overload)}</Col><Col sm={6}>Overload</Col></Row>
                <Row><Col sm={1} >{tickfun(localdataforall?.vehicleStatus?.overcurrent)}</Col><Col sm={6}>OverCurrent</Col></Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col sm={7} >
          <h6>Statistics</h6>
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Announcement</Card.Title>
              <div className="listGroupCls">
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-3 mr-1 ml-1 wow2'>
        <h6>Statistics</h6>
        <BasicTable recent_trips={localdataforall?.recent_trips} />
      </Row>
    </div>
  );
}
export default ViewAllVehicles;
