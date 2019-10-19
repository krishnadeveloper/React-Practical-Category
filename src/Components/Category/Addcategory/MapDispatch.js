import {createCategory} from "../../../store/actions/category"

export const MapStateToProps = state => state.category;

export const MapDispatchToProps = dispatch => {
    return{
        add: addData => dispatch(createCategory(addData)),
        
    }
}