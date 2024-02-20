import React, { useEffect, useState } from 'react';
import './_hvideo.css';
import moment from 'moment';
import numeral from 'numeral';
import request from '../../api';

const HVideo = ({ video }) => {

    const [channelIcon, setChannelIcon] = useState(null);
    const [duration, setDuration] = useState(null);
    const [viewCount, setViewcount] = useState(null);

    const {
        id,
        snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
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
        <div className='hvideo'>
            <div className='hthumbnail-box' style={{ height: thumbnails.default.height + 16, width: thumbnails.default.width + 36 }}>
                <img
                    className='hthumbnail'
                    src={thumbnails.default.url}
                    alt={id}
                    height={thumbnails.default.height + 16}
                    width={thumbnails.default.width + 36}
                />
                <span className='hduration'>{_duration}</span>
            </div>

            <div className='hbottom-description'>
                {/* <div className='hchannel-icon'>
                    <img className='hc-icon' src={channelIcon?.url} alt='d' />
                </div> */}
                <div className='hdescription'>
                    <label className='htexts'>{title}</label>
                    <div className='hinfo'>
                        <label className='hchannel-title'>{channelTitle}</label>
                        <label className='hchannel-title'>{numeral(viewCount).format("0.a")} Views • {moment(publishedAt).fromNow()}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HVideo;