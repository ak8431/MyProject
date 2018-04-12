import React from 'react';
import Div from './HtmlElements/Div';

const Modal = (props) => {
  return (
    <Div class={"modal fade " +props.modalSize} id={props.modalId} dataBackdrop="false" tabIndex="-1" role="dialog" ariaLabelledby="exampleModalLabel" ariaHidden="true">
        <Div class="modal-dialog modal-lg" role="document">
            <Div class="modal-content">
                <Div class="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Div>
                <Div class="modal-body">
                    {props.children}
                </Div>
                <Div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                </Div>
            </Div>
        </Div>
    </Div>
  )
}
export default Modal;