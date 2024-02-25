import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../actionType';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

        signInWithPopup(auth, provider)
            .then(res => {
                const accessToken = res.user.stsTokenManager.accessToken;
                const profile = {
                    name: res.user.displayName,
                    photoURL: res.user.photoURL
                }

                sessionStorage.setItem('ytc-accessToken', accessToken);
                sessionStorage.setItem('ytc-profile', JSON.stringify(profile));

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: accessToken
                })
                dispatch({
                    type: LOAD_PROFILE,
                    payload: profile
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err.message
                })
            })

    } catch (err) {
        console.log(err.message);
        dispatch({
            type: LOGIN_FAILED,
            payload: err.message
        })
    }
}

export const logout = () => async dispatch => {
    await auth.signOut();

    dispatch({
        type: LOGOUT
    })

    sessionStorage.removeItem('ytc-accessToken');
    sessionStorage.removeItem('ytc-profile');
}