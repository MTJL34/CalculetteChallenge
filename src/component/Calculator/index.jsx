import Inputs from "../Inputs/index.jsx";
import Buttons from "../Buttons/index.jsx";
import Display from "../Display/index.jsx";
import useCalculatorReducer from "../../reducer/useCalculatorReducer.jsx";


const Calculator = () => {
    const [state, dispatch] = useCalculatorReducer();

    return (
        <div className="calculator">
            {state.error && <p className="error">{state.error}</p>}
            <Display result={state.result} expression={state.currentExpression} />
            <Buttons state={state} dispatch={dispatch} />
        </div>
    );
};

export default Calculator;