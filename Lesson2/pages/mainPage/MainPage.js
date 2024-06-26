import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTitleAction, withParamsAction } from '../../redux/actions'

function MainPage() {

    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }

    const withParams = () => {
        dispatch(withParamsAction('good bye geeks'))
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>wiht params</button>
        </div>
    )
}

export default MainPage