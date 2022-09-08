import React from 'react';
import '../styles.css'

function Tab({category, htmlValue, checked}) {
    return ( 
        <label><input type="radio" value={htmlValue} name="course-choice" checked={checked}/><span>{category}</span></label>
     );
}

export default Tab;