import axios from 'axios';
import { FETCH_USER, GET_COURSES } from './types';

//((--== {{ User Actions }} ==--  ))\\

// Get the current user
export const fetchUser = () => (dispatch) => {
  axios
    .get('/auth/current_user')
    .then(res => dispatch({ type:FETCH_USER , payload: res.data.user }))
    .catch(res => dispatch({ type: FETCH_USER, payload: false }));
}
// Signup ( create new user)
export const signupUser = (signupFormValues, history, handleAlert) => (dispatch) => {
  axios
    .post('/auth/signup', signupFormValues)
    .then(res => {
      dispatch({ type:FETCH_USER , payload: res.data.user });
      // Redirect the user to the home page
      history.push('/');
    })
    .catch(err => {
      dispatch({ type: FETCH_USER, payload: false });
      // Display the error to the user
      handleAlert(err.response.data.Error);
    });
}
// Login
export const loginUser = (loginFormValues, history, handleAlert) => (dispatch) => {
  axios
    .post('/auth/login', loginFormValues)
    .then(res => {
      dispatch({ type:FETCH_USER , payload: res.data.user });
      // Redirect the user to the home page
      history.push('/');
    })
    .catch(err => {
      dispatch({ type: FETCH_USER, payload: false });
      // Display the error to the user
      handleAlert(err.response.data.Error);
    });
}
// Log out
export const logoutUser = () => (dispatch) => {
  axios
    .get('/auth/logout')
    .then(res => {
      dispatch({ type:FETCH_USER , payload: res.data.user });
      // Redirect the user to the home page
    })
    .catch(err => {
      window.location = "/";
    });
}

//((--== {{ course Actions }} ==--  ))\\
// Add Course
export const CreateCourse = (CourseValues) => (dispatch) => {
  axios
    .post('/api/course', CourseValues)
}

// Get All Courses
export const getCourses = () => (dispatch) => {
  axios
    .get('/api/course/')
    .then( res => {
      dispatch({type:GET_COURSES, payload: res.data})
    })
}
