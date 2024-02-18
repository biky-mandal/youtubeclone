import React from 'react';
import './_sidebar.css';
import sbItems from '../../assets/jsons/sidebarItems.json';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth.action';

const Sidebar = () => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className='sidebar-main'>
            <div className='sidebar-content'>
                {
                    sbItems[0].isGroup ? <div className='sidenav side-nav-group-title'><span>{sbItems[0].title}</span></div> : null
                }
                {
                    sbItems[0].items.map((item, i) => {
                        return (
                            <div className='sidenav' key={i}>
                                <div className='sidenav-icon'>
                                    <span class="material-symbols-outlined">
                                        {item.normalIcon}
                                    </span>
                                </div>
                                <div className='sidenav-title'>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <hr className='hr'></hr>

            <div className='sidebar-content'>
                {
                    sbItems[1].isGroup ? <div className='sidenav side-nav-group-title'><span>{sbItems[1].title}</span></div> : null
                }
                {
                    sbItems[1].items.map((item, i) => {
                        return (
                            <div className='sidenav' key={i}>
                                <div className='sidenav-icon'>
                                    <span class="material-symbols-outlined">
                                        {item.normalIcon}
                                    </span>
                                </div>
                                <div className='sidenav-title'>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='sidenav' onClick={logoutHandler}>
                    <div className='sidenav-icon'>
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                    </div>
                    <div className='sidenav-title'>
                        <span>Sign Out</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;