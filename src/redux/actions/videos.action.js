import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST } from '../actionType';
import request from '../../api';

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data } = await request.get("/videos", {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                maxResults: 30,
                pageToken: getState().homeVideos.nextPageToken,
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All'
            }
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAILED,
            payload: {
                payload: error.message
            }
        })
    }
}





export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data } = await request.get("/search", {
            params: {
                part: 'snippet',
                maxResults: 30,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video'
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
            }
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAILED,
            payload: {
                payload: error.message
            }
        })
    }
}