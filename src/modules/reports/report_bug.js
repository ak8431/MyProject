import React from 'react';
import Paragraph from '../../components/paragraph';
import BugReportForm from '../forms/BugReportForm';
import BlockUi from 'react-block-ui';

export default class ReportBug extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blockUi : false
        }
        this.blockUi = this.blockUi.bind(this);
    }

    blockUi(val){
        this.setState({blockUi : val});
    }

    render(){
        let text = "Thank you for trying out Ibism. We understand you have landed here because of something going wrong. Our sincere apologies for the same. We will be working on the issue as soon as you report the bug and keep you updated as we progress. Thank you for your patience!";
        
        return(
            <BlockUi blocking={this.state.blockUi} className="p-lg">
                <Paragraph text={text} class="text-center">
                    <span>Hi there,</span><br />
                </Paragraph>
                <BugReportForm blockUi={this.blockUi} />
            </BlockUi>
        )
    }
}