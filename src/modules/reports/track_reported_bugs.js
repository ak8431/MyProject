import React from 'react';
import axios from 'axios';
import {appUrl} from '../../constants/api_constant'
import BugList from './bug_list';
import Modal from '../../components/modal';
import TrackBug from './bug_track';
import Paragraph from '../../components/paragraph';
import Div from '../../components/HtmlElements/Div';
import Form from '../../components/Form';
import {validateEmail} from '../../controllers/functions';
// import $ from 'jquery';

export default class TrackReportedBugs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : false,
            bugsList    : [],
            ticketId    : null,
            title       : 'Bug Status'
        }
        this.openModal  = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    fetchAllReports(email){
        axios({
            url    : appUrl.REPORTS+'/'+email+'?limit=200&offset=0',
            method : 'GET',
            contentType:'application/json'
        }).then((response)=>{
            if(!response.data.meta){
                console.log(response.data);
                // document.getElementById('myModal').modal('toggle');
            }else{
                this.setState({showDetails: true, bugsList : response.data.data});
            }
        }).catch((err)=>console.log(err));
    }

    handleSubmit(e){
        e.preventDefault();
        return this.handleDetails(e)
    }

    handleDetails(e){
        e.preventDefault();
        let email   = this.refs.email.value.trim();
        let isValid = validateEmail(email);
        if(isValid){
            this.fetchAllReports(email);
        }else{
            alert('Not a valid Email-id')
        }
    }

    changeState(e){
        this.setState({showDetails: false});
    }

    openModal(id, title){
        let _this = this;
        _this.setState({ticketId: id, title : title, bugModal : true});
    }

    closeModal(){
        this.setState({bugModal : false});
    }

    render(){
        let bugList = this.state.bugsList.map((detail,index)=>{
            return (
                <BugList detail={detail} openModal={this.openModal} index={index} key={detail.ticketId} />
            )
        })
        let text = "You can track (Open, Assigned, being progressed, Testing, Staging, Fixed) bugs reported by you using your registered email id's :We are shortly going to introduce aging of these bugs and avg time for bug fixing."
        return(
            <Div class="p-lg">
                <Paragraph text={text} class="text-center">
                    <span>Hi there (again)</span> <br />
                </Paragraph>
                {!this.state.showDetails ? 
                    <Form onSubmit={e=>this.handleSubmit(e)}>
                        <Div class="form-inline">
                            <Div class="input-group col-md-8">
                                <label htmlFor="email"></label>
                                <input id="email" type="email" className="form-control" placeholder="Enter Email-id to find your reported bugs" ref="email" />
                            </Div>
                            <button type="button" className="btn btn-primary col-md-3 pointer" onClick={e=>this.handleDetails(e)}>Find</button>
                        </Div>
                    </Form> :
                    <Div class="table-responsive">
                        <button type="button" className="btn btn-primary pull-right mb-sm-2 pointer" onClick={e=>this.changeState(e)}>Go Back</button>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Ticket Id</th>
                                    <th>Description</th>
                                    <th>Estimated Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bugList}
                            </tbody>
                        </table>
                    </Div>
                }
                <Modal modalId={this.state.ticketId} title={this.state.title} closeModal={this.closeModal}>
                    {
                        this.state.bugModal ? <TrackBug id={this.state.ticketId} title={this.state.title} /> : null 
                    }
                </Modal>
            </Div>
        )
    }
}