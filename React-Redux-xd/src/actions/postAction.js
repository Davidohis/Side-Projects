import {FATCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( resp => resp.json())
        .then( posts => dispatch({
            type: FATCH_POSTS,
            payload: posts
        })) 
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then( post => dispatch({
            type: NEW_POST,
            payload: post
        })) 
        .catch((error) => {
        console.error('Error:', error);
        });
}    