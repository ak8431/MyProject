import React from 'react';
import moment from 'moment';

const BugList = (props) => {
  return (
    <tr>
        <td>{++props.index}</td>
        <td>{props.detail.ticketId}</td>
        <td>{props.detail.attributes.description}</td>
        <td>{moment(props.detail.attributes.estimated_date_to_fix).format('LLL')}</td>
        <td>
            <span className="badge">{props.detail.attributes.status}</span>
        </td>
        <td>
            <a className="btn btn-default btn-sm pointer" data-toggle="modal" data-target={"#"+props.detail.ticketId} onClick={e=>props.openBugModal(props.detail.ticketId, 'Bug Status')}>
                <i className="fa fa-telegram"></i>
            </a>
        </td>
    </tr>
  )
}
export default BugList;