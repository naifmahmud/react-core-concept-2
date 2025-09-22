import React, { useState } from 'react';

const Batman = () => {
    const [runs, setRuns]=useState(0);
    function handleSingels(){
        const newRun= runs+1;
        setRuns(newRun)
    }
    const [fours, setFours] =useState(0);
    function handleFour(){
        const newRun= runs+4;
        const UpdatedFours= fours+1;
        setFours(UpdatedFours);
        setRuns(newRun)
    }

    const [sixes, setSixes]= useState(0);

    function handleSixs(){
        const newRun= runs+6;
        const updatedSixes= sixes+1;
        setSixes(updatedSixes)
        setRuns(newRun)
    }

    return (
        <div className='border-2 border-green-700 p-8'>
            <h3>Player Name: Tamim</h3>
            <p>Score: {runs}</p>
            <p>Number of Sixes: {sixes}</p>
            <p>Number of Fours: {fours}</p>
            <button onClick={handleSingels}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSixs}>Six</button>
        </div>
    );
};

export default Batman;