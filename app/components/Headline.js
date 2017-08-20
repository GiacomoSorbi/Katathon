const Headline = (props) => {
  let headlineStyle = {
    maxWidth: props.width,
    marginRight: props.marginRight
  };
  return (
    <div className="headline-container" style={headlineStyle}>
      { props.children }
    </div>
  );
}

export default Headline;
