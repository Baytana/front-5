import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteAllAction } from "../../redux/actions";
import User from "../../components/User";

function UserPage() {

    const { users, value } = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }

    const deleteAll = () => {
        dispatch(deleteAllAction())
    }

    return (
        <div>
            <input onClick={changeInput} type="text" placeholder="name" />
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            {users.map((users, idx) => <User key={idx} userName={users} />)}
        </div>
    )
}

export default UserPage