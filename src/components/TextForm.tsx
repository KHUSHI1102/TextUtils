import React, { useState } from 'react';

interface TextFormProps {
  heading: string;
  mode: string;
  showAlert: (message: string, type: string) => void;
}

export default function TextForm(props: TextFormProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleUPClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "Success");
  };
  const handleLOClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "Success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Clear the Text!", "Success");
  };
  const handleCopy = () => {
    const textArea = document.getElementById("myBox") as HTMLTextAreaElement;
    textArea.select();
    document.execCommand("copy");
    props.showAlert("Your text has been copied!", "Success");
  };
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All the extra spaces are removed", "Success");
  };

  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <button className={`btn mx-1 btn-${props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={handleUPClick}>Convert to Uppercase</button>
        <button className={`btn mx-1 btn-${props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={handleLOClick}>Convert to Lowercase</button>
        <button className={`btn mx-1 btn-${props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={handleClear}>Clear Text</button>
        <button className={`btn mx-1 btn-${props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={handleCopy}>Copy Your Text</button>
        <button className={`btn mx-1 btn-${props.mode === 'light' ? 'secondary' : 'dark'}`} onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
