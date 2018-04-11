import React from 'react';
import Form from '../../components/Form';
import Div from '../../components/HtmlElements/Div';
import {validateEmail} from '../../controllers/functions';

export default class TrackBugEmailForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        return this.handleDetails(e);
    }

    handleDetails(e){
        e.preventDefault();
        let email   = this.refs.email.value.trim();
        let isValid = validateEmail(email);
        if(isValid){
            this.refs.email.className = "form-control";
            this.props.fetchAllReports(email);
        }else{
            this.refs.email.className = "form-control bg-danger";
        }
    }

    render(){
        return(
            <Form onSubmit={e=>this.handleSubmit(e)}>
                <Div class="form-inline">
                    <Div class="input-group col-md-8">
                        <label htmlFor="email"></label>
                        <input id="email" type="email" className="form-control" placeholder="Enter Email-id to find your reported bugs" ref="email" />
                    </Div>
                    <button type="button" className="btn btn-primary col-md-3 pointer" onClick={e=>this.handleDetails(e)}>Find</button>
                </Div>
            </Form>
        )
    }
}