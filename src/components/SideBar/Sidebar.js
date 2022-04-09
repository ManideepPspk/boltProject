/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {retrieveAllVehiclesList} from '../../actions/VehiclesActions';
import './Sidebar.scss';
import BasicPopover from './BasicPopover';


function SideBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const retData = useSelector((state) => state.VehicleReducers);
  console.log(retData , props?.vehicleName ,"ret");
  let list = retData?.viewAllList;
  let concatedList = list && list.slice(0, 4)
  useEffect(() => {
    dispatch(retrieveAllVehiclesList());
  }, []);

  const removeFromDataList = (e, idx) => {
    e.stopPropagation();
    list.splice(idx, 1);
  }
  const localdata = concatedList && concatedList.map((ele,idx)=>{
    return(
      <li className="keyed nav-item" key={ele.name}>
        <Row>
          <Col sm={10}>
              <span className="nav-link text-truncate d-none d-sm-inline" onClick={()=>{props.setVehicleName(ele.name); history.push({pathname:'/VehiclesPage', state:{selectedVehicle:ele} })}}> {ele.name} </span>
              </Col>
              <Col sm={1}>
              <span className="nav-link text-truncate d-none d-sm-inline"> X </span>
              </Col>
        </Row>
      </li>
    )
  })
    return (
    <div  className={'sidebar'} >
      <div className="header-top mt-3">
        { <a href="/">VEHICLE VIEWER </a>}
      </div>
      <ul className='mt-3'>
        { 
          <li className="nav-item mb-3" key='1stplace'>
              <BasicPopover />
          </li>
        }
        {
            localdata
          }
      </ul>
    </div>
  );
}

export default SideBar;