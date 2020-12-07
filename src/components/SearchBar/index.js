import React,{useState, useEffect} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {search} from '../../js/actions';

function SearchBar(props) {
    
    const [searchValue,setSearchValue]=useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    useEffect(() => {
        props.search(searchValue);
      });
    return (
        <div className="Searchbar">
            <input placeholder="Search for a task here" value={searchValue} onChange={(e)=>handleChange(e)}></input>
            {searchValue.length>0?null:<button><i className="fas fa-search"></i></button>}
            {searchValue.length>0?<button onClick={()=>setSearchValue("")}><i className="fas fa-times-circle"></i></button>:null}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    search: (str) => dispatch(search(str)),
});


export default connect(null,mapDispatchToProps)(SearchBar)
