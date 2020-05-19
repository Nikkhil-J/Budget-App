export default (state,action) => {
    switch(action.type){
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTrans:[action.payload,...state.incomeTrans]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseTrans:[action.payload,...state.expenseTrans]
            }
        case 'DEL_TRANS':
            return {
                ...state,
                incomeTrans:state.incomeTrans.filter(
                    trans => trans.id !== action.payload
                ),
                expenseTrans:state.expenseTrans.filter(
                    trans => trans.id !== action.payload
                )
            }

        default:
            return state;
    }
}