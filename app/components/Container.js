const Container = (props) => {
  return (
    <div className="container" style={{width: `${props.width || 100}%`}}>
      {props.children}
    </div>
  );
}

export default Container;
