var React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>footer - you are now in {this.props.page}</p>
      </footer>
    );
  }
}

module.exports = Footer;
