import { Types } from "../constants/actionTypes";

export const ActionCreators = {

    formSubmitionStatus: (status) => ({ type:Types.FORM_SUBMITION_STATUS , payload:{status} }),

    login: (user) => ({ type:Types.LOGIN , payload:{user} }) 
}