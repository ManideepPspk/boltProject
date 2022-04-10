/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './Sidebar.scss';
import BasicPopover from './BasicPopover';
import ListofVehicles from '../../json/List.json';


function SideBar(props) {
  const history = useHistory();
  let list = ListofVehicles.ListofVehicles;
  const [concatedList , setcont] = useState(list.length>5?list.slice(0,5):list.slice(0,list.length))
  console.log(concatedList, list ,"sgse")

  const removeFromDataList = (idx) => {
    concatedList.splice(idx,1);
    setcont([...concatedList])
    console.log(concatedList ,"seeee")

  }
  const localdata = concatedList && concatedList.map((ele,idx)=>{
    return(
      <Row className="vehicleShortcut" key={ele.name}>
        <Col sm={8} className="nav-link vehiclename" onClick={()=>{props.setVehicleName(ele.name); history.push({pathname:'/VehiclesPage', state:{selectedVehicle:ele} })}}> {ele.name} </Col>
              <Col sm={1}className="nav-link " onClick={()=>{removeFromDataList(idx)}}> <span className={`x-element`}>&#10006;</span> </Col>
      </Row>
    )
  })
    return (
    <div  className={'sidebar'} >
      <div className="header-top mt-3 mb-3">
        { <a href="/">Vehicle Viewer </a>}
      </div>
      <Row>
      <Col sm={1}></Col>
          <Col sm={9}>
          <Row className="nav-item mt-3 mb-3 main"> <BasicPopover list={list} setVehicleName={props.setVehicleName}/></Row>
        {
            localdata
          }
    </Col>
    <Col sm={1}></Col>
        </Row>
    </div>
  );
}

export default SideBar;