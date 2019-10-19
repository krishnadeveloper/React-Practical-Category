import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {createSubCategory} from "../../../store/actions/category";

export default props =>{

    const dispatch = useDispatch();
    const [cateName, setCateName] = useState('');
    const [catError, setCatError] = useState(false);
    
    const addSubCategory = () =>{
        if(!catError && cateName){
            dispatch(createSubCategory(props.catId,{id:Math.random(), name:cateName}))
        }
    }

    useEffect(()=>{
        setCatError(!cateName)
    }, [cateName, setCateName])
    return(
        <ol>
        <input type="text" onChange={(e)=>setCateName(e.target.value)} />
        <button onClick={()=>addSubCategory()}>Save</button>
        <button onClick={()=>props.clickAction()}>Close</button>
        </ol>
    )
}
