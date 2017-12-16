import React from 'react';
import axios from 'axios';
import appUrl from '../../constants/api_constant'
import BugList from './bug_list';
import Modal from '../../components/modal';
import TrackBug from './bug_track';
import $ from 'jquery';

export default class TrackReportedBugs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : false,
            bugsList    : [],
            ticketId    : null,
            title       : 'Bug Status'
        }
        this.openModal = this.openModal.bind(this);
    }

    fetchAllReports(email){
        axios({
            url    : appUrl.REPORTS+'/'+email+'?limit=100&offset=0',
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

    validateEmail(email){
        var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return filter.test(email);
    }

    handleDetails(e){
        e.preventDefault();
        let email   = this.refs.email.value.trim();
        let isValid = this.validateEmail(email);
        if(isValid){
            this.fetchAllReports(email);
        }
    }

    changeState(e){
        this.setState({showDetails: false});
    }

    openModal(id, title){
        this.setState({bugModal : false});
        let _this = this;
        _this.setState({ticketId: id, title : title});
        // $('#'+id).modal('show');
        setTimeout(function(){
            _this.setState({bugModal:true});
        },200);
    }

    render(){
        let bugList = this.state.bugsList.map((detail,index)=>{
            return (
                <BugList detail={detail} openModal={this.openModal} index={index} key={detail.ticketId} />
            )
        })
        return(
            <div>
                <p className="text-center">
                Hi there (again) <br />
                You can track (Open, Assigned, being progressed, Testing, Staging, Fixed) 
                bugs reported by you using your registered email id's :
                We are shortly going to introduce aging of these bugs and avg time for bug fixing.
                </p>
                {!this.state.showDetails ? 
                    <form>
                        <div className="form-inline">
                            <div className="input-group col-md-8">
                                <label htmlFor="email"></label>
                                <input id="email" type="email" className="form-control" placeholder="Enter Email-id to find your reported bugs" ref="email" />
                            </div>
                            <button type="button" className="btn btn-primary col-md-3 pointer" onClick={e=>this.handleDetails(e)}>Find</button>
                        </div>
                    </form> : null
                }
                {
                    this.state.showDetails ?
                    <div className="table-responsive">
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
                    </div> : null
                }
                <Modal modalId={this.state.ticketId} title={this.state.title}>
                    {
                        this.state.bugModal ? <TrackBug id={this.state.ticketId} title={this.state.title} /> : null 
                    }
                </Modal>
            </div>
        )
    }
}