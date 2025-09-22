import { Suspense } from 'react';
import './App.css'
import Batman from './Batman';
import Hello from './Components/hello'
import Users from './Components/Users';
import Counter from './Counter';
import Friends from './Components/Friends';
import Posts from './Components/Posts';

const fetchUsers= fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json())

const FetchFriends= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const FetchPost = async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {

  const friendPromise= FetchFriends();
  const postPromise= FetchPost();
  // const handleButton=(num)=>{
  //   const newNum= num+10;
  //   alert(newNum);
  // }
  return (
    <>
    <Suspense fallback={<h3>Loading......</h3>}>   
      <Users fetchUsers={fetchUsers}></Users> 
    </Suspense>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Friends friendPromise={friendPromise}></Friends>
    </Suspense>

    <Suspense fallback={<h5>Don't go Posts are uploading</h5>}>
      <Posts postPromise={postPromise}></Posts>
    </Suspense>

    {/* <Batman></Batman>
    <Counter></Counter>
      <h1 className='text-2xl font-bold'>Welcome to React</h1> */}
      {/* <Hello></Hello> */}

      {/* <button onClick={()=> handleButton(10)} className='border-2 border-red-400 hover:bg-blue-700'>Add Button</button> */}

    </>
  )
}

export default App
