import React, { Component } from 'react'

export default class FilePreview extends Component {
    render() {
        let {file} = this.props;
        let content;
        switch(file.type){
              case 'image':
                  content = <div>
                      <img alt="hello there" src={file.url} />
                  </div>
                  break;
              case 'document':
                  content = <div>
                          <embed type="application/pdf" src={file.url} frameBorder="0" width="100%" height="400px" />
                      </div>
                      break;
              case 'audio':
                  content = <div>
                          <audio>
                              <source src={file.url} />
                          </audio>
                      </div>
                      break;
              case 'video':
                  content = <div>
                              <video className="fw" style={{height: "500px"}} name="media" controls="controls">
                                  <source src={file.url} type="video/mp4" />
                              </video>
                      </div>
                      break;       
              default: console.log('nothing found', file.type);
                  break;
        }
      return (
        <div>
          {content}
        </div>
      )
    }
}
