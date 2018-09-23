import { connect } from 'react-redux'

import Home from '../../views/Home/Home'

import * as actions from '../../redux/actions/index'

const mapStateToProps = state => ({
  test: state.testReducer.testData
})

const mapDispatchToProps = dispatch => ({
  onLoadTestData: () => dispatch(actions.getTestData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
