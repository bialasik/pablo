import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Frame extends Component {
    componentDidMount() {
        this.renderFrameContents();
        Array.from(document.querySelectorAll('iframe')).map((frame) => {
          frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
        });
    }

    renderFrameContents() {
        const doc = ReactDOM.findDOMNode(this).contentDocument;

        if(doc.readyState === 'complete') {
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
        return <iframe scrolling="no" />;
    }
}
