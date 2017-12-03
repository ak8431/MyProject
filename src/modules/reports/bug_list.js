import React from 'react';
import {Link} from 'react-router-dom'

export default class BugList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail : props.detail
        }
        this.index = this.props.index
    }

    render(){
        return(
            <tr>
                <td>{++this.index}</td>
                <td>{this.state.detail.ticketId}</td>
                <td>{this.state.detail.attributes.description}</td>
                <td>{this.state.detail.attributes.estimated_date_to_fix}</td>
                <td>{this.state.detail.attributes.status}</td>
                <td>
                    <Link className="btn btn-default btn-sm pointer" to={`/track-bug/${this.state.detail.ticketId}`}>
                        <i className="fa fa-telegram"></i>
                    </Link>
                </td>
            </tr>
        )
    }
}