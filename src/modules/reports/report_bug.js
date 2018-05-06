import React from 'react';
import Paragraph from '../../components/paragraph';
import BugReportForm from '../forms/BugReportForm';
import BlockUi from 'react-block-ui';
import NotificationSystem from 'react-notification-system';

export default class ReportBug extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blockUi : false
        }
        this._notificationSystem = null;
        this.fileHandle = this.fileHandle.bind(this);
    }

    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem
    }

    _addNotification = (title, message, type="info", autoDismiss=200, position="tr")=>{
        this._notificationSystem.addNotification({
            title,
            message,
            level: type,
            autoDismiss,
            position
        });
    }

    fileHandle(){
        let fileObj = {
            type : 'image',
            url  : '../../assests/AbstractHDWallpaper.jpg'
        }
        this.props.fileAPI(fileObj);
    }

    blockUi= (val)=>{
        this.setState({blockUi : val});
    }

    render(){
        let text = "Thank you for trying out Ibism. We understand you have landed here because of something going wrong. Our sincere apologies for the same. We will be working on the issue as soon as you report the bug and keep you updated as we progress. Thank you for your patience!";
        
        return(
            <BlockUi blocking={this.state.blockUi} className="p-lg">
                <NotificationSystem ref="notificationSystem" />
                <Paragraph text={text} class="text-center">
                    <span>Hi there,</span><br />
                </Paragraph>
                <button type="button" className="btn btn-info pointer" onClick={this.fileHandle} data-toggle="modal" data-target="#myModal">Open Modal</button>
                <BugReportForm blockUi={this.blockUi} _addNotification={this._addNotification} />
            </BlockUi>
        )
    }
}