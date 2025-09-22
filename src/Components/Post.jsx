import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border-2 border-green-500 p-10 rounded-2xl w-[500px] mx-auto text-left mt-5'>
            <h3 className='font-bold'>Title: <span className='font-semibold'> {post.title}
                </span></h3>
            <p className='font-bold'>User Id: <span className='font-light'>{post.userId}</span></p>
            <p className='font-bold'>User Id: <span className='font-light'>{post.body}</span></p>
        </div>
    );
};

export default Post;