
export const deleteUser = (_id) => {
    return{
        type: 'DELETE_USER',
        _id
    }
}

export const getUsers = () => {
    return{
        type: 'GET_USERS'
    }
}

export const sendData = () => {
    return{
        type: 'SEND_DATA'
    }
}

export const editUser = (formData) => {
    return{
        type: 'EDIT_USER',
        formData
    }
}




