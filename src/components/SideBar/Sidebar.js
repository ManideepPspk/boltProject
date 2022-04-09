/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
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
  const [concatedList , setcont] = useState([
    {
        "id": 1,
        "name": "Vehicle 1"
    },
    {
        "id": 2,
        "name": "Vehicle 2"
    },
    {
        "id": 3,
        "name": "Vehicle 3"
    },
    {
        "id": 4,
        "name": "Vehicle 4"
    }
])
let ccccc = [];
  ccccc = list && list.slice(0, 3)
  console.log(ccccc,concatedList ,"sgse")
  useEffect(() => {
    dispatch(retrieveAllVehiclesList());
  }, []);

  const removeFromDataList = (idx) => {
    concatedList.splice(idx,1);
    setcont([...concatedList])
    console.log(concatedList ,"seeee")

  }
  const localdata = concatedList && concatedList.map((ele,idx)=>{
    return(
      <li className="keyed nav-item" key={ele.name}>
        <Row>
          <Col sm={10}>
              <span className="nav-link text-truncate d-none d-sm-inline tre" onClick={()=>{props.setVehicleName(ele.name); history.push({pathname:'/VehiclesPage', state:{selectedVehicle:ele} })}}> {ele.name} </span>
              </Col>
              <Col sm={1}>
              <span className="nav-link text-truncate d-none d-sm-inline" onClick={()=>{removeFromDataList(idx)}}> X </span>
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
      <Row>
      <Col sm={1}></Col>
          <Col sm={9}>
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
    </Col>
    <Col sm={1}></Col>
        </Row>
    </div>
  );
}

export default SideBar;