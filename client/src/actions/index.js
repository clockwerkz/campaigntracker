import axios from 'axios';
import {  FETCH_USER } from './types';


export const fetchUser = () => dispatch => 
axios.get('/api/current_user')
    .then(results => dispatch({ type: FETCH_USER, payload: results }));
