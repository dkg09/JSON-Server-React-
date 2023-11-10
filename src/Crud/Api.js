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