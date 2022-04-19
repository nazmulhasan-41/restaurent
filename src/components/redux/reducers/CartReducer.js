import { ADD_TO_CART, DECREASE_COUNT, EMPTY_CART, INC_COUNT, REMOVE_FROM_CART, SET_SUCCESS_ORDER, SET_USER } from "../actions/CartAction";
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
    loggedInUser: { email: '' },
    i: 0,
}

export default function CartReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case ADD_TO_CART:
            var p = foods.filter(food => food.id === parseInt(action.id));
            var randomVariable = Math.random();

            p[0].count = 0;
            let newCart = [...state.cart];

            newCart.push(p[0]);
            return {
                ...state,
                // cart:[...state.cart],
                 cart: newCart,
            };

        case REMOVE_FROM_CART:
            console.log('REMOVE_FROM_CART------>>', action);
            const remainingItem = state.cart.filter(pd => pd.id !== parseInt(action.id));
            return {
                ...state,
                cart: remainingItem,
            }
        case SET_USER:

            const loggedInUserEmail = action.userVar.email;

            return {
                user: action.userVar,
                cart: [...state.cart],
                successOrder: [...state.successOrder],
                loggedInUser: { ...state.loggedInUser, email: loggedInUserEmail }
            }
        case SET_SUCCESS_ORDER:

            return {
                user: state.user,
                cart: [],
                successOrder: [...state.successOrder, action.order],
                loggedInUser: state.loggedInUser

            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],

            }
        case INC_COUNT:

            var product = state.cart.filter(pd => pd.id === parseInt(action.pdId));

            product[0].count += 1;
            return {
                ...state, cart:[...state.cart]

            }
        case DECREASE_COUNT:
            var product = state.cart.filter(pd => pd.id === parseInt(action.pdId));
            product[0].count -= 1;

            return {...state,cart:[...state.cart]}
        
        default:

            return state;

    }
}




