import React, { Component } from 'react';
import './_home.css'

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import categories from '../../assets/jsons/categories.json';

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
                        <div className='categories'>
                            {
                                categories.map((cat, i) => {
                                    return (
                                        <div className={cat.selected ? 'category selected' : 'category'}>{cat.title}</div>
                                    )
                                })
                            }
                        </div>
                        <div className='videos-div'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;