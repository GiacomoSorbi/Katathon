var React = require("react");
var ReactDOM = require("react-dom");

var Footer = require("./components/Footer");
var Header = require("./components/Header");
var Home = require("./components/Home");

require("./styles/global.scss"); 

var Page = React.createClass({
  getInitialState: function(){
    return {page: "home"}
  },
  render: function () {
    return (
      <div className="page">
        <Home/>
        <Footer page={this.state.page}/>
      </div>
    );
  }
});


module.exports = Page;
ReactDOM.render(<Page/>, document.getElementById('app'));
