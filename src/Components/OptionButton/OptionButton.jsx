import React from "react";

const option = btnOption =>{
    switch (btnOption) {
        case "delete":
            return <img style={{border:"1px solid red", height:30, width:30}} src="/icon/delete.png" alt="delete" title="Delete" />
        case "edit":
            return <img src="/icon/edit.png" alt="edit" title="Edit" />
        default:
            return <img style={{border:"1px solid gray", height:30, width:30}} src="/icon/add.png" alt="add" title="Add" />
    }
}

export default props =>{   
    return(
        <button 
            {
                ...props
            }
            style={{height:30, width:30, border:"none", padding:5, margin:10}}>
            {
                option(props.name)
            }
        </button>
    )
}