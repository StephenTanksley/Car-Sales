//actions
import { 
  ADD_FEATURE, 
  REMOVE_FEATURE
} from '../actions/index';

// 1) set up reducer and initial state. Don't have to export initialState because we're just using it here.
const initialState = {
  additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

const reducer = (state = initialState, action) => {

  //we want a container for the features we want to add to our car.
  let userFeatures = [];
  
  //we create a switch to set up our action options.
  switch (action.type) {
    case ADD_FEATURE: 
        return {
          //we want a copy of our initial state
          ...state,
          car: {
            //we want a copy of the car itself
          ...state.car,
          //we want to see the car's current price along with the price of the object returned from the payload
          price: state.car.price + action.payload.price,
          //we also want to copy the features and then add the feature from the payload to that array.
          features: [...state.car.features, action.payload]
        },
        //We're removing the 'additional features' item from the list by returning a list of features where the id doesn't match the payload feature's id.
        additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
      }

      case REMOVE_FEATURE:

      //We want to return an array that runs through the features array and returns everything that doesn't match the payload's .name key.
        userFeatures = state.car.features.filter(feature => feature.id !== action.payload.id)
        return {
          //we want a copy of our initial state.
          ...state,
          car: {
          
            //we want a copy of the car itself
          ...state.car,
          //the new price is going to be the current price of the car minus the price of the object returned from the payload.
          price: state.car.price - action.payload.price,
          //features is just going to display the current list of features added by the user.
          features: userFeatures
        },

        //we're adding the payload back to the additionalFeatures array.
        additionalFeatures: [...state.additionalFeatures, action.payload]
      }


      //if nothing else matches, we're going to return the initial state. 
      default:
        return state;
    }
  }

export default reducer;