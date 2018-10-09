import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  
  let inputElement = null;
  switch(props.attr.config.type) {
    case ('text'): inputElement = <input 
        className={classes.InputElement} 
        {...props.attr.config}
        onChange={props.change}/>;
      break;
    case ('textarea'): inputElement = <textarea 
        className={classes.InputElement} 
        {...props.attr.config}
        onChange={props.change}/>;
      break;
    case ('select'): inputElement = <select value={props.attr.config.value} className={classes.InputElement} onChange={props.change}>
          {props.attr.config.options.map(option => 
            <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
          )}
        </select>
      break;
    default: inputElement = <input className={classes.InputElement} {...props.attr.config} onChange={props.change}/>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>  
  );
}

export default Input;