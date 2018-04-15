import React from 'react';
import axios from 'axios';
import {appUrl} from '../../constants/api_constant'
import Modal from '../../components/modal';
import TrackBug from './bug_track';
import Paragraph from '../../components/paragraph';
import TrackBugEmailForm from '../forms/TrackBugEmailForm';
import BlockUi from 'react-block-ui';
import BugReportedTable from './BugReportedTable';
import NotificationSystem from 'react-notification-system';

export default class TrackReportedBugs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : false,
            bugsList    : [],
            ticketId    : null,
            title       : 'Bug Status',
            blockUi     : false,
            bugModal    : false
        }
        this._notificationSystem = null;
    }

    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
    }

    _addNotification = (title, message, type="info", autoDismiss=200, position="tr")=>{
        this._notificationSystem.addNotification({
            title,
            message,
            level: type,
            autoDismiss,
            position
        });
    }

    fetchAllReports = (email)=>{
        this.setState({blockUi: true});
        axios({
            url    : appUrl.REPORTS+'?email='+email+'&limit=300&offset=0',
            method : 'GET',
            contentType:'application/json'
        }).then(response=>{
            this.setState({blockUi: false});
            console.log(response.data);
            if(!response.data.meta){
                this._addNotification('No records found','No records were found for this email-id. Try again', 'warning', 500);
            }else{
                this.setState({showDetails: true, bugsList : response.data.data});
            }
        }).catch(err=>{
            console.log(err)
            this._addNotification('Error processing Request','There was an error processing your request. Try again', 'error', 500, "tc");
            this.setState({blockUi: false});
        });
    }

    showEmailToSearch = ()=>{
        this.setState({showDetails: false});
    }

    openModal = (id, title)=>{
        this.setState({ticketId: id, title : title, bugModal : true});
    }

    closeModal = ()=>{
        this.setState({bugModal : false});
    }

    render(){
        let text = "You can track (Open, Assigned, being progressed, Testing, Staging, Fixed) bugs reported by you using your registered email id's :We are shortly going to introduce aging of these bugs and avg time for bug fixing."
        return(
            <BlockUi blocking={this.state.blockUi} className="p-lg">
                <NotificationSystem ref="notificationSystem" />
                <Paragraph text={text} class="text-center">
                    <span>Hi there (again)</span> <br />
                </Paragraph>
                {!this.state.showDetails ? 
                    <TrackBugEmailForm fetchAllReports={this.fetchAllReports} _addNotification={this._addNotification} /> 
                    :
                    <BugReportedTable bugsList={this.state.bugsList} openModal={this.openModal} showEmailToSearch={this.showEmailToSearch} />
                }
                <Modal modalSize="bd-example-modal-lg" modalId={this.state.ticketId} title={this.state.title} closeModal={this.closeModal}>
                    {
                        this.state.bugModal ? <TrackBug id={this.state.ticketId} title={this.state.title} /> : null 
                    }
                </Modal>
            </BlockUi>
        )
    }
}