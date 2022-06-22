import React from 'react';
// import {useState} from 'react';
// import products from '../../products'

const Value = (props) => {
  
  
 

    return (
        <div>
           <input type="text" value={props.text} onChange={(e) => props.text_Value(e)} className='fields_water'/> 
        </div>
    );
};

export default Value;