import Input from "../Input/index.jsx";

const Inputs = ({ state, dispatch }) => {
 
 const {a, b} = state;
 
 return <>
  <Input name={"a"} val={a} dispatch={dispatch} />
  <Input name={"b"} val={b} dispatch={dispatch} />
 </>
}

export default Inputs