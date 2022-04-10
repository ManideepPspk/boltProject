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
      <li className="vehicleShortcut" key={ele.name}>
        <div className='floar'>
              <span className="nav-link text-truncate d-none d-sm-inline vehiclename" onClick={()=>{props.setVehicleName(ele.name); history.push({pathname:'/VehiclesPage', state:{selectedVehicle:ele} })}}> {ele.name} </span>
              <span className="nav-link text-truncate d-none d-sm-inline x-element" onClick={()=>{removeFromDataList(idx)}}> X </span>
        </div>
      </li>
    )
  })
    return (
    <div  className={'sidebar'} >
      <div className="header-top mt-3">
        { <a href="/">Vehicle Viewer </a>}
      </div>
      <Row>
      <Col sm={1}></Col>
          <Col sm={9}>
      <ul className='mt-3'>
        { 
          <li className="nav-item mt-3 mb-3 main" key='1stplace'>
              <BasicPopover list={list} setVehicleName={props.setVehicleName}/>
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