import React from 'react';

const Friend = ({friend}) => {
    const {name,email,phone}=friend;
    
    return (
        <div className='border-2 border-amber-400 p-10 rounded-2xl w-[500px] mx-auto'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <p>Address: {address}</p> */}
        </div>
    );
};

export default Friend;