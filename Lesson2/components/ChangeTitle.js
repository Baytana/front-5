import { useDispatch } from "react-redux";

function ChangeTitle() {

    const dispatch = useDispatch()

    const changeAbouteTitle = () => {
        dispatch({
            type: 'CHANGE_ABOUTE_TITLE'
        })
    }

    return (
        <div>
            <button onClick={changeAbouteTitle}>change Aboute Title</button>
        </div>
    );
}

export default ChangeTitle;
