import react, { useState, useEffect }from 'react';
const Counter =() => {
    const [ count, setCount] = useState(0);
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => setCount( count + 1)}>Increase</button>
            <button onClick={() => setCount( count -1)}>decrease</button>
        </div>
    );
};
export default Counter;