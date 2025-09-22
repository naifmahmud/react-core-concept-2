import React, { useState } from 'react';

const Counter = () => {
   const [count, setCount] = useState(0);
   const handleCount=()=>{
    const newCount=count+1;
    setCount(newCount);
   }
    return (
        <div className='border border-amber-600 mx-auto w-2xs bg-emerald-300 my-8 p-7'>
            <p>Counter: {count}</p>
            <button onClick={handleCount} className='border-2 w-full border-b-orange-700 rounded-2xl hover:text-white'>Add Count</button>
        </div>
    );
};

export default Counter;