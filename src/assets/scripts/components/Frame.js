import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Frame extends Component {
    buildLinkElements(stylesheetHrefs) {
        return stylesheetHrefs.map((styleHref) => {
            return <link href={styleHref} rel="stylesheet" />
        });
    }

    setFrameStyles(frame) {
        frame.contentDocument.body.style.margin = '10px';
        frame.style.height = `${frame.contentDocument.body.scrollHeight}px`;
    }

    componentDidMount() {
        this.renderFrameContents();
    }

    renderFrameContents() {
        const el = ReactDOM.findDOMNode(this);
        const doc = el.contentDocument;

        if(doc.readyState === 'complete') {
            ReactDOM.render(<div>{this.buildLinkElements(this.props.styles)}</div>, doc.head);
            ReactDOM.render(this.props.children, doc.body);
            this.setFrameStyles(el);
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
