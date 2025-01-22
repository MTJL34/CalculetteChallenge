const Input = ({name, val, dispatch}) => {
 
    const handleChange = (e) => {
     const {value, name} = e.target
     
     if (!/^\d+$/.test(value) && value !== "") { // On vérifie que value est une valeur numérique et qu'il n'est pas vide
      return
     }
     
     dispatch({
      type: "change_value",
      payload: {
       name,
       value
      }
     })
    }
    
    return <>
     <input type={"text"} placeholder={`Valeur ${name}`} name={name} value={val} onChange={handleChange} />
    </>
   }
   export default Input