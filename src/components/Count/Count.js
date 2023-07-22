import React, {useState} from 'react';

const Count = () => {
    const [a, setA] = useState(0)
    // console.log('Count');

    const inc = () => {
        setA(a+1)
    }
    return (
        <div>
            <div>A: {a}</div>
          <button onClick={() => inc()}>Increment</button>
        </div>
    );
};

export default Count;