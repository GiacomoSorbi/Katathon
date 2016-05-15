import React from "react";
import ReactDOM from "react-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import pippi from "./layout/footer";
// if (pippi) console.log(pippi);
// else console.log("no pippi");

// var Header = React.createClass({
//   render: function () {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//             </button>
//             <a className="navbar-brand" href="#">Katathon</a>
//           </div>
//           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//             <ul className="nav navbar-nav">
//               <li className="active"><a href="#">Link <span className="sr-only">Home</span></a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Resources</a></li>
//               <li><a href="#">Join Us</a></li>
//               <li><a href="#">Follow Us</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// });

// var Footer = React.createClass({
//   render: function () {
//     return (
//       <div className="footer"></div>
//     );
//   }
// });

//ReactDOM.render(<h1><>, document.getElementById('app'));
var Home = React.createClass({
  getInitialState: function(){
    //adds the nextDate property to state
    return {nextDate: new Date(2016,4,14) - Date.now()};
  },
  componentDidMount: function(){
  	//acts when the component is loaded
    this.timer = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
  	//acts then the component is removed
    clearInterval(this.timer);
  },
  tick: function(){
  	//function called by timer to update the nextDate variable
  	this.setState({nextDate: new Date(2016,4,7) - Date.now()});
  },
  render: function(){
    return <div>
      	<h1>Hello World, Hello Coders!</h1>
    	<h2>Next Katathon is going to be in {Math.floor(this.state.nextDate/86400000)} days,
    	{Math.floor(this.state.nextDate%86400000/3600000)} hours,
    	{Math.floor(this.state.nextDate%3600000/60000)} minutes,
    	{Math.floor(this.state.nextDate%60000/1000)} seconds</h2>
    	<p>[Not true, just making tests...]</p>
    	</div>;
  }
});

var Page = React.createClass({
  render: function () {
    return (
      <div className="page">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
});

// var nextKatathon=(new Date(2016,4,7) - Date.now());
ReactDOM.render(<Page/>, document.getElementById('app'));
