import React from 'react';
import { connect } from 'react-redux'
import { actionType } from '../actions/index.js';
import { bindActionCreators } from 'redux'

const AdditionalFeature = props => {
  const { feature, action} = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => action.addFeature(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};


//I'm declaring mapDispatchToProps and binding my actionType to action because I want to access this function directly without having to dig through props. Also, according to the docs, this way is more declarative and easier to understand at a glance.

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actionType, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
