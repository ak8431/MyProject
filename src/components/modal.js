import React from 'react';

export default class Modal extends React.Component{
    render(){
        return(
            <div className="modal fade" id={this.props.modalId} data-backdrop="false" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}