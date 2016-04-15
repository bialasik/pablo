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
        const stylesHref = `${document.location.origin}${this.props.styles}`;

        if(doc.readyState === 'complete') {
            ReactDOM.render(<link rel="stylesheet" href={ stylesHref } />, doc.head);
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
        console.log(this.props)

        return <iframe scrolling="no" />;
    }
}
