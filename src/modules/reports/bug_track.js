import React from 'react';
import axios from 'axios';
import appUrl from '../../constants/api_constant';
import moment from 'moment';

export default class TrackBug extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showBug : false,
            bugDetail : null
        }
    }

    componentWillMount(){
        this.getBugDetails();
    }

    getBugDetails(){
        axios({
            method : 'GET',
            url    : appUrl.REPORTS+`/ticket/${this.props.match.params.id}`,
            contentType:'application/json'
        }).then(response=>{
            this.setState({
                showBug : true,
                bugDetail : response.data.data
            });
        });
    }

    render(){
        return(
            <div>
                {
                    this.state.showBug ? 
                    <div className="row">
                        <div className="card col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <span className="badge badge-primary pull-left" style={{marginLeft:"-15px"}}>{this.state.bugDetail.attributes.status}</span>
                                    <small className="pull-right"><strong>Created At: </strong>{moment(this.state.bugDetail.attributes.created_at).format('LL')}</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{borderTop:0}}>
                                        <label className="pull-left">Name</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.name}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Email</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.email}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">File Uploaded</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.screenshot.length}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Description</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.description}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Expected Result</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.expected_result}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Estimated Date to Fix</label>
                                        <label className="pull-right">{this.state.bugDetail.attributes.estimated_date_to_fix}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img className="card-img-top" src={this.state.bugDetail.attributes.screenshot[0].thumb_location} alt={this.state.bugDetail.attributes.screenshot[0].filename} />
                        </div>
                    </div> : 
                    null
                }
            </div>
        )
    }
}