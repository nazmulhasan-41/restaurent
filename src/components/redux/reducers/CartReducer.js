import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartAction";
import foods from "../../../fakeData/Data/foodData";

const initialState = {
    cart: [],
}


export default function CartReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case ADD_TO_CART:
            const product=foods.filter(food=>food.id=== parseInt(action.id))
            return { cart: [...state.cart, product[0]] };
        case REMOVE_FROM_CART:
            const remainingItem=state.cart.filter(pd=>pd.id!==parseInt(action.id));
            return {cart:remainingItem}

            
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;

    }
}




