import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Frame extends Component {
    componentDidMount() {
        this.renderFrameContents();
    }

    renderFrameContents() {
        const doc = ReactDOM.findDOMNode(this).contentDocument;

        if(doc.readyState === 'complete') {
            ReactDOM.render(<link rel="stylesheet" href="http://localhost:3000/theme/unicorn/unicorn.css" />, doc.head);
            ReactDOM.render(this.props.children, doc.body);
        } else {
            setTimeout(this.renderFrameContents, 0);
        }
    }

    componentDidUpdate() {
        this.renderFrameContents();
    }

    componentWillUnmount() {
        React.unmountComponentAtNode(ReactDOM.findDOMNode(this).contentDocument.body);
    }

    render() {
        return <iframe />;
    }
}