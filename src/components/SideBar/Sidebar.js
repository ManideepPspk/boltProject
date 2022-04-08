/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {retrieveAllVehiclesList} from '../../actions/VehiclesActions';
import './Sidebar.scss';


function SideBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const retData = useSelector((state) => state.VehicleReducers);
  console.log(retData , props?.vehicleName ,"ret");
  let list = retData?.viewAllList;

  useEffect(() => {
    dispatch(retrieveAllVehiclesList());
  }, []);
  const localdata = list && list.map((ele,idx)=>{
    if(idx <=2){
    return(
      <li className="nav-item" key={ele.name}>
              <span className="nav-link text-truncate d-none d-sm-inline" onClick={()=>{props.setVehicleName(ele.name); history.push({pathname:'/VehiclesPage', state:{selectedVehicle:ele} })}}> {ele.name} </span>
      </li>
    )}
      return '';
  })
    return (
    <div  className={'sidebar'} >
      <div className="header-top">
        { <a href="/">VEHICLE VIEWER </a>}
      </div>
      <ul>
        { 
          <li className="nav-item" key='1stplace'>
              <a className="nav-link text-truncate" href="/"><span className="d-none d-sm-inline">Dashboard</span></a>
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