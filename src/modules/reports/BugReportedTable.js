import React, { PureComponent } from 'react'
import BugList from './bug_list';
import Div from '../../components/HtmlElements/Div';
import {Table, TBody, THead, Tr, Th} from '../../components/HtmlElements/TableElements';

export default class BugReportedTable extends PureComponent {
  render() {
    let bugList = this.props.bugsList.map((detail,index)=>
        <BugList detail={detail} openBugModal={this.props.openModal} index={index} key={detail.ticketId} />
    )
    return (
        <Div class="table-responsive">
            <button type="button" className="btn btn-primary pull-right mb-sm-2 pointer" onClick={this.props.showEmailToSearch}>Go Back</button>
            <Table class="table table-bordered table-striped">
                <THead>
                    <Tr>
                        <Th text="S.No."></Th>
                        <Th text="Ticket Id"></Th>
                        <Th text="Description"></Th>
                        <Th text="Estimated Time"></Th>
                        <Th text="Status"></Th>
                        <Th text="Action"></Th>
                    </Tr>
                </THead>
                <TBody>
                    {bugList}
                </TBody>
            </Table>
        </Div>
    )
  }
}
