import React, {Component} from "react";
import Addcategory from "./Addcategory";
import CategoryList from "./CategoryList/CategoryList";

class Category extends Component {
    render(){
        return(
            <div>
                <h1>Category</h1>
                <Addcategory />
                <CategoryList />
            </div>
        )
    }
}

export default Category;