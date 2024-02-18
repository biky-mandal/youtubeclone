import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST } from '../actionType';

const initialState = {
    videos: [],
    nextPageToken: null,
    loading: false,
    activeCategory: 'All'
}

export const homeVideosReducer = (prevState = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...prevState,
                videos: prevState.activeCategory === payload.category ? [...prevState.videos, ...payload.videos] : payload.videos,
                nextPageToken: payload.nextPageToken,
                loading: false,
                activeCategory: payload.category
            }
        case HOME_VIDEOS_FAILED:
            return {
                ...prevState,
                loading: false,
                error: payload
            }
        default:
            return prevState
    }

}