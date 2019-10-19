import {deleteCategory, deleteSubCategory} from "../../../store/actions/category"
export const MapStateToProps = state => state.category;
export const MapDispatchToProps = dispatch =>{
    return {
        delete: id => dispatch(deleteCategory(id)),
        deleteSubCat : (catId, subCatId) => dispatch(deleteSubCategory(catId, subCatId))
    }
}
