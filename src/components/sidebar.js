import React from 'react';
import { Link } from 'react-router-dom';
import {version} from '../constants/api_constant';

const SidebarNav = (props) => {
  let visibleClass = props.visible ? 'col-sm-3 col-md-2 visible' : 'not-visible';
  let reportBugClass = '', trackBugClass = '';
  props.sidebarActive==='report-bug' ? reportBugClass = 'active' : trackBugClass = 'active';
  return (
    <nav className={visibleClass + " d-none d-sm-block sidebar slide-in"}>
        <ul className="nav nav-pills flex-column">
            <li className="nav-item" onClick={e=>props.changeSidebarActiveLink('report-bug')}>
                <Link className={"nav-link "+ reportBugClass } to="/report-bug">Report a Bug</Link>
            </li>
            <li className="nav-item" onClick={e=>props.changeSidebarActiveLink('track-bug')}>
                <Link className={"nav-link "+ trackBugClass } to="/track-bug">Track Bug</Link>
            </li>
            <li className="nav-item fixed-bottom">
                <a className="nav-link">Version {version}</a>
            </li>
        </ul>
    </nav>
  )
}
export default SidebarNav;