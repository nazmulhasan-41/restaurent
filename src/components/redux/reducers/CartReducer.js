import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SET_SUCCESS_ORDER, SET_USER } from "../actions/CartAction";
import foods from "../../../fakeData/Data/foodData";

const initialState = {
    cart: [],
    user: {
        name: '',
        email: '',
        password: '',
        msg: ''
    },
    successOrder: [],
    loggedInUser : {email:''}
}

export default function CartReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case ADD_TO_CART:
            const product = foods.filter(food => food.id === parseInt(action.id))
            return {
                cart: [...state.cart, product[0]],
                user: state.user,
                successOrder: [...state.successOrder],
                loggedInUser: state.loggedInUser
            };
        case REMOVE_FROM_CART:
            const remainingItem = state.cart.filter(pd => pd.id !== parseInt(action.id));
            return {
                cart: remainingItem,
                user: state.user,
                successOrder: [...state.successOrder],
                loggedInUser: state.loggedInUser
            }
        case SET_USER:
            //console.log('in set user---',action.userVar);

            const loggedInUserEmail=action.userVar.email;

            return {
                user: action.userVar,
                cart: [...state.cart],
                successOrder: [...state.successOrder],
                loggedInUser: {...state.loggedInUser,email:loggedInUserEmail}
            }
        case SET_SUCCESS_ORDER:

            console.log('in reducer====>',action);

            return {
                user: state.user,
                cart: [],
                successOrder: [...state.successOrder, action.order],
                loggedInUser: state.loggedInUser

            }
        case EMPTY_CART:
            return {
                cart: [],
                user: state.user,
                successOrder: [...state.successOrder],
                loggedInUser: state.loggedInUser
            }

        default:
        
            return state;

    }
}




