import React, {Component} from "react";
import {connect} from "react-redux";
import {MapStateToProps, MapDispatchToProps} from "./SubCatMapDispatch";

class SubCategoryList extends Component {

    render(){
        return(<>
        {this.props.render(this.props.subCategory.hasOwnProperty(this.props.catId)?this.props.subCategory[this.props.catId]:[])}
        </>)
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(SubCategoryList);
