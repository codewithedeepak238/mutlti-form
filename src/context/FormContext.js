import { createContext, useContext, useReducer } from "react";
import { FormReduces } from "../reducers/FormReducers";

const initialFormData = {
    name:"",
    email:"",
    phone_num: "",
    display: 0,
    cost: 0,
    plan: "",
    duration: false,
    service: false,
    storage: false,
    profile: false
}

const FormContext = createContext(initialFormData);

export const FormContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(FormReduces, initialFormData);
    function addInfo(data){
        dispatch({
            type: 'ADD_INFO',
            payload: data
        })
    }
    function goBack(data){
        dispatch({
            type: 'ADD_INFO',
            payload: data
        })
    }
    const value = {
        addInfo,
        goBack,
        data: {...state}
    }
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = ()=>useContext(FormContext);