import React from 'react';
import { Link } from 'react-router-dom';
import {version} from '../constants/api_constant';

const SidebarNav = (props) => {
  let visibleClass = props.visible ? 'col-sm-3 col-md-2 visible' : 'not-visible';
  return (
    <nav className={visibleClass + " d-none d-sm-block sidebar slide-in "}>
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <Link className="nav-link active" to="/report-bug">Report a Bug</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/track-bug">Track Bug</Link>
            </li>
            <li className="nav-item fixed-bottom">
                <a className="nav-link">Version {version}</a>
            </li>
        </ul>
    </nav>
  )
}
export default SidebarNav;