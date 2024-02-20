import React, { Component, useEffect, useState } from 'react';
import './_home.css'

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import categories from '../../assets/jsons/categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import Video from '../../components/Video/Video';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

    const dispatch = useDispatch();
    const fetchVideos = () => {
        dispatch(getPopularVideos())
    }
    const { videos } = useSelector(state => state.homeVideos);
    const [activeElement, setActivieElement] = useState('All')

    const categoryHandler = (category) => {
        setActivieElement(category);
        dispatch(getVideosByCategory(category))
    }

    useEffect(() => {
        fetchVideos();
    }, [dispatch])

    console.log(videos);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            fetchVideos();
        }
    }

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
                                    <div
                                        onClick={() => categoryHandler(cat.title)}
                                        className={activeElement == cat.title ? 'category selected' : 'category'}
                                        key={i}>{cat.title}</div>
                                )
                            })
                        }
                    </div>
                    <div className='videos-div' onScroll={handleScroll}>
                        {
                            videos.map((vdo, i) => {
                                return (
                                    <Video video={vdo} key={i} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;