import React from 'react';
import { useState } from 'react';
import Summary from './Summary';
import Textinfo from './Textinfo';

export default function Textform(props) {
    const [text, setText] = useState("")

    const handleInput = (event) => {
        console.log("handle input");
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        console.log("Function invoked of the upper case");
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }
    const handleSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space, trim extra spaces at the ends
        setText(newText);
    }

    const handleCopyText = () => {
        var text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    return (
        <>
            <h2>{props.heading}</h2>
            <div className=" container mb-3">
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={handleInput} ></textarea>
                <button type="button" className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpperCase}>Upper Case </button>
                <button type="button" className="btn btn-primary btn-sm mx-2 my-2" onClick={handleLowerCase}>Lower Case </button>
                <button type="button" className="btn btn-primary btn-sm  mx-2 my-2" onClick={handleSpaces}>Remove Spaces </button>
                <button type="button" className="btn btn-primary btn-sm mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                <button type="button" className="btn btn-primary btn-sm mx-2 my-2" onClick={handleCopyText}>Copy Text </button>
            </div>
            <hr />
            <div className='container my-2'>
                <Textinfo text={text} />
                <hr />
                <Summary text={text} />
            </div>
        </>
    )
}
