import React from 'react';
import './Tags.css';
import {useSelector} from 'react-redux';
// import {Link} from 'react-router-dom'
function Tags(){

    const tags = useSelector((state) => state.allTags.tags);
    const renderTags = tags.map((tag)=> {
        const {id,name} = tag;
        return(<>
              <button>{name}</button>
        </>);
    })
    return(
      <div className='tags'>
        {renderTags}
      </div>  
    );
}

export default Tags;