import React, { useEffect } from 'react';
import google from '../../assets/icons8-google-96.png';
import yticon from '../../assets/youtube-logo-png-46020.png';
import './_login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login())
    }

    const navigate = useNavigate()
    useEffect(() => {
        if(accessToken){
            navigate('/')
        }
    }, [accessToken, navigate])

    return (
        <div className='login-main-div'>
            <div className='login-div'>
                <div className='yt-icon'>
                    <img src={yticon} alt='yt-icon' />
                </div>
                <button className='login-btn' onClick={handleLogin}>
                    <img className='google-icon' src={google} alt="google" />
                    <span className='google-text'>Login with Google</span>
                </button>
                <label className='project-desc'>This is not Youtube. Just a Youtube clone to showcase the UI developing skills. So, Its obvious that all the functionality is not present. The project is made using Youtube APIs</label>
                <label className='project-desc'>Developed by <strong>Biky Mandal</strong></label>
            </div>
        </div>
    );
}

export default Login;