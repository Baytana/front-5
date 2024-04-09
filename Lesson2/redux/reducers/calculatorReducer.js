// homeWork - 2
import { types } from "../types";

const initialState = {
    input1: '',
    input2: '',
    result: ''
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_INPUT:
            return {
                ...state,
                [`input${action.payload.inputNumber}`]: action.payload.value
            };
        case types.ADD:
            return {
                ...state,
                result: action.payload
            };
        case types.SUBTRACT:
            return {
                ...state,
                result: action.payload
            };
        case types.MULTIPLY:
            return {
                ...state,
                result: action.payload
            };
        case types.DIVIDE:
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
};

export default calculatorReducer;

