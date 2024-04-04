import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ContactsPage() {

    const [input, setInput] = useState()

    const title = useSelector(state => state.contactsTitle)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: 'hello geeks'
        })
    }

    const addInput = () => {
        dispatch({
            type: 'FROM_INPUT',
            payload: input
        })
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>click with params</button>
            <h2>----------------</h2>
            <input type="text" onChange={(event => setInput(event.target.value))} />
            <button onClick={addInput}>add</button>
        </div>
    )
}

export default ContactsPage