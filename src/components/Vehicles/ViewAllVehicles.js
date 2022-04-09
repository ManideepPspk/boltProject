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
    <Row  className="mt-2 mr-1 ml-1 ">
            <Col sm={4}>
             <Card className="w-100">
                    <Card.Body>
                        <Card.Title>Channel Summary</Card.Title>
                        <Card.Text className="card-body">
                            <span className="card-body-text">Blocked</span>
                        </Card.Text>
                    </Card.Body>
             </Card>
            </Col>
         
            <Col sm={8}>
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>Announcement</Card.Title>
                        <div className="listGroupCls">
                        </div>
                    </Card.Body>
                </Card>
           </Col>
        </Row>
        <Row>
      <BasicTable recent_trips={localdataforall?.recent_trips}/>
      </Row>
    </>
  );
}
export default ViewAllVehicles;
