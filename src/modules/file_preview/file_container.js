import React, { Component } from 'react';
import FilePreview from './file_preview';

export default class FilePreviewContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      file : props.file
    }
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nxtProps){
    this.setState({file : nxtProps.file})
  }

  closeModal(){
    this.setState({file: null});
  }

  render() {
    return (
      <div id="myModal" className="modal fade file" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal}>&times;</button>
              {/* <h4 className="modal-title">Modal Header</h4> */}
            </div>
            <div className="modal-body">
            {
                this.state.file && 
                    <FilePreview file={this.state.file} />
            }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal}>Close</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
