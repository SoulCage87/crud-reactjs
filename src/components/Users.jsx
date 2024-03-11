import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Users = () => {

    const navigate = useNavigate();

    const submitHandler = () => {
        navigate('/addUser')
    }

    const url = "https://api.escuelajs.co/api/v1/users"
    const [Users, setUsers] = useState([]);
    const [Id, setId] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Role, setRole] = useState('');
    const [Avatar, setAvatar] = useState('');

    const getUsers = async () => {
        const response = await axios.get(url);
        setUsers(response.data)
        console.table(response);
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <>
            <div className="App">
                <div className='container-fluid'>
                    <div className='rwo mt-3'>
                        <div className='col-md-4 offset-md-4'>
                            <div className='d-grid mx-auto'>
                                <button onClick={submitHandler} className='btn btn-dark'>
                                    <i className='fa-solid fa-circle-plus' /> Añadir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2 mt-3'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>id</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                    <th>Avatar</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {
                                    Users.map((user, i) => (
                                        <tr key={user.id}>
                                            <td>{i + 1}</td>
                                            <td>{user.id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.role}</td>
                                            <td><img src={user.avatar} alt="User" style={{ width: '90px' }} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
