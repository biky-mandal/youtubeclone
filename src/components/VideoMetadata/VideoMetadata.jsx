import React from 'react';
import './_videometadata.css';
import icon from '../../assets/unnamed.jpg';
import Comments from '../Comments/Comments';

const VideoMetadata = (props) => {
    return (
        <div className='meta-data-main-div'>
            <div className='title-div'>
                <span className='watch-title'>20 February Current Affairs 2024 | Daily Current Affairs | Current Affairs Today</span>
            </div>
            <div className='controls-div'>
                <div className='chanl-info'>
                    <img className='chnl-icon' src={icon} alt='icon' />
                    <div className='chanl-subs'>
                        <span className='chnl-title'>Parcham Classes</span>
                        <span className='count-subs'>27 Lakh Subscribers</span>
                    </div>

                    <div className='buttons'>
                        <button className='join-btn btn'>Join</button>
                        <button className='subs-btn btn'>Subscribe</button>
                    </div>
                </div>

                <div className='controls-info'>
                    <div className='like-dislike'>
                        <button className='like btn btn2'>
                            <span class="material-symbols-outlined">
                                thumb_up
                            </span> 32</button>
                        <button className='dislike btn btn2'><span class="material-symbols-outlined">
                            thumb_down
                        </span></button>
                    </div>

                    <button className='share btn btn2'><span class="material-symbols-outlined">
                        share
                    </span> Share</button>
                    <button className='download btn btn2'> <span class="material-symbols-outlined">
                        download
                    </span> Download</button>
                    {/* <button className='three-dot btn btn2'><span class="material-symbols-outlined">
                        more_horiz
                    </span></button> */}
                </div>
            </div>
            <div className='description-div'>

            </div>

            <div className='comment-div'>
                <Comments/>
            </div>
        </div>
    );
}

export default VideoMetadata;