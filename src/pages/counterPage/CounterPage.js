import { useDispatch, useSelector } from 'react-redux';

function CounterPage() {

    const dispatch = useDispatch()
    const number = useSelector(state => state.number)

    const minus = () => {
        dispatch({
            type: 'MINUS',
            payload: number - 1
        })
    }

    const plus = () => {
        dispatch({
            type: 'PLUS',
            payload: number + 1
        })
    }

    const plusTen = () => {
        dispatch({
            type: 'PLUS_TEN',
            payload: number + 10
        })
    }

    const reset = () => {
        dispatch({
            type: 'RESET',
            payload: 0
        })
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default CounterPage;