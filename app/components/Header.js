var React = require("react");

class Header extends React.Component {
  render() {
    return (
      <header>
	      <nav className="main-nav">
          <h1>Katathon</h1>
	      </nav>
      </header>
    );
  }
}

module.exports = Header;
