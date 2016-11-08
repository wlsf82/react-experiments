var React = require('react');
var ReactDOM = require('react-dom');

var paragraph = 'wlsf82@gmail.com';
var header4 = 'Entre em contato!';

function footerElement() {
    return (
        <div className="footer">
            <h4>{header4}</h4>
            <p>{paragraph}</p>
        </div>
    );
}

var Footer = function() {
    ReactDOM.render(
        footerElement(),
        document.getElementById('app')
    );
}

module.exports = Footer;
