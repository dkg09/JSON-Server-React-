import axios from "axios";

const Url='http://127.0.0.1:3002/users'

export const getUser=async()=>{
    try{
        return await axios.get(Url)

    }catch(error){
        console.log('error ');
    }

}

export const addUser = async(data) => {
    try {
        return await axios.post(Url, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

//get single data
export const EditUserData = async data => {
    try {
        return await axios.get(`${Url}/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}

//post updated data
export const UpdateUser = async (data, id) => {
    try {
        return await axios.put(`${Url}/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}



// For Delete data
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${Url}/${id}`)
    } 
    catch (error){
        console.log('Error while calling deleteUser API', error.message);
    }
}