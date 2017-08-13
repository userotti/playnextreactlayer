import axios from 'axios';

//redux-promise-middleware
export function fetchTweets() {
    return {
        type: 'FETCH_TWEETS',
        payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
    }
}

export function addTweet(id, ) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text
        }
    }
}


export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text
        }
    }
}

export function deleteTweet(id, text) {
    return {
        type: 'DELETE_TWEET',
        payload: {
            id,
        }
    }
}
