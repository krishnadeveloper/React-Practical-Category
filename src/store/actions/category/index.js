import {categoryActionTypes} from "./actionTypes";

export const createCategory = createCategoryData =>{
    return dispatch =>{
        dispatch(
            {
                type:categoryActionTypes.ADD_CATEGORY,
                payload:createCategoryData
            }
        )
    }
}
export const deleteCategory = categoryId =>{
    return dispatch =>{
        dispatch(
            {
                type:categoryActionTypes.DELETE_CATEGORY,
                payload:categoryId
            }
        )
    }
}

export const createSubCategory = (catId, createSubCategoryData) =>{
    return dispatch =>{
        dispatch(
            {
                type:categoryActionTypes.ADD_SUB_CATEGORY,
                payload:{catId, data:createSubCategoryData}
            }
        )
    }
}

export const deleteSubCategory = (catId, subCatId) =>{
    return dispatch =>{
        dispatch(
            {
                type:categoryActionTypes.DELETE_SUB_CATEGORY,
                payload:{catId, subCatId}
            }
        )
    }
}