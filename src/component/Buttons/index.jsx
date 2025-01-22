import "../../css/Buttons.css";

const Buttons = ({ state, dispatch }) => {
    const handleNumberClick = (number) => {
        dispatch({
            type: "change_value",
            payload: {
                name: state.a === "" ? "a" : "b",
                value: (state.a === "" ? state.a : state.b) + number,
            },
        });
    };

    const handleOperatorClick = (operator) => {
        dispatch({
            type: "set_operator",
            payload: operator,
        });
    };

    const handleCalculate = () => {
        dispatch({
            type: "calculate",
        });
    };

    const handleReset = () => {
        dispatch({
            type: "reset",
        });
    };

    const numbers = Array.from({ length: 10 }, (_, i) => i);

    return (
        <div className="buttons">
            <div className="number-buttons">
                {numbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => handleNumberClick(number.toString())}
                        className="button"
                    >
                        {number}
                    </button>
                ))}
            </div>
            <div className="operator-buttons">
                <button onClick={() => handleOperatorClick("+")} className="button operator">
                    +
                </button>
                <button onClick={() => handleOperatorClick("-")} className="button operator">
                    -
                </button>
                <button onClick={() => handleOperatorClick("x")} className="button operator">
                    x
                </button>
                <button onClick={handleCalculate} className="button operator">
                    =
                </button>
                <button onClick={handleReset} className="button reset">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Buttons;