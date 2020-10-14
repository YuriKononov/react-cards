
const getInitialState = () => ({
    users : [],
    user :{}
  });
//https://habr.com/ru/post/483314/

  const allReducer = (state = getInitialState(), action) => {
    switch(action.type){

        case 'GET_USERS':
            try {
                const {data} = await axios.get('http://localhost:8080/cards')
                return {...state, users : data}
            }
            catch(error){
                throw(error)
            }
        
        case 'SEND_DATA':
            break;


        case 'DELETE_USER':
            try{
                const users =
                await axios(
                {
                    method: "DELETE",
                    url: "http://localhost:8080/cards",
                    data: {
                            _id: action._id
                        }
                }
            );
            return {...state, users : users.data};
            }
            catch(err){
                throw(err)
            }
            
        case 'EDIT_USER':
            try {
                user = {};
                const {data} = await axios(
                  {
                    method: "PATCH",
                    url: "http://localhost:8080/cards",
                    data: {
                      _id : props.match.params.id,
                      ...action.formData
                    }
                  }
                  
                );
                //как добавить обновленного юзера?
                const editedUser = data.find(user => user._id ===_id)
                return {...state,
                    users: users, user:editedUser}
              }
              catch(error){
                throw(error)
              }


        default:
            return state;
    }
}

export default allReducer