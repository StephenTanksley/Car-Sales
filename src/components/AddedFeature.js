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

    //we're taking our actionType export and binding it to the 'action' key so we can access it directly. Now we can declare action.removeFeature(feature)
    action: bindActionCreators(actionType, dispatch)
  }
}

//we're leaving the first part of the connect null because we don't need to map State to props, just the dispatch. For the most part, this component doesn't even need to know that Redux exists or what Redux is doing. All it needs is to have access to that data and to know what to do. Once we've mapped our dispatch to props, then we select the component we want this to affect (AddedFeature.js)
export default connect(null, mapDispatchToProps)(AddedFeature);
