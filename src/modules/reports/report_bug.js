import React from 'react';

export default class ReportBug extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                {/* <h1 className="text-center">Report Your Bugs Here</h1> */}
                <p className="text-center"><span>Hi there,</span><br />
                    Thank you for trying out Ibism.
                    We understand you have landed here because of something going wrong. 
                    Our sincere apologies for the same. 
                    We will be working on the issue as soon as you report the bug and 
                    keep you updated as we progress. 
                    Thank you for your patience! -<strong>Team Ibism</strong></p>
                <form>
                    <div className="form-group col-md-8 offset-md-2">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <label for="environment">Select Environment</label>
                        <select id="environment" defaultValue="0" className="form-control">
                            <option disabled value="0">Select Environment</option>
                            {/* {environment} */}
                        </select>
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="User Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="organisation">Organisation Name</label>
                                <input type="text" className="form-control" id="organisation" placeholder="Organisation Name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="url">Url</label>
                                <input type="url" className="form-control" id="url" placeholder="Enter environment Url" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="version">Version</label>
                                <input type="number" className="form-control" id="version" placeholder="Enter version number" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <label>Choose a file to support your bug description</label>
                        <label className="custom-file col-md-8">
                            <input type="file" id="file2" className="custom-file-input" />
                            <span className="custom-file-control"></span>
                        </label>
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <label for="priority">Select Bug Priority</label>
                        <select className="form-control" id="priority" defaultValue="Normal">
                            <option disabled value="Normal">Select Priority of Bug</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <label for="description">Description</label>
                        <textarea className="form-control" id="descripton" rows="3" placeholder="Describe your Bug in detail"></textarea>
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <label for="expectedResult">Expected Result</label>
                        <textarea className="form-control" id="expectedResult" rows="3" placeholder="Describe what you expected"></textarea>
                    </div>
                    <div className="form-group col-md-8 offset-md-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}