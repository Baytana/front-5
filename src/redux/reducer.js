const initialState = {
    title: 'old title',
    aboutTitle: 'old about title',
    contactsTitle: '',
    number: 0
}


export default function reducer(state = initialState, action) {

    if (action.type === 'CHANGE_TITLE') {
        return { ...state, title: 'new title' }
    }
    else if (action.type === 'CHANGE_ABOUTE_TITLE') {
        return { ...state, aboutTitle: 'new about title' }
    }
    else if (action.type === 'WITH_PARAMS') {
        return { ...state, contactsTitle: action.payload }
    }
    else if (action.type === 'FROM_INPUT') {
        return { ...state, contactsTitle: action.payload }
    }
    else if (action.type === 'MINUS') {
        if (state.number > 0) {
            return { ...state, number: action.payload }
        }
        else { return state }
    }
    else if (action.type === 'PLUS') {
        return { ...state, number: action.payload }
    }
    else if (action.type === 'PLUS_TEN') {
        return { ...state, number: action.payload }
    }
    else if (action.type === 'RESET') {
        return { ...state, number: action.payload }
    }

    return state
}