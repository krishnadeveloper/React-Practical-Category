import {categoryActionTypes} from "../actions/category/actionTypes";
const CATEGORY_INITIAL_STATES = {
    mainCategory:[],
    subCategory:{

    }
};

export default (state=CATEGORY_INITIAL_STATES, {type, payload}) =>{
    switch (type) {
        case categoryActionTypes.ADD_CATEGORY:

            return(
                {
                    ...state,
                    mainCategory:state.mainCategory.concat(payload)
                }
            )
        
        case categoryActionTypes.EDIT_CATEGORY:
            return(
                {
                    ...state,
                    mainCategory:state.mainCategory.map(categortItem=>categortItem.id===payload.id? {...categortItem, name:payload.name}:categortItem)
                }
            )
        
        case categoryActionTypes.DELETE_CATEGORY:
            return(
                {
                    ...state,
                    mainCategory:state.mainCategory.filter(categoryItem=>categoryItem.id!==payload)
                }
            )

        case categoryActionTypes.ADD_SUB_CATEGORY:

            return(
                {
                    ...state,
                    subCategory:{
                        ...state.subCategory,
                        [payload.catId]:state.subCategory.hasOwnProperty(payload.catId)?state.subCategory[payload.catId].concat(payload.data):[payload.data]
                    }
                }
            )

        case categoryActionTypes.DELETE_SUB_CATEGORY:
            return(
                {
                    ...state,
                    subCategory:{
                        ...state.subCategory,
                        [payload.catId]:state.subCategory[payload.catId].filter(subCatItem=>subCatItem.id!==payload.subCatId)
                    }
                }
            )

        default:
            return state;
    }
}