import './Users.scss';
import { useEffect, useState } from 'react';
// import { useFetch } from '../../Hooks';

const Users = () => {

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);

        const users = data.map((user) => {
            return (
                <div className='user' key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            );
        });
    }  

    // const [page, setPage] = useState(1);
    // const [loading, error, data] = useFetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);    

    return (
        <div className='users'>
            <h1>Users</h1>
            {/* <button onClick={() => setPage(page + 1)}>Next</button>
            <button onClick={() => setPage(page - 1)}>Previous</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && data.results.map((user, index) => (
                <div key={index} className='user'>
                    <img src={user.picture.large} alt={user.name.first} />
                    <p>{user.name.first} {user.name.last}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.location.country}</p>
                </div>
            ))}     */}
            
        </div>
    );
}

export default Users;
