//actions
export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

//We set up our actions as consts with hard-coded strings because we don't want to have to fix a bunch of hard-coded strings if we need to invoke these actions in a bunch of places. We also want to have error messages when/if we make a mistake.

const removeFeature = feature => {
    // dispatch an action here to remove an item

    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
  };

const addFeature = feature => {
    // dispatch an action here to add an item

    return {
        type: ADD_FEATURE,
        payload: feature
    }
  };



//I'm writing it this way because I want actionType to specify what sort of action rather than exporting them both individually. You can just specify actionType.addFeature(feature)

export const actionType = {
    addFeature, 
    removeFeature
}