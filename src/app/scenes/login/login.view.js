import { useState } from 'react'
import './login.scss'

const Login = () => {

    const [inputValues, setInputValues] = useState({
        userName: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputValues(prev => ({
            ...prev,
            [name]: value
        }))
    };

    return (
        <div className='main-wrapper'>
            <h3>Welcome to my world</h3>
            <div className='login-input-wrapper'>
                <input
                    type="text"
                    name="userName"
                    value={inputValues.userName}
                    onChange={handleInputChange}
                    placeholder="User Name"
                />
                <input
                    type="text"
                    name="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />

                <button className='login'>
                    Login
                </button>
            </div>
        </div>
    )
};

export default Login