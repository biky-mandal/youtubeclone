import React, {useEffect, useState} from 'react';
import './_horizontalvideo.css'
import categories from '../../assets/jsons/categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import HVideo from '../HVideo/HVideo';


const HorizontalVideo = () => {

    const dispatch = useDispatch();
    const fetchVideos = () => {
        if(activeElement === 'All'){
            dispatch(getPopularVideos());
        }else{
            dispatch(getVideosByCategory(activeElement));
        }
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
        <div className='content-watch'>
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
            <div className='hvideos-div' onScroll={handleScroll}>
                {
                    videos.map((vdo, i) => {
                        return (
                            <HVideo video={vdo} key={i} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HorizontalVideo;