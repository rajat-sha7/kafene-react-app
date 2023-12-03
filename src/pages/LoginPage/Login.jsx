import React from 'react'
import { useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import HeaderLogin from '../../Headers/HeaderLogin'


const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputvalue] = useState({
        email: '',
        password: '',
    })

    // const [authenticated, setAuthenticated] = useState(false);


    // useEffect(() => {
    //     const token = sessionStorage.getItem('authToken');
    //     if (token) {
    //       setAuthenticated(true);
    //     }
    //   }, []);




    const handleInput = (e) => {
        const { name, value } = e.target
        setInputvalue({ ...inputValue, [name]: value })
    }


    const submitForm = (e) => {
        e.preventDefault();
        console.log(inputValue)
        const authToken = 'myAuthToken';
        sessionStorage.setItem('authToken', authToken);
        

        if (inputValue.email === inputValue.password) {
          
            alert(`Login Successful...${inputValue.email}`)
          
                navigate('/order')
                // setAuthenticated(true);
              
       
        } else {
            alert(`Please Enter Valid Credentials! ...${inputValue.email}`)
        }
    }



    return (
        <>
            <HeaderLogin />
            <div id="login-box">
                <form className="login-page" id="form" >
                    <h1>Sign In</h1>
                    <input className="login-field" type="text" name="email" value={inputValue.email} placeholder="Enter Username" onChange={handleInput} />
                    <input className="login-field" type="password" name="password" value={inputValue.password} placeholder="Enter Password" onChange={handleInput} />
                    <input className="login-btn" type="submit" value="Login" onClick={submitForm} />
                </form>
            </div>
        </>

    )
}

export default Login