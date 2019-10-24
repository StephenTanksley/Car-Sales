import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionType } from '../actions/index';

const AddedFeature = props => {
  const { feature, action} = props
  return (
    <li>
      
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => action.removeFeature(feature)} className="button">X</button>
      {feature.name}
    </li>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actionType, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddedFeature);
