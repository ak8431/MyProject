import React from 'react';
import moment from 'moment';
import {Tr, Td} from '../../components/HtmlElements/TableElements';

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
    <Tr>
        <Td text={props.index+1}></Td>
        <Td text={props.detail.ticketId}></Td>
        <Td>
            <span>{props.detail.attributes.description}</span>
        </Td>
        <Td text={props.detail.attributes.estimated_date_to_fix && moment(props.detail.attributes.estimated_date_to_fix).format('LLL')}></Td>
        <Td>
            <span className={"badge " + statusClass}>{props.detail.attributes.status}</span>
        </Td>
        <Td>
            <a className="btn btn-default btn-sm pointer" data-toggle="modal" data-target={"#"+props.detail.ticketId} onClick={e=>props.openBugModal(props.detail.ticketId, 'Bug Status')}>
                <i className="fa fa-telegram"></i>
            </a>
        </Td>
    </Tr>
  )
}
export default BugList;