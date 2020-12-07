import React from 'react';
import {connect} from 'react-redux';
import {flt} from '../../js/actions';

import './style.css';


function Aside(props) {
    const activeClass = props.filter

    return (
        <div className="aside">
            <ul className="aside-menu">
                <li className={`${activeClass==="all"?"active":""}`} onClick={()=>props.filt("all")}><div className="ico"><i className="fas fa-list-ul "></i></div>All tasks</li>
                <li className={`${activeClass==="important"?"active":""}`} onClick={()=>props.filt("important")}><div className="ico"><i className="far fa-star"></i></div>Important</li>
                <li className={`${activeClass==="done"?"active":""}`} onClick={()=>props.filt("done")}><div className="ico"><i className="far fa-calendar-check"></i></div>Completed</li>
                <li className={`${activeClass==="undone"?"active":""}`} onClick={()=>props.filt("undone")}><div className="ico"><i className="far fa-calendar-times"></i></div>Uncompleted</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      filter : state.filter
    }
  }
const mapDispatchToProps = (dispatch) => ({
    filt: (str) => dispatch(flt(str)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Aside)
