import React from 'react';
import { connect } from 'react-redux'
import { actionType } from '../actions/index.js';
import { bindActionCreators } from 'redux'

const AdditionalFeature = props => {
  const { feature, action } = props
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
    //we're taking our actionType export and binding it to the 'action' key so we can access it directly. Now we can declare action.AddFeature(feature)
    action: bindActionCreators(actionType, dispatch)
  }
}

//we're leaving the first part of the connect null because we don't need to map State to props, just the dispatch. For the most part, this component doesn't even need to know that Redux exists or what Redux is doing. All it needs is to have access to that data and to know what to do. Once we've mapped our dispatch to props, then we select the component we want this to affect (AdditionalFeature.js)
export default connect(null, mapDispatchToProps)(AdditionalFeature);