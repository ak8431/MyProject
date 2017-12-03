import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <nav className="col-sm-3 col-md-2 d-none d-sm-block sidebar not-visible slide-in">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/report-bug">Report a Bug</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/track-bug">Track Bug</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}