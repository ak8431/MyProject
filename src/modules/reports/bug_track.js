import React from 'react';
import axios from 'axios';
import {appUrl, BASE_URL} from '../../constants/api_constant';
import moment from 'moment';
import Div from '../../components/HtmlElements/Div';

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
            url    : appUrl.REPORTS+`/ticket/${this.props.id}`,
            contentType:'application/json'
        }).then(response=>{
            this.setState({
                showBug : true,
                bugDetail : response.data.data
            });
        });
    }

    render(){
        let {bugDetail, showBug} = this.state;
        let images;
        if(bugDetail && bugDetail.attributes.screenshot && Array.isArray(bugDetail.attributes.screenshot) && bugDetail.attributes.screenshot.length>0){
            images = bugDetail.attributes.screenshot.map((img, index)=>
                ( <img  className="card-img-top img-screenshot" key={index} 
                        src={BASE_URL+img.thumb_location.substr(8)}
                        alt={img.filename} /> )
            )
        }
        return(
            <Div>
                {
                    showBug ? 
                    <Div class="row" style={{height:"300px", overflow:"auto"}}>
                        <Div class="card col-sm-12">
                            <Div class="row">
                                <Div class="col-sm-12">
                                    <span className="badge badge-primary pull-left" style={{marginLeft:"-15px"}}>{bugDetail.attributes.status}</span>
                                    <small className="pull-right"><strong>Created At: </strong>{moment(bugDetail.attributes.created_at).format('LL')}</small>
                                </Div>
                            </Div>
                            <Div class="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{borderTop:0}}>
                                        <label className="pull-left">Name</label>
                                        <label className="pull-right">{bugDetail.attributes.name}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Email</label>
                                        <label className="pull-right">{bugDetail.attributes.email}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">File Uploaded</label>
                                        <label className="pull-right">{bugDetail.attributes.screenshot.length}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Description</label>
                                        <label className="pull-right">{bugDetail.attributes.description}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Expected Result</label>
                                        <label className="pull-right">{bugDetail.attributes.expected_result}</label>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="pull-left">Estimated Date to Fix</label>
                                        <label className="pull-right">{bugDetail.attributes.estimated_date_to_fix}</label>
                                    </li>
                                </ul>
                            </Div>
                        </Div>
                        <Div class="col-sm-12">
                            {images}
                        </Div>
                    </Div> : 
                    null
                }
            </Div>
        )
    }
}