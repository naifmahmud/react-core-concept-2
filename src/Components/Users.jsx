import { use } from "react";

export default function Users({fetchUsers}){
    const users= use(fetchUsers);
    return (
        <div className='border-2 border-amber-400 p-10 rounded-2xl w-2xl'>
            <h3>Users:{users.length} </h3>
        </div>
    );
};