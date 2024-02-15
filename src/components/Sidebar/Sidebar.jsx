import React, { Component } from 'react';
import './_sidebar.css';
import MaterialIcon, { colorPalette } from 'material-icons-react';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-main'>
                <div className='sidebar-content'>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="home_filled" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Home</span>
                        </div>
                    </div>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="play_circle" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Shorts</span>
                        </div>
                    </div>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="subscriptions" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Subscription</span>
                        </div>
                    </div>
                </div>
                <hr className='hr'></hr>

                <div className='sidebar-content'>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="home_filled" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Home</span>
                        </div>
                    </div>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="play_circle" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Shorts</span>
                        </div>
                    </div>
                    <div className='sidenav'>
                        <div className='sidenav-icon'>
                            <MaterialIcon size='24' color='#0f0f0f' icon="subscriptions" />
                        </div>
                        <div className='sidenav-title'>
                            <span>Subscription</span>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Sidebar;