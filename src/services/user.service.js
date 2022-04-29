import axios from "axios"
class UserService {
    getAllUsers = (searchDetails) => {
        var url = "https://nztodo.herokuapp.com/api/tasks/?format=json";
        if (searchDetails.name != '' && searchDetails.name != null)
            url = url + "&search=" + searchDetails.name
        return axios.get(url);
    }

}
export default new UserService()