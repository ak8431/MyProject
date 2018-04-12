import React from 'react';
import moment from 'moment';

const BugList = (props) => {
  let statusClass;
  switch(props.detail.attributes.status){
    case 'Open': statusClass = 'badge-info';
        break;
    case 'Assigned': statusClass = 'badge-warning';
        break;
    case 'Investigating': statusClass = 'badge-primary';
        break;
    case 'Failed': statusClass = 'badge-danger';
        break;
    case 'Completed':
    case 'Closed': statusClass = 'badge-success';
        break;
    default: statusClass = 'badge-light';
        break;
  }
  return (
    <tr>
        <td>{props.index+1}</td>
        <td>{props.detail.ticketId}</td>
        <td>
            <span>{props.detail.attributes.description}</span>
        </td>
        <td>{props.detail.attributes.estimated_date_to_fix && moment(props.detail.attributes.estimated_date_to_fix).format('LLL')}</td>
        <td>
            <span className={"badge " + statusClass}>{props.detail.attributes.status}</span>
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