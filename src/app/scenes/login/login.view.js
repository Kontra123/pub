import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.scss'
import { registeredUsers } from '../../constants/mockdata'

const Login = () => {

    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        userName: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState(null)

    const handleInputChange = e => {
        const { name, value } = e.target
        setInputValues(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleLogin = e => {
        const user = registeredUsers.find(item =>
            item.userName === inputValues.userName &&
            item.password === inputValues.password
        );

        if (user) {
            setErrorMessage('')
            navigate('/home');
        }
        else {
            setErrorMessage('Something went wrong')
        }
    }

    const isLoginButtonDisabled = () => {
        return !inputValues.userName || !inputValues.password
    }

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

                <button
                    className='login'
                    onClick={handleLogin}
                    disabled={isLoginButtonDisabled()}>
                    Login
                </button>

                {errorMessage && <p className='error-validation'>
                    {errorMessage}
                </p>}

            </div>
        </div>
    )
};

export default Login