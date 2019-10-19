import React, {Component} from "react";
import {connect} from "react-redux";
import {MapStateToProps, MapDispatchToProps} from "./MapDispatch";
import OptionButton from "../../OptionButton";
import AddSubCategory from "../AddSubCategory";
import SubCategoryList from "../SubCategoryList";

class CategoryList extends Component{

    constructor(){
        super()
        this.state = {
            action:"",
            actionId:""
        }
    }

    handleAddSubCate = (action, actionId) =>{
        this.setState(prevState=>{
            return{
                ...prevState,
                action,
                actionId
            }
        })
    }

    handleClose = () =>{
        this.setState(prevState=>{
            return{
                ...prevState,
                action:'',
                actionId:''
            }
        })
    }

    render(){
        return(
            <div>
                <h1>List</h1>
                <ui>
                {
                    this.props.mainCategory.length>0?
                    this.props.mainCategory.map(
                        mainCategoryItem=><li key={mainCategoryItem.id} style={categoryListStyle.listItem}>
                            {mainCategoryItem.name}
                            
                            <OptionButton name="add" onClick={()=>this.handleAddSubCate("add", mainCategoryItem.id)} />
                            <OptionButton onClick={()=>this.props.delete(mainCategoryItem.id)} name="delete" />

                            {
                                (this.state.action==="add" && this.state.actionId===mainCategoryItem.id) && <AddSubCategory catId={mainCategoryItem.id} clickAction={this.handleClose} />
                            }
                            <SubCategoryList 
                                catId={mainCategoryItem.id}
                                render={allRelatedCat=>allRelatedCat.map((allRelatedCatItem, allRelatedCatItemIndex)=><ol key={allRelatedCatItemIndex}>
                                        {allRelatedCatItem.name}
                                        <OptionButton name="add" onClick={()=>this.handleAddSubCate("subcat", allRelatedCatItem.id)} />
                                        <OptionButton onClick={()=>this.props.deleteSubCat(mainCategoryItem.id, allRelatedCatItem.id)} name="delete" />
                                        {
                                            (this.state.action==="subcat" && this.state.actionId===allRelatedCatItem.id) && <AddSubCategory catId={allRelatedCatItem.id} />
                                        }
                                        <SubCategoryList 
                                            catId={allRelatedCatItem.id}
                                            render={allRelatedSubCat=>allRelatedSubCat.map((allRelatedSubCatItem, allRelatedSubCatItemIndex)=><ol key={allRelatedSubCatItemIndex}>
                                                    {allRelatedSubCatItem.name}
                                                    <OptionButton name="add" onClick={()=>this.handleAddSubCate("subcat", allRelatedSubCatItem.id)} />
                                                    <OptionButton onClick={()=>this.props.deleteSubCat(allRelatedCatItem.id, allRelatedSubCatItem.id)} name="delete" />
                                                    {
                                                        (this.state.action==="subcat" && this.state.actionId===allRelatedSubCatItem.id) && <AddSubCategory catId={allRelatedSubCatItem.id} />
                                                    }
                                                    
                                                </ol>)
                                            }
                                        />
                                    </ol>)
                                }
                            />
                        </li>
                    )
                    :
                    <li>
                        No category found
                    </li>
                }
                </ui>
            </div>
        )
    }
}

const categoryListStyle = {
    listItem:{
        alignItems:"center",
    }
}

export default connect(MapStateToProps, MapDispatchToProps) (CategoryList);