const Display = ({ result, message, expression }) => {
    return (
        <div className="display">
            {message && <div className="message">{message}</div>}
            <div className="expression">{expression || "0"}</div>
            <div className="result">{result || "0"}</div>
        </div>
    );
};

export default Display;