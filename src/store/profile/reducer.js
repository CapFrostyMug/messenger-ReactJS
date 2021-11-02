import {SHOW_HIDE_PHONE_NUMBER} from "./actions";

const initialState = {
    showPhoneNumber: false,
    phoneNumber: '+7 (919) 945-**-**',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE_PHONE_NUMBER:
            return {
                ...state,
                showPhoneNumber: !state.showPhoneNumber,
            }
        default: {
            return state;
        }
    }
}
