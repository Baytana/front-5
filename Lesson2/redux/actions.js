import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value) {
    return {
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction(name) {
    return {
        type: types.ADD,
        payload: name
    }
}

export function deleteAllAction() {
    return {
        type: types.DELETE,
        payload: []
    }
}

// homeWork-2

export const setInput = (inputNumber, value) => {
    return {
        type: types.SET_INPUT,
        payload: {
            inputNumber,
            value
        }
    }
}

const alertInput = (input1, input2) => {
    if (!input1 || !input2) {
        alert('Please fill both fields');
        return;
    }
}

export const add = (num1, num2) => {
    alertInput(num1, num2)
    return {
        type: types.ADD,
        payload: num1 + num2
    }
}

export const subtract = (num1, num2) => {
    alertInput(num1, num2)
    return {
        type: types.SUBTRACT,
        payload: num1 - num2
    }
}

export const multiply = (num1, num2) => {
    alertInput(num1, num2)
    return {
        type: types.MULTIPLY,
        payload: num1 * num2
    }
}

export const divide = (num1, num2) => {
    alertInput(num1, num2)
    return {
        type: types.DIVIDE,
        payload: num1 / num2
    }
}
