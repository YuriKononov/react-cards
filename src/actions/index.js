
import axios from 'axios';

export const deleteUser = (_id) => async (dispatch) => {
    try{
        const users =
        await axios(
            {
            method: "DELETE",
            url: "http://localhost:8080/cards",
            data: {
                _id
            }
            }
        );
        dispatch({ type: 'DELETE_USER', payload: users.data });
    }
    catch(err){
        dispatch({ type: 'GET_USERS_FAILED', payload: err.message })
    }
}


export const editUser = (formData, _id) => async (dispatch) => {
    try {
        const {data} = await axios(
          {
            method: "PATCH",
            url: "http://localhost:8080/cards",
            data: {
              _id,
              ...formData
            }
          }
          
        );
        const user = data.find(user => user._id ===_id);
        const payload = {
            users : data,
            user
        }
        dispatch({ type: 'EDIT_USER', payload });
      }
      catch(err){
        dispatch({ type: 'GET_USERS_FAILED', payload: err.message })
      }
}


export const getUsers = () => async (dispatch) => {
    try {
        dispatch({type: 'GET_USERS_LOADING'});
        const { data } = await axios.get('http://localhost:8080/cards');
        console.log('DATA', data);
        dispatch({ type: 'GET_USERS_SUCCESS', payload: data });

    } catch (err) {
        dispatch({ type: 'GET_USERS_FAILED', payload: err.message })

    }
} 

export const addUser = (name, email, company, description) => async (dispatch) => {
    try {
        await axios.post('http://localhost:8080/cards',
                        {
                            name,
                            email,
                            company,
                            description
                        });
        const users = await axios.get('http://localhost:8080/cards');
        dispatch({ type: 'ADD_USER', payload: users.data });

    } catch (err) {
        dispatch({ type: 'GET_USERS_FAILED', payload: err.message })

    }
} 




