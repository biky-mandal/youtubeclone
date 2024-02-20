import React from 'react';
import './_watch.css';
import Header from '../../components/Header/Header';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import HorizontalVideo from '../../components/HorizontalVideo/HorizontalVideo';

const Watch = (props) => {
    return (
        <div className='main-div watch-main-div'>
            <div className='header-div sticky-header'>
                <Header />
            </div>
            <div className='content-with-sidebar'>
                <div className='vdo'>
                    <div className='iframe-vdo-div'>
                        <iframe className='iframe' width="100%" height="480px"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div className='vdo-description'>
                        <VideoMetadata />
                    </div>
                </div>

                <div className='right-sidebar'>
                    <HorizontalVideo/>
                </div>
            </div>
        </div>
    );
}

export default Watch;