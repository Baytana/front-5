// homeWork-2

import { useDispatch, useSelector } from 'react-redux';
import { setInput, add, subtract, multiply, divide } from '../../redux/actions';

function Calculator() {
    const { input1, input2, result } = useSelector(state => state.calculatorReducer)
    const dispatch = useDispatch()

    const handleInputChange = (e, inputNumber) => {
        const value = e.target.value
        dispatch(setInput(inputNumber, value))
    }

    return (
        <div>
            <input
                type="number"
                value={input1}
                onChange={(e) => handleInputChange(e, 1)}
            />
            <br />
            <input
                type="number"
                value={input2}
                onChange={(e) => handleInputChange(e, 2)}
            />
            <br />
            <button onClick={() => dispatch(add(parseFloat(input1), parseFloat(input2)))}>+</button>
            <button onClick={() => dispatch(subtract(parseFloat(input1), parseFloat(input2)))}>-</button>
            <button onClick={() => dispatch(multiply(parseFloat(input1), parseFloat(input2)))}>*</button>
            <button onClick={() => dispatch(divide(parseFloat(input1), parseFloat(input2)))}>/</button>
            <h1>Result: {result}</h1>
        </div>
    );
}

export default Calculator;
