import {deleteSubCategory} from "../../../store/actions/category";

export const MapStateToProps = state => state.category;

export const MapDispatchToProps = dispatch => {
    return {
        delete : (catId, subCatId) => dispatch(deleteSubCategory(catId, subCatId))
    }
}