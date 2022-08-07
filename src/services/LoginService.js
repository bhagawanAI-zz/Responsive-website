import { ApiHelper } from "./helper/ApiHelper";
import { BASE_URL } from "./helper/config";

const apiHelper = new ApiHelper();

export class LoginService {
    signup(reqData){
        const uri = `${BASE_URL}/signup`;
        return apiHelper.post(uri,reqData);
    }
    login(reqData){
        const uri = `${BASE_URL}/login`;
        return apiHelper.post(uri,reqData);
    }
    verifyEmail(reqData){
        const uri = `${BASE_URL}/verifyemail`;
        return apiHelper.post(uri, reqData)
    }
}