var React = require('react');
var Page = require('../app/app.js');
var renderer = require('react-test-renderer');

test('Page renders components', () => {
  const component = renderer.create(
    <div className="page">
      <Home/>
      <Footer page={this.state.page}/>
    </div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});