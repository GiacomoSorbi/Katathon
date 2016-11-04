var React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer>footer - you are now in {this.props.page}</footer>
    );
  }
}

module.exports = Footer;