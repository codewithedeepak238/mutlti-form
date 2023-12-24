export const FormReduces = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case 'ADD_INFO':
            console.log(payload)
            return {...state, ...payload};
        case 'GO_BACK':
            return {...state, ...payload};
        default:
            return "No case found";
    }
}