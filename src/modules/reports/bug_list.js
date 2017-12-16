import React from 'react';
// import {Link} from 'react-router-dom';

export default class BugList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail : props.detail
        }
        this.index = this.props.index
    }

    openBugModal(e, id, title){
        this.props.openModal(id, title);
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
                    <a className="btn btn-default btn-sm pointer" data-toggle="modal" data-target={"#"+this.state.detail.ticketId} onClick={e=>this.openBugModal(e, this.state.detail.ticketId, 'Bug Status')}>
                        <i className="fa fa-telegram"></i>
                    </a>
                </td>
            </tr>
        )
    }
}