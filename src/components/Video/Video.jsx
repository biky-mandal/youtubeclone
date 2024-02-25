import React, { useEffect, useState } from 'react';
import './_video.css';
import moment from 'moment';
import numeral from 'numeral';
import request from '../../api';

const Video = ({ video }) => {

    const [channelIcon, setChannelIcon] = useState(null);
    const [duration, setDuration] = useState(null);
    const [viewCount, setViewcount] = useState(null);

    const {
        id,
        snippet: { channelId, channelTitle, title, publishedAt, thumbnails: { medium } },
        // contentDetails: { duration },
        // statistics: { viewCount }
    } = video;

    const durationInseconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(durationInseconds * 1000).format("mm:ss");


    const _videoId = id?.videoId || id;

    useEffect(() => {
        const getVideoDetails = async () => {
            const { data: { items } } = await request("/videos", {
                params: {
                    part: 'contentDetails, statistics',
                    id: _videoId
                }
            })

            setDuration(items[0].contentDetails.duration)
            setViewcount(items[0].statistics.viewCount)
        }   

        getVideoDetails();
    }, [_videoId])

    useEffect(() => {
        const getChannelIcon = async () => {
            const { data: { items } } = await request("/channels", {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })

            setChannelIcon(items[0].snippet.thumbnails.default)
        }

        getChannelIcon();
    }, [channelId])

    return (
        <div className='video' style={{ width: medium.width + 36 }}>
            <div className='thumbnail-box' style={{ height: medium.height + 16, width: medium.width + 36 }}>
                <img
                    className='thumbnail'
                    src={medium.url}
                    alt={id}
                    height={medium.height + 16}
                    width={medium.width + 36}
                />
                <span className='duration'>{_duration}</span>
            </div>

            <div className='bottom-description'>
                <div className='channel-icon'>
                    <img className='c-icon' src={channelIcon?.url} alt='d' />
                </div>
                <div className='description'>
                    <label className='texts'>{title}</label>
                    <div className='info'>
                        <label className='channel-title'>{channelTitle}</label>
                        <label className='channel-title'>{numeral(viewCount).format("0.a")} Views • {moment(publishedAt).fromNow()}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;