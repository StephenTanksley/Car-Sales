import React from 'react';
import { connect } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({car, additionalPrice, additionalFeatures}) => {
// We're importing these items of state from our store and we're passing them into our App as an object. This is related to the mapStateToProps function as defined below.


  //we're moving this state object to reducers.js. This state object will go away.
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };


  //These are actions, so they're going to be moved to the actions folder/file.

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures car={car} additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ car, additionalPrice, additionalFeatures }) => {
  return {
    car, 
    additionalPrice,
    additionalFeatures 
  }
}

//We're mapping state to props because the App needs to have access to state in order to render components properly. We need to have access to those props in various components, so we're grabbing state from our store and then using that store's state to pass along data wherever we need it in our app. 

// Since we don't actually do any actions inside the app component itself, we don't have to include mapDispatchToProps inside the connect function's params section.

  export default connect(mapStateToProps)(App);