import React, { useState } from 'react'

export default function TextForm(props){
    const handleOnChange = (event) => {
        setText(event.target.value);
      };
    
      const handleUPClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!","Success");
      };
      const handleLOClick = () => {
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to Lowercase!","Success");
      };
      const handleClear = () => {
        setText("");
        props.showAlert("Clere the Text!","Success");
      };
      const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text been copy!","Success");
      };
      const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All the extra spaces are removed ","Success");
      };
    
    
    const [text,setText] = useState('Enter text here');

    return (
        <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className={`btn mx-1 btn-${props.mode==='light'?'secondary':'dark'}`}  onClick={handleUPClick}>Convert to Uppercase</button>
<button className={`btn mx-1 btn-${props.mode==='light'?'secondary':'dark'}`}  onClick={handleLOClick}>Convert to Uppercase</button>
<button className={`btn mx-1 btn-${props.mode==='light'?'secondary':'dark'}`}  onClick={handleClear}>Clear Text</button>
<button className={`btn mx-1 btn-${props.mode==='light'?'secondary':'dark'}`}  onClick={handleCopy}>Copy Your Text</button>
<button className={`btn mx-1 btn-${props.mode==='light'?'secondary':'dark'}`}  onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div></>
    )
       
}