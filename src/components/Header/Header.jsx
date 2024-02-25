import React, { Component } from 'react';
import './_header.css';
import yticon from '../../assets/youtube-logo-png-46020.png';
import unnnamed from '../../assets/unnamed.jpg';
import Searchbar from '../Searchbar/Searchbar';
import MaterialIcon from 'material-icons-react';

class Header extends Component {
    render() {
        return (
            <div className='header-main'>
                <div className='left-part'>
                    <div className='burgur-icon icon'>
                        <MaterialIcon icon="menu" />
                    </div>
                    <div className='yt-icon'>
                        <img src={yticon} alt='yt-icon' />
                    </div>
                </div>
                <div className='middle-part'>
                    <Searchbar />
                </div>
                <div className='right-part'>
                    <button className='notificaton-icon icon'>
                        <MaterialIcon icon="notifications" />
                    </button>
                    <img src={unnnamed} className='account-circle' alt='acnt' />
                </div>
            </div>
        );
    }
}

export default Header;