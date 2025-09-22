import React, { use } from 'react';
import Friend from './Friend';

const Friends = ({friendPromise}) => {
    const friends= use(friendPromise);
    
    return (
        <div className='border-2 border-amber-400 p-10 rounded-2xl w-2xl'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;