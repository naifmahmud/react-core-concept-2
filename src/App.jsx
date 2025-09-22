import './App.css'
import Batman from './Batman';
import Hello from './Components/hello'
import Counter from './Counter';

function App() {
  const handleButton=(num)=>{
    const newNum= num+10;
    alert(newNum);
  }
  return (
    <>
    <Batman></Batman>
    <Counter></Counter>
      <h1 className='text-2xl font-bold'>Welcome to React</h1>
      {/* <Hello></Hello> */}

      <button onClick={()=> handleButton(10)} className='border-2 border-red-400 hover:bg-blue-700'>Add Button</button>

    </>
  )
}

export default App
