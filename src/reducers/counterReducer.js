const counterReducer=(state=0, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+action.number;
        default:
            return state;
    }
}

export default counterReducer; //reducer 不會拆開 所以會寫default