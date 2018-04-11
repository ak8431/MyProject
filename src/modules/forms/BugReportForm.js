import React from 'react';
import Div from '../../components/HtmlElements/Div';
import Form from '../../components/Form';
import axios from 'axios';
import {appUrl} from '../../constants/api_constant';
import $ from 'jquery';
import {validateEmail} from '../../controllers/functions';

export default class BugReportForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailDetails : {},
            envDetails   : {},
            environment  : '0'
        }
        this.filesdata = [];
        this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    }

    uploadFile(e){
        e.stopPropagation();
        e.preventDefault();
        let files = e.target.files;
        files = Array.from(files, file=>file);
        var formData = new FormData();
        $.each(files, function(key, value) {
            formData.append('screenshot', value);
        });
        this.filesdata = formData.getAll('screenshot');
    }

    onChangeEmailHandler(e){
        e.target.className = "form-control";
        if(!e.target.value.trim()){
            return false;
        }
        let email = validateEmail(e.target.value);
        if(!email){
            e.target.className = "form-control bg-danger";
            // e.target.focus;
            return false;
        }else{
            this.findUser(e.target.value);
        }
    }

    findUser(email){
        this.setState({blockUi:true});
        axios({
            url: appUrl.USER,
            method: 'POST',
            data:{ "email" :email}
        }).then(response=>{
            this.setState({blockUi:false, emailDetails : response.data});
        }).catch(err=>{
            this.setState({blockUi : false});
        })
    }

    selectEnvironment(e){
        let emailDetails = this.state.emailDetails;
        let environment  = e.target.value;
        this.setState({environment});
        for(let em in emailDetails){
            if(em===environment){
                if(!emailDetails[em].meta){
                    alert('Wrong environment selected');
                }else{
                    this.setState({envDetails : emailDetails[em]});
                }
            }
        }
    }

    reportBug(e){
        e.preventDefault();
        this.refs.user_email.className = this.refs.user_environments.className = this.refs.user_description.className = "form-control";
        let emailValid = validateEmail(this.refs.user_email.value);
        if(!emailValid){
            this.refs.user_email.className = "form-control bg-danger";
            return false;
        }

        if(this.refs.user_environments.value.trim()==="" && this.refs.user_environments.value==='0'){
            this.refs.user_environments.className = "form-control bg-danger";
            return false;
        }

        if(this.refs.user_description.value.trim()===""){
            this.refs.user_description.className = "form-control bg-danger";
            return false;
        }

        let fileList = document.getElementById('multiFile');
        let files    = fileList.files;
        let formData = new FormData();
        if (files && files != null && files.length > 0) {
            $.each(files, function(key, value) {
                formData.append('files', value);
            });
        }

        var all_user_data = $.map(this.refs, function(refs){
            return [refs]
        });

        $.each(all_user_data, function (key, input) {
            formData.append(input.name, input.value);
        });
        // return false;
        this.sendReport(formData);
    }

    sendReport(data){
        axios({
            url    : appUrl.REPORTS,
            method : 'POST',
            data   : data
        }).then(res=>{
            this.clearForm();
            alert('Your bug has been successfully reported');
        }).catch(err=>alert('There was an eror reporting your bug'));
    }

    clearForm(){
        let emailDetails={};
        this.filesdata = [];
        this.refs.user_url.value    = '';
        this.refs.user_name.value   = '';
        this.refs.user_email.value  = '';
        this.refs.user_mobile.value = '';
        this.refs.user_result.value = '';
        this.refs.user_version.value  = '';
        this.refs.user_priority.value = '';
        this.refs.user_description.value  = '';
        this.refs.user_organization.value = '';
        this.refs.user_environments.value = '';
        this.setState({emailDetails});
    }

    render(){
        let emailDetails = this.state.emailDetails;
        let name, organization, role, phone, email;//, environment;
        // environment = Object.keys(emailDetails)
        let envr = [];
        for(let env in emailDetails){
            if(emailDetails[env].meta){
                envr.push(<option value={env}>{env}</option>)
            }
        }

        let envDet = this.state.envDetails;
        if(Object.keys(envDet).length>0){
            name  = envDet.user.name;
            role  = envDet.user.role;
            phone = envDet.user.phone;
            email = envDet.user.email;
            organization = envDet.user.organization;
        }else{
            name = phone = email = organization = role = '';
        }

        return(
            <Form class="report-bug-form">
                <Div class="form-group col-md-8 offset-md-2">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" name="email" ref="user_email" className="form-control" id="inputEmail4" placeholder="Email" onBlur={this.onChangeEmailHandler} />
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <label htmlFor="environment">Select Environment</label>
                    <select id="environment" name="environment" onChange={e=>this.selectEnvironment(e)} ref="user_environments" value={this.state.environment} className="form-control">
                        <option disabled value="0">Select Environment</option>
                        {envr}
                    </select>
                </Div>
                <Div class="col-md-8 offset-md-2">
                    <Div class="form-row">
                        <Div class="form-group col-md-6">
                            <label htmlFor="username">Name</label>
                            <input type="text" name="name" ref="user_name" disabled value={name} className="form-control" id="username" placeholder="User Name" />
                        </Div>
                        <Div class="form-group col-md-6">
                            <label htmlFor="organisation">Organisation Name</label>
                            <input type="text" name="organization" value={organization} disabled ref="user_organization" className="form-control" id="organisation" placeholder="Organisation Name" />
                        </Div>
                    </Div>
                </Div>
                <Div class="col-md-8 offset-md-2">
                    <Div class="form-row">
                        <Div class="form-group col-md-6">
                            <label htmlFor="url">Url</label>
                            <input type="url" name="url" className="form-control" ref="user_url" id="url" placeholder="Enter environment Url" />
                        </Div>
                        <Div class="form-group col-md-6">
                            <label htmlFor="version">Version</label>
                            <input type="number" name="version" ref="user_version" className="form-control" id="version" placeholder="Enter version number" />
                        </Div>
                    </Div>
                </Div>
                <Div class="col-md-8 offset-md-2">
                    <Div class="form-row">
                        <Div class="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone_number" className="form-control" defaultValue={phone} pattern="^[0-9]*$" ref="user_mobile" id="phone" placeholder="Enter Phone Number" />
                        </Div>
                        <Div class="form-group col-md-6">
                            <label htmlFor="bug_title">Title</label>
                            <input type="text" name="title" ref="user_bug_title" className="form-control" id="bug_title" placeholder="Enter a title/subject for bug" />
                        </Div>
                    </Div>
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <label>Choose a file to support your bug description</label>
                    <label className="custom-file col-md-8">
                        <input type="file" id="multiFile" multiple name="files" onChange={e=>this.uploadFile(e)} className="custom-file-input" />
                        <span className="custom-file-control"></span>
                    </label>
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <label htmlFor="priority">Select Bug Priority</label>
                    <select className="form-control" name="priority" id="priority" ref="user_priority" defaultValue="Normal">
                        <option disabled value="Normal">Select Priority of Bug</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" ref="user_description" id="descripton" rows="3" placeholder="Describe your Bug in detail"></textarea>
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <label htmlFor="expectedResult">Expected Result</label>
                    <textarea className="form-control" name="expected_result" ref="user_result" id="expectedResult" rows="3" placeholder="Describe what you expected"></textarea>
                </Div>
                <Div class="form-group col-md-8 offset-md-2">
                    <center><button type="submit" className="btn btn-primary" onClick={(e)=>{this.reportBug(e)}}>Submit</button></center>
                </Div>
            </Form>
        )
    }
}