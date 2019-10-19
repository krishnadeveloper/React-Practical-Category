import React, {Component} from "react";
import {connect} from "react-redux";
import {MapStateToProps, MapDispatchToProps} from "./MapDispatch";
class Addcategory extends Component {
    
    constructor(){
        super()
        this.state = {
            category:'',
            isValid:false,
            submit:false
        }

    }

    handleCategoryInput = e =>{
        let catValue = e.target.value;
        this.setState(prevState=>{
            return{
                ...prevState,
                category:catValue,
                isValid:catValue?true:false,
            }
        })
    }

    handleCategoryFormSubmit = e =>{
        e.preventDefault();
        this.setState(prevState=>{
            return{
                ...prevState,
                submit:true
            }
        })

        if(this.state.isValid){
            this.props.add({id:Math.random(), name:this.state.category})
        }
        else{
            this.setState(prevState=>{
                return{
                    ...prevState,
                    submit:false
                }
            })
        }
    }

    render(){
        return(
            <form onSubmit={(e)=>this.handleCategoryFormSubmit(e)}>
                <input type="text" name="cate" onChange={(e)=>this.handleCategoryInput(e)} />
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps) (Addcategory);