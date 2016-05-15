import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>footer - you are now in {this.props.page}</footer>
    );
  }
}