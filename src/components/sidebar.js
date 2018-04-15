import React from 'react';
import { Link } from 'react-router-dom';
import {version} from '../constants/api_constant';
import {Ul, Li} from '../components/HtmlElements/UlElements';

const SidebarNav = (props) => {
  let visibleClass = props.visible ? 'col-sm-3 col-md-2 visible' : 'not-visible';
  let reportBugClass = '', trackBugClass = '';
  props.sidebarActive==='report-bug' ? reportBugClass = 'active' : trackBugClass = 'active';
  return (
    <nav className={visibleClass + " d-none d-sm-block sidebar slide-in"}>
        <Ul class="nav nav-pills flex-column">
            <Li class="nav-item" onClick={e=>props.changeSidebarActiveLink('report-bug')}>
                <Link className={"nav-link "+ reportBugClass } to="/report-bug">Report a Bug</Link>
            </Li>
            <Li class="nav-item" onClick={e=>props.changeSidebarActiveLink('track-bug')}>
                <Link className={"nav-link "+ trackBugClass } to="/track-bug">Track Bug</Link>
            </Li>
            <Li class="nav-item fixed-bottom">
                <a className="nav-link">Version {version}</a>
            </Li>
        </Ul>
    </nav>
  )
}
export default SidebarNav;