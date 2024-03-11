import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const navigate = useNavigate();
    const url = 'https://api.escuelajs.co/api/v1/users/'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const nameHandler = (event) => {

        const { name, value } = event.target;
        setName(value);
    }

    const emailHandler = (event) => {
        const { name, value } = event.target;
        setEmail(value)
    }

    const PasswordHandler = (event) => {
        const { name, value } = event.target;
        setPassword(value)
    }

    const AvatarHandler = (event) => {
        const { value } = event.target;
        setAvatar(value);
    }    

    const submitHandler = async (event) => {

        event.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            avatar: avatar
        }

        try {
            const result = await axios.post(url, data);
            const resultData = result.data;

            console.log(result);
            console.log(resultData);
            navigate('/')
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }

    }
    return (
        <>

            <div className='container mt-4'>
                <div className="row">
                    <h1 className='fs-1'>Create a New User</h1>
                    <form onSubmit={submitHandler}>
                        <div className="input-group flex-nowrap m-3">
                            <span className="input-group-text" id="addon-wrapping">Name</span>
                            <input type="text" className="form-control" name='name' placeholder="Alejandro..." onChange={nameHandler} />
                        </div>
                        <div className="input-group flex-nowrap m-3">
                            <span className="input-group-text" id="addon-wrapping">Email</span>
                            <input type="text" className="form-control" name='email' placeholder="example@email.com" onChange={emailHandler}/>
                        </div>
                        <div className="input-group flex-nowrap m-3">
                            <span className="input-group-text" id="addon-wrapping">Password</span>
                            <input type="text" className="form-control" name='password' placeholder="1234..." onChange={PasswordHandler}/>
                        </div>
                        <div className="input-group flex-nowrap m-3">
                            <span className="input-group-text" id="addon-wrapping">Avatar</span>
                            <input type="text" className="form-control" name='avatar' placeholder="Link de tu Foto..." onChange={AvatarHandler}/>
                        </div>
                        <button type='submit' className='btn btn-primary row justify-content-center allign-items-center col-6'>Create User</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddUser
