import React from 'react';
import {Link} from 'react-router-dom';

import './Sidebar.scss';


function SideBar(props) {
    return (
    <div  className={'sidebar'} >
      <div className="header-top">
        { <a href="/">VEHICLE VIEWER </a>}
      </div>
      <ul>
        { 
          <li className="nav-item">
              <a className="nav-link text-truncate" href="/"><span className="d-none d-sm-inline">Dashboard</span></a>
          </li>
        }
        {
            <li className="nav-item">
              <Link  className="nav-link text-truncate" to ="/VehiclesPage"><span className="d-none d-sm-inline"> Manage Vehicles </span></Link>
            </li>
          }
      </ul>
    </div>
  );
}

export default SideBar;