import React from 'react';
import Div from './HtmlElements/Div';

export default class Modal extends React.Component{
    render(){
        return(
            <Div class="modal fade" id={this.props.modalId} dataBackdrop="false" tabIndex="-1" role="dialog" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                <Div class="modal-dialog" role="document">
                    <Div class="modal-content">
                        <Div class="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Div>
                        <Div class="modal-body">
                            {this.props.children}
                        </Div>
                        <Div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                        </Div>
                    </Div>
                </Div>
            </Div>
        )
    }
}