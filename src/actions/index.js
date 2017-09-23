import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=0305201303052013'

/* ------- Action Definitions ------- */
export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_POST = "ADD_POST";



/* ------- Action Creators ------- */

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function addPost(values){
    //Call back end api to add post
    return {
        type: ADD_POST,
        payload: values
    }
}