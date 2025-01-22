import {useReducer} from "react";


const initialState = {
  a: "",
  b: "",
  error: "",
  result: "",
  count: 0,
  currentExpression: "", // Expression en cours
};

const checkValues = (state) => {
  if (state.a === "") return false;
  if (state.b === "") return false;
  return true;
};

const reducer = (state, action) => {
  switch (action.type) {
      case "change_value":
          return {
              ...state,
              [action.payload.name]: action.payload.value,
              error: "",
              currentExpression: `${state.a || ""} ${state.currentOperator || ""} ${
                  action.payload.name === "b" ? action.payload.value : ""
              }`.trim(),
          };

      case "set_operator":
          return {
              ...state,
              currentOperator: action.payload,
              currentExpression: `${state.a || ""} ${action.payload}`.trim(),
          };

      case "calculate":
          return checkValues(state)
              ? {
                    ...state,
                    error: "",
                    result: eval(`${state.a}${state.currentOperator}${state.b}`),
                    a: "",
                    b: "",
                    count: state.count + 1,
                    currentExpression: "",
                }
              : {
                    ...state,
                    error: "Merci de remplir les deux champs avant de calculer.",
                };

      case "reset":
          return initialState;

      default:
          return state;
  }
};

const useCalculatorReducer = () => useReducer(reducer, initialState);

export default useCalculatorReducer;