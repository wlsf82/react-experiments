var React = require('react');
var ReactDOM = require('react-dom');

function headerElement() {
    return (
        <div className="header">
            <h1>Walmyr Lima e Silva Filho</h1>
        </div>
    );
}

var HeaderComponent = function() {
    ReactDOM.render(
        headerElement(),
        document.getElementById('app')
    );
}

module.exports = HeaderComponent;
