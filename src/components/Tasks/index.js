import React, {useState} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {add,done,important,dlt} from '../../js/actions'


function Tasks(props) {
    const [newTask,setNewTask]=useState("")
    const handleChange = (e) => {
        setNewTask(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.add(newTask);
        setNewTask("")
    }
    const handleDone = (id) => {
        props.done(id);
    }
    const handleImportant = (id) => {
        props.important(id);
    }
    
    const tasks = props.todos.filter(elem=>elem.description.toLowerCase().includes(props.searchValue.toLowerCase())).filter(elem => {
        if(props.filter==="done"){return elem.isDone}
        else if (props.filter==="all"){return true}
        else if (props.filter==="undone"){return !elem.isDone}
        else if (props.filter==="important"){return elem.isImportant}
    }
    ).map((elem)=>
        <div key={elem.id} className={`task ${elem.isDone?"done":""}`} >
            <div>
                <button onClick={()=>handleDone(elem.id)}><i className={`${elem.isDone?"fas":"far"} fa-circle`}></i></button>
                <p>{elem.description}</p>
            </div>
            <div>
                <button onClick={()=>handleImportant(elem.id)}><i className={`${elem.isImportant?"fas activestar":"far"} fa-star`}></i></button>
                <button onClick={()=>props.dlt(elem.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    ).reverse()

    return (
        <div className="tasks">
            <h2>Tasks</h2>
            <form className="new-task" onSubmit={(e)=>handleClick(e)}>
                <input placeholder="Add a new task" value={newTask} onChange={(e)=>handleChange(e)} />
            </form>
            <div className="current-tasks">
                {
                    tasks.length>0?tasks:<p className="unshown-tasks">No tasks</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos,
        filter : state.filter,
        searchValue : state.searchValue
    }
  }

const mapDispatchToProps = (dispatch) => ({
    add: (str) => dispatch(add(str)),
    done: (id) => dispatch(done(id)),
    important: (id) => dispatch(important(id)),
    dlt: (id) => dispatch(dlt(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
