import React from 'react';
import Paragraph from '../../components/paragraph';
import Form from '../../components/Form';
import Div from '../../components/HtmlElements/Div';
import {validateEmail} from '../../controllers/functions';

export default class ReportBug extends React.Component{
    constructor(props){
        super(props);
        this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    }

    onChangeEmailHandler(e){
        e.target.className = "form-control";
        if(!e.target.value.trim()){
            return false;
        }
        let email = validateEmail(e.target.value);
        if(!email){
            e.target.className = "form-control bg-danger";
            e.target.focus;
            return false;
        }else{
            console.log('valid email.');
        }
    }

    render(){
        let text = "Thank you for trying out Ibism. We understand you have landed here because of something going wrong. Our sincere apologies for the same. We will be working on the issue as soon as you report the bug and keep you updated as we progress. Thank you for your patience!"
        return(
            <Div class="p-lg">
                <Paragraph text={text} class="text-center">
                    <span>Hi there,</span><br />
                </Paragraph>
                <Form class="report-bug-form">
                    <Div class="form-group col-md-8 offset-md-2">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onBlur={this.onChangeEmailHandler} />
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <label htmlFor="environment">Select Environment</label>
                        <select id="environment" defaultValue="0" className="form-control">
                            <option disabled value="0">Select Environment</option>
                            {/* {environment} */}
                        </select>
                    </Div>
                    <Div class="col-md-8 offset-md-2">
                        <Div class="form-row">
                            <Div class="form-group col-md-6">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="User Name" />
                            </Div>
                            <Div class="form-group col-md-6">
                                <label htmlFor="organisation">Organisation Name</label>
                                <input type="text" className="form-control" id="organisation" placeholder="Organisation Name" />
                            </Div>
                        </Div>
                    </Div>
                    <Div class="col-md-8 offset-md-2">
                        <Div class="form-row">
                            <Div class="form-group col-md-6">
                                <label htmlFor="url">Url</label>
                                <input type="url" className="form-control" id="url" placeholder="Enter environment Url" />
                            </Div>
                            <Div class="form-group col-md-6">
                                <label htmlFor="version">Version</label>
                                <input type="number" className="form-control" id="version" placeholder="Enter version number" />
                            </Div>
                        </Div>
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <label>Choose a file to support your bug description</label>
                        <label className="custom-file col-md-8">
                            <input type="file" id="file2" className="custom-file-input" />
                            <span className="custom-file-control"></span>
                        </label>
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <label htmlFor="priority">Select Bug Priority</label>
                        <select className="form-control" id="priority" defaultValue="Normal">
                            <option disabled value="Normal">Select Priority of Bug</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="descripton" rows="3" placeholder="Describe your Bug in detail"></textarea>
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <label htmlFor="expectedResult">Expected Result</label>
                        <textarea className="form-control" id="expectedResult" rows="3" placeholder="Describe what you expected"></textarea>
                    </Div>
                    <Div class="form-group col-md-8 offset-md-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Div>
                </Form>
            </Div>
        )
    }
}