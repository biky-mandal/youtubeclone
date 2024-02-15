import React, { Component } from 'react';
import './_home.css'

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

class Home extends Component {
    render() {
        return (
            <div className='main-div'>
                <div className='header-div'>
                    <Header />
                </div>
                <div className='content-with-sidebar'>
                    <div className='sidebar'>
                    <Sidebar />
                    </div>
                    <div className='content'>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;